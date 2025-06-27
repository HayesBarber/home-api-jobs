import { discoveryJob } from "./jobs/discovery.js";
import { checkForOfflineJob } from "./jobs/checkForOffline.js";

console.log("Starting jobs...");
discoveryJob();
checkForOfflineJob();
