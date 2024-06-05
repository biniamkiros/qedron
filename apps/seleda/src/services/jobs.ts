import { env } from "~/env";
import { PostTochannels, processQueue, pullTenders, sendSummary } from "./egp";

const schedule = require("node-schedule");

process.once("SIGINT", function () {
  schedule.gracefulShutdown();
});

export const initCronJobs = async () => {
  sendQueuedMessages();
  pullEPGTenders();
  postTendersTochannels();
  sendTenderSummary();
};

export const sendQueuedMessages = async () => {
  const rule = new schedule.RecurrenceRule();
  rule.hour = [0, new schedule.Range(7, 24)];
  // rule.minute = 0;
  rule.second = [0, new schedule.Range(5, 55)];
  rule.tz = "Africa/Addis_Ababa";

  const job = schedule.scheduleJob(rule, function () {
    processQueue();
  });
};

export const pullEPGTenders = async () => {
  const rule = new schedule.RecurrenceRule();
  // rule.hour = 0
  rule.minute = 0;
  // rule.second = [10, new schedule.Range(0, 59)];
  rule.tz = "Africa/Addis_Ababa";

  const job = schedule.scheduleJob(rule, function () {
    console.log("Scrapping.....");
    pullTenders();
  });
};

export const postTendersTochannels = async () => {
  const rule = new schedule.RecurrenceRule();
  if (env.NODE_ENV === "production") {
    // rule.hour = [9, 13, 17];
    rule.hour = 17; //[4, new schedule.Range(13, 17)];
    rule.minute = 0;
    rule.tz = "Africa/Addis_Ababa";

    const job = schedule.scheduleJob(rule, function () {
      PostTochannels();
    });
  }
};

export const sendTenderSummary = async () => {
  const rule = new schedule.RecurrenceRule();
  if (env.NODE_ENV === "production") {
    rule.hour = 17;
    rule.minute = 50;
    rule.tz = "Africa/Addis_Ababa";

    const job = schedule.scheduleJob(rule, function () {
      sendSummary();
    });
  }
};
