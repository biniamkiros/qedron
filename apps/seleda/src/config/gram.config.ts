
import { env } from "../env.js";
const TelgramBot = require("node-telegram-bot-api");

const SELEDA_BOT_TOKEN = env.SELEDA_BOT_TOKEN || "emptytoken"

const options = {
    polling: process.env.NODE_ENV !== "production", 
    // webHook: {
    //   port: 8443,
    // },
};

let bot = new TelgramBot(SELEDA_BOT_TOKEN, options);
if(!env.SELEDA_BOT_TOKEN) {
    console.log("🚀 ~ SELEDA_BOT_TOKEN not provided")
} else {
    if (process.env.NODE_ENV === "production") {
        bot.setWebHook(
        `https://seleda.qedron.com/api/bot/updates/${SELEDA_BOT_TOKEN}`
        // , {
        //   certificate: "/etc/letsencrypt/live/seleda.qedron.com/cert.pem", // Path to your crt.pem
        // }
        );
        const info = await bot.getWebHookInfo();
        console.log("🚀 ~ Seleda Web Hook Info:", info);
    
    } else {
        if(bot.isPolling()) {
            await bot.stopPolling();
            }

        await bot.startPolling();
        
    }
}

export { bot };