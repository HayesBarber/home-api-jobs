import { runJob } from "./jobRunner.js";

export function checkForOfflineJob() {
  const JOB_INTERVAL_MS = 10 * 60 * 1000;
  setInterval(
    runJob("/discovery/check-offline", "Check offline"),
    JOB_INTERVAL_MS
  );
}
