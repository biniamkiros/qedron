
import { env } from "../env.js";
const TelgramBot = require("node-telegram-bot-api");

const SELEDA_BOT_TOKEN = env.SELEDA_BOT_TOKEN

const options = {
    polling: process.env.NODE_ENV !== "production", 
    // webHook: {
    //   port: 8443,
    // },
};

let bot:any = null
export const getBot = async ()=>{
    if(bot) return bot
    bot = await initBot();
    return bot;
}

export const initBot= async ()=>{ 
    if(!env.SELEDA_BOT_TOKEN) {
        console.log("🚀 ~ SELEDA_BOT_TOKEN not provided")
        return
    } 
        
    bot = new TelgramBot(SELEDA_BOT_TOKEN, options);
    console.log("🚀 ~ Starting bot...")
    if (env.NODE_ENV === "production") {
        await bot.setWebHook(
        `https://seleda.qedron.com/api/bot/updates/${SELEDA_BOT_TOKEN}`
        // , {
        //   certificate: "/etc/letsencrypt/live/seleda.qedron.com/cert.pem", // Path to your crt.pem
        // }
        );
        const info = await bot.getWebHookInfo();
        console.log("🚀 ~ Seleda Web Hook Info:", info);
        return bot;
    } else {
        if(bot.isPolling()) await bot.stopPolling();
        await bot.startPolling();
        console.log("🚀 ~ Seleda isPolling:", bot.isPolling());
        return bot;
    }
    
}
