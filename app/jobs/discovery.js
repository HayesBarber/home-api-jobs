import { runJob } from "../util/jobRunner.js";
import { api } from "../util/config.js";

export function discoveryJob() {
  const JOB_INTERVAL_MS = 5 * 60 * 1000;

  setInterval(
    runJob(
      api.discovery.triggerDiscoveryDiscoveryDiscoverPost,
      "Trigger discovery"
    ),
    JOB_INTERVAL_MS
  );
}
