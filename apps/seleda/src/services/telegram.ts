import { Prisma, Tender } from "@prisma/client";
import { setTag, upsertUser } from "./egp";
import { bot } from "~/config/gram.config";

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
      bot.sendMessage(id, "welcome");
      upsertUser(name.trim(), id, formattedUsername);
});

export const sendTelegramMarkdown = async (chatId:number, content:String):Promise<boolean> => {
    return bot.sendMessage(chatId, content, { parse_mode: "MarkdownV2" }).then((Msg: { chat: { id: any; }; message_id: any; }) => {
        return true;
    }).catch((error: { code: any; response: { body: any; }; }) => {
        console.log(error.code); // => 'ETELEGRAM'
        console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
        return false; 
    });
};

export const sendTelegram = async (chatId:number, content:String, markdown:boolean):Promise<boolean> => {
    return bot.sendMessage(chatId, content).then((Msg: { chat: { id: any; }; message_id: any; }) => {
        return true;
    }).catch((error: { code: any; response: { body: any; }; }) => {
        console.log(error.code); // => 'ETELEGRAM'
        console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
        return false; 
    });
};

export const handleUpdates = (update: any) => {
    console.log("Handling seleda telegram updates");
    bot.processUpdate(update);
};


