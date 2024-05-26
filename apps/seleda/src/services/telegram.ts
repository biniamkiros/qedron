import { setTag, upsertUser } from "./egp";
import { getBot } from "~/config/gram.config";

let seledaGramBot:any = null
export const initSeledaBot= async ()=>{
    getBot().then(bot=>{
        // Enable graceful stop
        process.once('SIGINT', () => {
            console.log("🚀 ~ SIGINT: stop bot polling.",)
            return bot.stopPolling()
        })

        process.once('SIGTERM', () => {
            console.log("🚀 ~ SIGINT: stop bot polling.",)
            return bot.stopPolling()
        })

        bot.on('polling_error', (error: { code: any; }) => {
            console.log(error.code);  // => 'EFATAL'
        });

        bot.onText(/\/alert/, async (msg: { chat: { id: number; }; }) => {
            const {
                chat: { id },
                } = msg;
            bot
            .sendMessage(id, "send your tags separated by commas.\n e.g books, printer, Ministry of education", { reply_markup: { force_reply: true, },})
            .then((alertMsg: { chat: { id: any; }; message_id: any; }) => {
                const replyListenerId = bot.onReplyToMessage(
                alertMsg.chat.id,
                alertMsg.message_id,
                async (msg: { text: string; }) => {
                    const tags = msg.text.split(",").map((t) => t.trim());
                    const u = await setTag(alertMsg.chat.id, tags);
                    if(u) bot.sendMessage(id, "Your alert tags is set. Tenders which contain these tags will be sent to you on your preffered time. Your tags: " + u.tags);
                    else bot.sendMessage(id, "errorFetchingUserMessage");
                    bot.removeReplyListener(replyListenerId);
                });}        
            );
        });

        bot.onText(/\/start/, async (msg: { chat: { id: number; }, from: { username: string, first_name: string, last_name:string }; }) => {
            const {
                chat: { id },
                from: { username, first_name, last_name },
            } = msg;
            const user = username
                ? "@" + username
                : first_name
                ? first_name
                : "" + " " + last_name
                ? last_name
                : "";
            const name = first_name
                ? first_name
                : "" + " " + last_name
                ? last_name
                : "";
            const formattedUsername = msg.from.username ? "@" + msg.from.username : "null";
            bot.sendMessage(id, "welcome, Don't miss any new tenders. get notification for new tender. \n\npress /alert to set alert to set keywords for new tenders. \n\nI'll notify you when tenders containing you keywords get published.");
            upsertUser(name.trim(), id, formattedUsername);
        });

        bot.on("message", async (msg: { text?: any; reply_to_message?: any; chat?: any; }) => {
            const {
              chat: { id },
            } = msg;
            console.log("🚀 ~ bot.on ~ id:", id)
            if (msg.text && !msg.reply_to_message && msg.text[0] !== "/") {
            //   const index = msg.text.lastIndexOf("\n");
            //   const objectId = index > -1 ? msg.text.split("\n").pop() : msg.text;
            //   if (mongoose.Types.ObjectId.isValid(objectId)) selectTender(msg, objectId);
            //   else if (/^\d$/.test(msg.text)) handlePagination(msg, msg.text);
            //   else 
              bot.sendMessage(id, "Please only use the commands from the menu.");
            }
          });

        seledaGramBot = bot;
    });
    
}

export const sendTelegramMarkdown = async (chatId:number, content:String):Promise<boolean> => {
    if (!seledaGramBot) {
        console.error("🚀 ~ sendTelegram ~ has not been iniatialised.")
        await initSeledaBot();
        return false;
    }
    return seledaGramBot.sendMessage(chatId, content, { parse_mode: "MarkdownV2" }).then((Msg: { chat: { id: any; }; message_id: any; }) => {
        return true;
    }).catch((error: { code: any; response: { body: any; }; }) => {
        console.log(error.code); // => 'ETELEGRAM'
        console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
        return false; 
    });
};

export const sendTelegram = async (chatId:number, content:String, markdown:boolean):Promise<boolean> => {
    if (!seledaGramBot) {
        console.error("🚀 ~ sendTelegram ~ has not been iniatialised.")
        await initSeledaBot();
        return false;
    }
    return seledaGramBot.sendMessage(chatId, content).then((Msg: { chat: { id: any; }; message_id: any; }) => {
        return true;
    }).catch((error: { code: any; response: { body: any; }; }) => {
        console.log(error.code); // => 'ETELEGRAM'
        console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
        return false; 
    });
};

export const handleUpdates = async (update: any) => {
    if (!seledaGramBot) {
        console.error("🚀 ~ sendTelegram ~ has not been iniatialised.")
        await initSeledaBot();
        return false;
    } else {
        console.log("Handling seleda telegram updates", update);
        seledaGramBot.processUpdate(update);
    }
};


