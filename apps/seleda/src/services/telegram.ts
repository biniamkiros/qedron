import {
  getTruncatedMarkdownString,
  getUserTags,
  processRecentTenderForUser,
  pullTenders,
  setTag,
  upsertUser,
} from "./egp";
import { getBot } from "~/config/gram.config";

let seledaGramBot: any = null;

const COMMAND_TEMPLATE1 = "show_tenders_for_tags";

export const initSeledaBot = async () => {
  getBot().then((bot) => {
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
        case COMMAND_TEMPLATE1:
          bot.sendMessage(id, "Fetching....");
          processRecentTenderForUser(id);
          break;
      }
    });
    bot.on("polling_error", (error: { code: any }) => {
      console.log(error.code); // => 'EFATAL'
    });

    bot.onText(/\/alert/, async (msg: { chat: { id: number } }) => {
      const {
        chat: { id },
      } = msg;

      const tags = await getUserTags(id);

      let escapedMessage = getTruncatedMarkdownString(
        "Send your keywords in amharic and English separated by commas with the correct spelling"
      );
      escapedMessage += "\n\n";
      escapedMessage +=
        tags.length > 0
          ? "Your current keywords\n\n`" +
            getTruncatedMarkdownString(tags.join(", ")) +
            "`"
          : getTruncatedMarkdownString(
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
              console.log("🚀 ~ count:", count);
              if (user) {
                const isTooMuchAlert = count > 5;
                const options = isTooMuchAlert
                  ? {
                      parse_mode: "MarkdownV2",
                      reply_markup: [
                        [
                          {
                            text: `There are with the new keywords. Press to show`,
                            callback_data: COMMAND_TEMPLATE1,
                          },
                        ],
                      ],
                    }
                  : {
                      parse_mode: "MarkdownV2",
                    };

                if (!isTooMuchAlert) processRecentTenderForUser(id);
                bot.sendMessage(
                  id,
                  getTruncatedMarkdownString(
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

    bot.onText(
      /\/start/,
      async (msg: {
        chat: { id: number };
        from: { username: string; first_name: string; last_name: string };
      }) => {
        const {
          chat: { id },
          from: { username, first_name, last_name },
        } = msg;
        // const user = username
        //     ? "@" + username
        //     : first_name
        //     ? first_name
        //     : "" + " " + last_name
        //     ? last_name
        //     : "";
        // const name = first_name
        //     ? first_name
        //     : "" + " " + last_name
        //     ? last_name
        //     : "";
        // const formattedUsername = msg.from.username ? "@" + msg.from.username : "null";
        // upsertUser(name.trim(), id, formattedUsername);
        handleChatUser(msg);
        bot.sendMessage(
          id,
          "welcome, Don't miss any new tenders. get notification for new tender. \n\npress /alert to set alert to set keywords for new tenders. \n\nI'll notify you when tenders containing you keywords get published."
        );
      }
    );

    bot.on(
      "message",
      async (msg: { text?: any; reply_to_message?: any; chat?: any }) => {
        // pullTenders()

        const {
          chat: { id },
        } = msg;
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
    );

    seledaGramBot = bot;
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
  const name = first_name ? first_name : "" + " " + last_name ? last_name : "";
  const formattedUsername = msg.from.username
    ? "@" + msg.from.username
    : "null";
  upsertUser(name.trim(), id, formattedUsername);
};

export const sendTelegramMarkdown = async (
  chatId: number,
  content: String
): Promise<boolean> => {
  if (!seledaGramBot) {
    console.error("🚀 ~ sendTelegram ~ has not been iniatialised.");
    await initSeledaBot();
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
    console.error("🚀 ~ sendTelegram ~ has not been iniatialised.");
    await initSeledaBot();
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
    console.error("🚀 ~ sendTelegram ~ has not been iniatialised.");
    await initSeledaBot();
    return false;
  } else {
    console.log("Handling seleda telegram updates: ", update);
    seledaGramBot.processUpdate(update);
  }
};

//
// import { setTag, upsertUser } from "./egp";
// import { getBot } from "~/config/gram.config";

// // export const initSeledaBot= async ()=>{
// let bot = await getBot();
// // Enable graceful stop
// process.once('SIGINT', () => {
//     console.log("🚀 ~ SIGINT: stop bot polling.",)
//     return seledaGramBot.stopPolling()
// })

// process.once('SIGTERM', () => {
//     console.log("🚀 ~ SIGINT: stop bot polling.",)
//     return seledaGramBot.stopPolling()
// })

// bot.on('polling_error', (error: { code: any; }) => {
//     console.log(error.code);  // => 'EFATAL'
// });

// bot.onText(/\/alert/, async (msg: { chat: { id: number; }; }) => {
//     const {
//         chat: { id },
//         } = msg;
//     bot
//     .sendMessage(id, "send your tags separated by commas.\n e.g books, printer, Ministry of education", { reply_markup: { force_reply: true, },})
//     .then((alertMsg: { chat: { id: any; }; message_id: any; }) => {
//         const replyListenerId = bot.onReplyToMessage(
//         alertMsg.chat.id,
//         alertMsg.message_id,
//         async (msg: { text: string; }) => {
//             const tags = msg.text.split(",").map((t) => t.trim());
//             const u = await setTag(alertMsg.chat.id, tags);
//             if(u) bot.sendMessage(id, "Your alert tags is set. Tenders which contain these tags will be sent to you on your preffered time. Your tags: " + u.tags);
//             else bot.sendMessage(id, "errorFetchingUserMessage");
//             bot.removeReplyListener(replyListenerId);
//         });}
//     );
// });

// bot.onText(/\/start/, async (msg: { chat: { id: number; }, from: { username: string, first_name: string, last_name:string }; }) => {
//     const {
//         chat: { id },
//         from: { username, first_name, last_name },
//     } = msg;
//     const user = username
//         ? "@" + username
//         : first_name
//         ? first_name
//         : "" + " " + last_name
//         ? last_name
//         : "";
//     const name = first_name
//         ? first_name
//         : "" + " " + last_name
//         ? last_name
//         : "";
//     const formattedUsername = msg.from.username ? "@" + msg.from.username : "null";
//     bot.sendMessage(id, "welcome, Don't miss any new tenders. get notification for new tender. \n\npress /alert to set alert to set keywords for new tenders. \n\nI'll notify you when tenders containing you keywords get published.");
//     upsertUser(name.trim(), id, formattedUsername);
// });

// bot.on("message", async (msg: { text?: any; reply_to_message?: any; chat?: any; }) => {
//     const {
//         chat: { id },
//     } = msg;
//     console.log("🚀 ~ bot.onmessages ~ id:", id)
//     if (msg.text && !msg.reply_to_message && msg.text[0] !== "/") {
//     //   const index = msg.text.lastIndexOf("\n");
//     //   const objectId = index > -1 ? msg.text.split("\n").pop() : msg.text;
//     //   if (mongoose.Types.ObjectId.isValid(objectId)) selectTender(msg, objectId);
//     //   else if (/^\d$/.test(msg.text)) handlePagination(msg, msg.text);
//     //   else
//         bot.sendMessage(id, "Please only use the commands from the menu.");
//     }
//     });
// // }
// export const initSeledaBot = () =>{
//     console.log("🚀 ~ initialised ~ bot:", bot)
//     return bot
// }

// export const sendTelegramMarkdown = async (chatId:number, content:String):Promise<boolean> => {
//     return bot.sendMessage(chatId, content, { parse_mode: "MarkdownV2" }).then((Msg: { chat: { id: any; }; message_id: any; }) => {
//         return true;
//     }).catch((error: { code: any; response: { body: any; }; }) => {
//         console.log(error.code); // => 'ETELEGRAM'
//         console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
//         return false;
//     });
// };

// export const sendTelegram = async (chatId:number, content:String, markdown:boolean):Promise<boolean> => {
//     return bot.sendMessage(chatId, content).then((Msg: { chat: { id: any; }; message_id: any; }) => {
//         return true;
//     }).catch((error: { code: any; response: { body: any; }; }) => {
//         console.log(error.code); // => 'ETELEGRAM'
//         console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
//         return false;
//     });
// };

// export const handleUpdates = async (update: any) => {

//         console.log("Handling seleda telegram updates: ", update);
//         bot.processUpdate(update);

// };
