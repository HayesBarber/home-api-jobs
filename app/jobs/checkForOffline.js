import { runJob } from "../util/jobRunner.js";
import { api } from "../util/config.js";

export function checkForOfflineJob() {
  const JOB_INTERVAL_MS = 10 * 60 * 1000;

  setInterval(
    runJob(
      api.discovery.checkForOfflineDevicesDiscoveryCheckOfflinePost,
      "Check for offline devices"
    ),
    JOB_INTERVAL_MS
  );
}
