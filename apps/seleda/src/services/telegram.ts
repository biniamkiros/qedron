import {
  getMarkdownString,
  getRecentTenders,
  getTenderDetails,
  getTenderForChannelPost,
  getUserActiveEndDate,
  getUserTags,
  processRecentTenderForUser,
  pullTenders,
  setTag,
  updateBlockedUser,
  upsertUser,
} from "./egp";
import { getBot } from "~/config/gram.config";

let seledaGramBot: any = null;

const NEW_TAG_RESULTS = "show_tenders_for_tags";
const groupChatMessage =
  "በቡድን ውስጥ የማውራት ብቃቴ የተወሰነ ስለሆኔ ይህን በዚህ ይጠቀሙ 👉 @SeledaGramBot";

export const initSeledaBot = async () => {
  return getBot().then((bot) => {
    // Enable graceful stop
    process.once("SIGINT", () => {
      console.log("🚀 ~ SIGINT: stop bot polling.");
      return bot.stopPolling();
    });

    process.once("SIGTERM", () => {
      console.log("🚀 ~ SIGINT: stop bot polling.");
      return bot.stopPolling();
    });

    bot.on("callback_query", (query: { data?: any; message?: any }) => {
      console.log("🚀 ~ bot.on ~ query:", query);
      const { message: { chat: { id } } = {} } = query;
      switch (query.data) {
        case NEW_TAG_RESULTS:
          bot
            .sendMessage(id, "Fetching....")
            .catch((error: { code: any; response: { body: any } }) => {
              console.log(error.code); // => 'ETELEGRAM'
              console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
              handleError(id, error);
            });
          processRecentTenderForUser(id);
          break;
        default:
          console.log("🚀 ~ bot.on ~ query.data:", query.data);
          break;
      }
    });

    bot.on("polling_error", (error: { code: any }) => {
      console.log(error.code); // => 'EFATAL'
    });

    bot.onText(/\/alert/, async (msg: { chat: { id: any; type: any } }) => {
      const {
        chat: { id, type },
      } = msg;
      if (type !== "private") {
        bot
          .sendMessage(id, groupChatMessage)
          .catch((error: { code: any; response: { body: any } }) => {
            console.log(error.code); // => 'ETELEGRAM'
            console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
            handleError(id, error);
          });
        return;
      }
      const tags = await getUserTags(id);

      let escapedMessage = getMarkdownString(
        "Send your keywords in amharic and English separated by commas with the correct spelling"
      );
      escapedMessage += "\n\n";
      escapedMessage +=
        tags.length > 0
          ? "Your current keywords\n\n`" +
            getMarkdownString(tags.join(", ")) +
            "`"
          : getMarkdownString(
              "e.g books, printer, Ministry of education, መለዋወጫ"
            );
      bot
        .sendMessage(id, escapedMessage, {
          parse_mode: "MarkdownV2",
          reply_markup: { force_reply: true },
        })
        .then((alertMsg: { chat: { id: any }; message_id: any }) => {
          const replyListenerId = bot.onReplyToMessage(
            alertMsg.chat.id,
            alertMsg.message_id,
            async (msg: { text: string }) => {
              const tags = msg.text.split(",").map((t) => t.trim());
              const { user, count } = await setTag(
                alertMsg.chat.id,
                tags.filter((t) => typeof t === "string" && t.length > 0)
              );

              if (user) {
                const isTooMuchAlert = count > 0;
                const options = isTooMuchAlert
                  ? {
                      parse_mode: "MarkdownV2",
                      reply_markup: {
                        inline_keyboard: [
                          [
                            {
                              text: `የመረጡትን ቃላት የያዙ ${count} ጨረታዎችን ለማየት ይጫኑ`,
                              callback_data: NEW_TAG_RESULTS,
                            },
                          ],
                        ],
                      },
                    }
                  : {
                      parse_mode: "MarkdownV2",
                    };

                if (!isTooMuchAlert) processRecentTenderForUser(id);
                bot
                  .sendMessage(
                    id,
                    getMarkdownString(
                      "Your alert tags is set. Tenders which contain these tags will be sent to you on your preffered time.\n\nYour current keywords are: "
                    ) +
                      "\n\n`" +
                      user.tags.join(", ") +
                      "`",
                    options
                  )
                  .catch((error: { code: any; response: { body: any } }) => {
                    console.log(error.code); // => 'ETELEGRAM'
                    console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
                    handleError(id, error);
                  });
              } else {
                bot
                  .sendMessage(id, "Error. Please try again.")
                  .catch((error: { code: any; response: { body: any } }) => {
                    console.log(error.code); // => 'ETELEGRAM'
                    console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
                    handleError(id, error);
                  });
              }
              bot.removeReplyListener(replyListenerId);
            }
          );
        })
        .catch((error: { code: any; response: { body: any } }) => {
          console.log(error.code); // => 'ETELEGRAM'
          console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
          handleError(id, error);
        });
    });

    bot.onText(/\/clear/, async (msg: { chat: { id: any; type: any } }) => {
      const {
        chat: { id, type },
      } = msg;
      if (type !== "private") {
        bot
          .sendMessage(id, groupChatMessage)
          .catch((error: { code: any; response: { body: any } }) => {
            console.log(error.code); // => 'ETELEGRAM'
            console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
            handleError(id, error);
          });
        return;
      }
      const { user, count } = await setTag(id, []);
      bot
        .sendMessage(
          id,
          user
            ? "Your tags are cleared"
            : "Error clearing tags. Try again later"
        )
        .catch((error: { code: any; response: { body: any } }) => {
          console.log(error.code); // => 'ETELEGRAM'
          console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
          handleError(id, error);
        });
    });

    bot.onText(/\/tags/, async (msg: { chat: { id: any; type: any } }) => {
      const {
        chat: { id, type },
      } = msg;
      if (type !== "private") {
        bot
          .sendMessage(id, groupChatMessage)
          .catch((error: { code: any; response: { body: any } }) => {
            console.log(error.code); // => 'ETELEGRAM'
            console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
            handleError(id, error);
          });
        return;
      }

      const tags = await getUserTags(id);

      let escapedMessage = getMarkdownString(
        "Tags are used to search and filter new tenders. Make sure you list you interests clearly and check for spelling. To edit keywords use /alert"
      );
      escapedMessage += "\n\n";
      escapedMessage +=
        tags.length > 0
          ? "Your current keywords\n\n`" +
            getMarkdownString(tags.join(", ")) +
            "`"
          : getMarkdownString("You currently have no tags set.");
      bot
        .sendMessage(id, escapedMessage, { parse_mode: "MarkdownV2" })
        .catch((error: { code: any; response: { body: any } }) => {
          console.log(error.code); // => 'ETELEGRAM'
          console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
          handleError(id, error);
        });
    });

    bot.onText(/\/search/, async (msg: { chat: { id: any; type: any } }) => {
      const {
        chat: { id, type },
      } = msg;
      if (type !== "private") {
        bot
          .sendMessage(id, groupChatMessage)
          .catch((error: { code: any; response: { body: any } }) => {
            console.log(error.code); // => 'ETELEGRAM'
            console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
            handleError(id, error);
          });
        return;
      }

      bot
        .sendMessage(
          id,
          getMarkdownString("Search is coming soon. \nInfo +251911702254"),
          {
            parse_mode: "MarkdownV2",
          }
        )
        .catch((error: { code: any; response: { body: any } }) => {
          console.log(error.code); // => 'ETELEGRAM'
          console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
          handleError(id, error);
        });
    });

    bot.onText(
      /\/start/,
      async (msg: {
        chat: any;
        from: any;
        text?: any;
        reply_to_message?: any;
      }) => {
        const {
          chat: { id, type },
          from: { username, first_name, last_name },
        } = msg;
        if (type !== "private") {
          bot
            .sendMessage(id, groupChatMessage)
            .catch((error: { code: any; response: { body: any } }) => {
              console.log(error.code); // => 'ETELEGRAM'
              console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
              handleError(id, error);
            });
          return;
        } else {
          handleChatUser(msg);
          const name =
            (first_name ? first_name : "") + " " + (last_name ? last_name : "");
          const formattedUsername = username ? "@" + username : name;
          notifyAdmin(`Starting chat with ${formattedUsername}`);
          bot
            .sendMessage(
              id,
              "welcome, Don't miss any new tenders. get notification for new tender. \n\npress /alert to set alert to set keywords for new tenders. \n\nI'll notify you when tenders containing you keywords get published."
            )
            .catch((error: { code: any; response: { body: any } }) => {
              console.log(error.code); // => 'ETELEGRAM'
              console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
              handleError(id, error);
            });
        }
      }
    );

    bot.onText(/\/subscribe/, async (msg: any) => {
      const {
        chat: { id, type },
      } = msg;
      const arrayButton = [];
      arrayButton.push([
        {
          text: "ክፍያ ይፈጽሙ",
          web_app: { url: "https://seleda.qedron.com/payment" },
          // web_app: { url: "https://www.qedron.com/seleda/tma" },
        },
      ]);

      const options = {
        reply_markup: JSON.stringify({ inline_keyboard: arrayButton }),
        parse_mode: "HTML",
      };
      const subDate = await getUserActiveEndDate(id);
      const message = `የሰሌዳግራም ደንበኝነት ምዝገባዎ በ ${subDate} ያልቃል። ለማራዘም ከስር ያለውን 👇 ማስፈንጠሪያ በመጫን ክፍያ ይፈጽሙ።`;
      await bot.sendMessage(msg.chat.id, message, options);
    });

    bot.on(
      "message",
      async (msg: { text?: any; reply_to_message?: any; chat?: any }) => {
        const {
          chat: { id, type },
        } = msg;
        if (type !== "private") {
          bot
            .sendMessage(id, groupChatMessage)
            .catch((error: { code: any; response: { body: any } }) => {
              console.log(error.code); // => 'ETELEGRAM'
              console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
              handleError(id, error);
            });
          return;
        } else {
          handleChatUser(msg);
          if (msg.text && !msg.reply_to_message && msg.text[0] !== "/") {
            //   const index = msg.text.lastIndexOf("\n");
            //   const objectId = index > -1 ? msg.text.split("\n").pop() : msg.text;
            //   if (mongoose.Types.ObjectId.isValid(objectId)) selectTender(msg, objectId);
            //   else if (/^\d$/.test(msg.text)) handlePagination(msg, msg.text);
            //   else

            bot
              .sendMessage(
                id,
                `እባክዎ ከሜኑ ላይ ያሉትን ተዕዛዞች ብቻ ይጠቀሙ። ወይም እነዚህን አማራጮች ይጠቀሙ 
                
/alert - የመረጥኩት ቃላቶችን የያዙ ጨረታዎች ሲወጡ ላክልኝ
/tags - የመረጥኩት ቃላቶችን አሳየኝ
/search - የመረጥኩት ቃላቶችን የያዙ ጨረታዎችን ፈልግልኝ
/subscribe - የምዝገባ ክፍያ ለመክፈል `
              )
              .catch((error: { code: any; response: { body: any } }) => {
                console.log(error.code); // => 'ETELEGRAM'
                console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
                handleError(id, error);
              });
          }
        }
      }
    );

    seledaGramBot = bot;

    return bot;
  });
};

export const sendUsernameOptions = async (
  username: string,
  message: string,
  options: {
    parse_mode: string;
    reply_markup: { inline_keyboard: { text: string; url: string }[][] };
  }
): Promise<boolean> => {
  if (!seledaGramBot) {
    console.error(
      "🚀 ~ sendTelegram ~ has not been iniatialised. Initialising..."
    );
    seledaGramBot = await initSeledaBot();
  }

  if (!seledaGramBot) {
    console.error(
      "🚀 ~ sendTelegram ~ Error iniatialising bot.",
      seledaGramBot
    );
    return false;
  }
  return seledaGramBot
    .sendMessage(username, message, options)
    .then((Msg: { chat: { id: any }; message_id: any }) => {
      return true;
    })
    .catch((error: { code: any; response: { body: any } }) => {
      console.log(error.code); // => 'ETELEGRAM'
      console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
      handleError(username, error);
      return false;
    });
};

export const sendUsernameReplyOptions = async (
  username: string,
  message: string,
  options: {
    reply_to_message_id: number;
    parse_mode: string;
    reply_markup: { inline_keyboard: { text: string; url: string }[][] };
  }
): Promise<boolean> => {
  if (!seledaGramBot) {
    console.error(
      "🚀 ~ sendTelegram ~ has not been iniatialised. Initialising..."
    );
    seledaGramBot = await initSeledaBot();
  }

  if (!seledaGramBot) {
    console.error(
      "🚀 ~ sendTelegram ~ Error iniatialising bot.",
      seledaGramBot
    );
    return false;
  }
  return seledaGramBot
    .sendMessage(username, message, options)
    .then((Msg: { chat: { id: any }; message_id: any }) => {
      return true;
    })
    .catch((error: { code: any; response: { body: any } }) => {
      console.log(error.code); // => 'ETELEGRAM'
      console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
      handleError(username, error);
      return false;
    });
};

export const handleChatUser = (msg: {
  chat?: any;
  from?: any;
  text?: any;
  reply_to_message?: any;
}) => {
  const {
    chat: { id },
    from: { username, first_name, last_name },
  } = msg;
  const name =
    (first_name ? first_name : "") + " " + (last_name ? last_name : "");
  const formattedUsername = username ? "@" + username : "";
  upsertUser(name.trim(), id, formattedUsername, "active");
};

export const sendTelegramMarkdown = async (
  chatId: number,
  content: String
): Promise<boolean> => {
  if (!seledaGramBot) {
    console.error(
      "🚀 ~ sendTelegram ~ has not been iniatialised. Initialising..."
    );
    seledaGramBot = await initSeledaBot();
  }

  if (!seledaGramBot) {
    console.error(
      "🚀 ~ sendTelegram ~ Error iniatialising bot.",
      seledaGramBot
    );
    return false;
  }

  return seledaGramBot
    .sendMessage(chatId, content, { parse_mode: "MarkdownV2" })
    .then((Msg: { chat: { id: any }; message_id: any }) => {
      return true;
    })
    .catch((error: { code: any; response: { body: any } }) => {
      console.log(error.code); // => 'ETELEGRAM'
      console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
      handleError(chatId, error);
      notifyAdmin(
        "Error sending MARKDOWN message.\nid: " +
          chatId +
          "\nError: " +
          JSON.stringify(error)
      );
      return false;
    });
};

export const sendTelegram = async (
  chatId: number,
  content: String,
  markdown: boolean
): Promise<boolean> => {
  if (!seledaGramBot) {
    console.error(
      "🚀 ~ sendTelegram ~ has not been iniatialised. Initialising..."
    );
    seledaGramBot = await initSeledaBot();
  }

  if (!seledaGramBot) {
    console.error(
      "🚀 ~ sendTelegram ~ Error iniatialising bot.",
      seledaGramBot
    );
    return false;
  }

  return seledaGramBot
    .sendMessage(chatId, content)
    .then((Msg: { chat: { id: any }; message_id: any }) => {
      return true;
    })
    .catch((error: { code: any; response: { body: any } }) => {
      console.log(error.code); // => 'ETELEGRAM'
      console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
      notifyAdmin(
        "Error sending message.\nid: " +
          chatId +
          "\nError: " +
          JSON.stringify(error)
      );
      handleError(chatId, error);
      return false;
    });
};

export const handleUpdates = async (update: any) => {
  if (!seledaGramBot) {
    console.error(
      "🚀 ~ sendTelegram ~ has not been iniatialised. Initialising..."
    );
    seledaGramBot = await initSeledaBot();
  }

  if (!seledaGramBot) {
    console.error(
      "🚀 ~ sendTelegram ~ Error iniatialising bot.",
      seledaGramBot
    );
    return false;
  }
  console.log("🚀 ~ handleUpdates ~ update:", update);
  seledaGramBot.processUpdate(update);
};

export const handleError = async (chatId: any, error: any) => {
  // "error_code":403,"description":"Forbidden: Bot was blocked by the user"
  const { error_code, description } = error.response.body;
  if (error.response && (error_code === 403 || error_code === 400)) {
    // ...snip...
    // ok: false,
    // error_code: 400,
    // description: 'Bad Request: chat not found'
    updateBlockedUser(chatId);
  }
};

export const setPaymentURl = async (chatId: any) => {
  if (!seledaGramBot) {
    console.error(
      "🚀 ~ sendTelegram ~ has not been iniatialised. Initialising..."
    );
    seledaGramBot = await initSeledaBot();
  } else {
    seledaGramBot.setChatMenuButton({
      chat_id: chatId,
      menu_button: JSON.stringify({
        // text: 'Order food',
        // type: 'commands',

        text: "Order food",
        type: "web_app",
        web_app: {
          url: "https://tg.elevator.com.et",
        },
      }),
    });
  }
};

export const notifyAdmin = async (message: string): Promise<boolean> => {
  return await sendTelegram(383604329, message, false);
};
