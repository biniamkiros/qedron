import {
  getMarkdownString,
  getRecentTenders,
  getTenderDetails,
  getTenderForChannelPost,
  getUserTags,
  processRecentTenderForUser,
  pullTenders,
  setTag,
  upsertUser,
} from "./egp";
import { getBot } from "~/config/gram.config";

let seledaGramBot: any = null;

const NEW_TAG_RESULTS = "show_tenders_for_tags";
const groupChatMessage =
  "በቡድን ውስጥ የማውራት ብቃቴ የተወሰነ ስለሆኔ ይህን በዚህ ይጠቀሙ 👉 @TetherGramBot";

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
      const { message: { chat: { id } } = {} } = query;
      switch (query.data) {
        case NEW_TAG_RESULTS:
          bot.sendMessage(id, "Fetching....");
          processRecentTenderForUser(id);
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
        bot.sendMessage(id, groupChatMessage);
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
              const { user, count } = await setTag(alertMsg.chat.id, tags);

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
                bot.sendMessage(
                  id,
                  getMarkdownString(
                    "Your alert tags is set. Tenders which contain these tags will be sent to you on your preffered time.\n\nYour current keywords are: "
                  ) +
                    "\n\n`" +
                    user.tags.join(", ") +
                    "`",
                  options
                );
              } else {
                bot.sendMessage(id, "Error. Please try again.");
              }
              bot.removeReplyListener(replyListenerId);
            }
          );
        });
    });

    bot.onText(/\/clear/, async (msg: { chat: { id: any; type: any } }) => {
      const {
        chat: { id, type },
      } = msg;
      if (type !== "private") {
        bot.sendMessage(id, groupChatMessage);
        return;
      }
      const { user, count } = await setTag(id, []);
      bot.sendMessage(
        id,
        user ? "Your tags are cleared" : "Error clearing tags. Try again later"
      );
    });

    bot.onText(/\/tags/, async (msg: { chat: { id: any; type: any } }) => {
      const {
        chat: { id, type },
      } = msg;
      if (type !== "private") {
        bot.sendMessage(id, groupChatMessage);
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
      bot.sendMessage(id, escapedMessage, { parse_mode: "MarkdownV2" });
    });

    bot.onText(/\/search/, async (msg: { chat: { id: any; type: any } }) => {
      const {
        chat: { id, type },
      } = msg;
      if (type !== "private") {
        bot.sendMessage(id, groupChatMessage);
        return;
      }

      bot.sendMessage(
        id,
        getMarkdownString("Search is coming soon. \nInfo +251911702254"),
        {
          parse_mode: "MarkdownV2",
        }
      );
    });

    bot.onText(/\/start/, async (msg: { chat: { id: number; type: any } }) => {
      const {
        chat: { id, type },
      } = msg;
      if (type !== "private") {
        bot.sendMessage(id, groupChatMessage);
        return;
      } else {
        handleChatUser(msg);
        bot.sendMessage(
          id,
          "welcome, Don't miss any new tenders. get notification for new tender. \n\npress /alert to set alert to set keywords for new tenders. \n\nI'll notify you when tenders containing you keywords get published."
        );
      }
    });

    bot.on(
      "message",
      async (msg: { text?: any; reply_to_message?: any; chat?: any }) => {
        const {
          chat: { id, type },
        } = msg;
        if (type !== "private") {
          bot.sendMessage(id, groupChatMessage);
          return;
        } else {
          handleChatUser(msg);
          if (msg.text && !msg.reply_to_message && msg.text[0] !== "/") {
            //   const index = msg.text.lastIndexOf("\n");
            //   const objectId = index > -1 ? msg.text.split("\n").pop() : msg.text;
            //   if (mongoose.Types.ObjectId.isValid(objectId)) selectTender(msg, objectId);
            //   else if (/^\d$/.test(msg.text)) handlePagination(msg, msg.text);
            //   else

            bot.sendMessage(id, "Please only use the commands from the menu.");
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
  upsertUser(name.trim(), id, formattedUsername);
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
  seledaGramBot.processUpdate(update);
};
