import { discoveryJob } from "./jobs/discovery.js";
import { checkForOfflineJob } from "./jobs/checkForOffline.js";
import { LOGGER } from "./util/logger.js";

LOGGER.log("Starting jobs...");
discoveryJob();
checkForOfflineJob();
