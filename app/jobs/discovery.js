import { runJob } from "../util/jobRunner.js";

export function discoveryJob() {
  const JOB_INTERVAL_MS = 5 * 60 * 1000;

  setInterval(
    runJob("/discovery/discover", "Trigger discovery"),
    JOB_INTERVAL_MS
  );
}
