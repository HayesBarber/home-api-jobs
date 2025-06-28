/**
 * @param {() => Promise<import("../../generated/Api").HttpResponse>} jobFn
 * @param {string} label
 */
export function runJob(jobFn, label) {
  return async () => {
    try {
      console.log(`Running job: ${label}`);
      const result = await jobFn();
      const json = await result.json();
      const code = result.status;
      console.log("Completed job", label);
      console.log("Status code:", code, "Json:", json);
    } catch (err) {
      console.error(label, "Job Failed:", err);
    }
  };
}
