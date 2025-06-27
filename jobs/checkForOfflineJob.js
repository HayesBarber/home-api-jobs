export function checkForOfflineJob() {
  const JOB_INTERVAL_MS = 10 * 60 * 1000;

  async function runJob() {
    try {
      const response = await fetch(
        "http://localhost:8000/discovery/check-offline"
      );
      const data = await response.json();
      console.log("Check offline response:", data);
    } catch (error) {
      console.error("Error fetching check-offline:", error);
    }
  }

  setInterval(runJob, JOB_INTERVAL_MS);
}
