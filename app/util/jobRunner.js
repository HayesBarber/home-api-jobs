import { LOGGER } from "./logger.js";
/**
 * @param {() => Promise<import("../../generated/Api").HttpResponse>} jobFn
 * @param {string} label
 */
export function runJob(jobFn, label) {
  return async () => {
    try {
      LOGGER.log(`Running job: ${label}`);
      const result = await jobFn();
      const code = result.status;
      LOGGER.info("Completed job", label, "- Status code:", code);
    } catch (err) {
      LOGGER.error(label, "Job Failed:", err);
    }
  };
}
