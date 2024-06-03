import { processQueue, pullTenders } from "./egp";

const schedule = require("node-schedule");

process.once("SIGINT", function () {
  schedule.gracefulShutdown();
});

export const initCronJobs = async () => {
  sendQueuedMessages();
  pullEPGTenders();
  PostTendersTochannels();
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

export const pullEPGTenders = () => {
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

export const PostTendersTochannels = () => {
  const rule = new schedule.RecurrenceRule();
  rule.hour = [9, 13, 17];
  // rule.minute = 0;
  // rule.second = [0, new schedule.Range(5, 55)];
  rule.tz = "Africa/Addis_Ababa";

  const job = schedule.scheduleJob(rule, function () {
    PostTendersTochannels();
  });
};
