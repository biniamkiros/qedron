import { initCronJobs } from "~/services/jobs";
import { initSeledaBot } from "~/services/telegram";

const bootedServices = {
    telegram: false,
    jobs: false,
  };
  
export const bootHandler = async () => {
  if (!bootedServices.telegram) {
    bootedServices.telegram = true;
    await initSeledaBot();
  }
  if (!bootedServices.jobs) {
    bootedServices.jobs = true;
    await initCronJobs();
  }

  return bootedServices;
};