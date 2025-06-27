export function discoveryJob() {
  const JOB_INTERVAL_MS = 1000;

  async function runJob() {
    console.log("hello");
  }

  setInterval(runJob, JOB_INTERVAL_MS);
}
