export function runJob(jobFn, label) {
  return async () => {
    try {
      console.log(`Running job: ${label}`);
      await jobFn();
      console.log(`Completed job: ${label}`);
    } catch (err) {
      console.error(`Job failed (${label}):`, err);
    }
  };
}
