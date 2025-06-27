import { BASE_URL } from "./config.js";

export function runJob(endpoint, jobName) {
  return async function () {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`);
      const data = await response.json();
      console.log(`${jobName} response:`, data);
    } catch (error) {
      console.error(`Error running ${jobName}:`, error);
    }
  };
}
