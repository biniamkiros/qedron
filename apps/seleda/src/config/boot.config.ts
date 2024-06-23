import { initCronJobs } from "~/services/jobs";
import { initSeledaBot } from "~/services/telegram";

const bootedServices = {
  telegram: false,
  jobs: false,
};

export const bootHandler = async () => {
  if (!bootedServices.telegram) {
    bootedServices.telegram = true;
    const bot = await initSeledaBot();
    bot.sendMessage(383604329, `SeledaGramBot started`);
  }
  if (!bootedServices.jobs) {
    bootedServices.jobs = true;
    await initCronJobs();
  }

  return bootedServices;
};
