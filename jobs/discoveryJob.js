export function discoveryJob() {
  const JOB_INTERVAL_MS = 5 * 60 * 1000;

  async function runJob() {
    try {
      const response = await fetch("http://localhost:8000/discovery/discover");
      const data = await response.json();
      console.log("Discovery response:", data);
    } catch (error) {
      console.error("Error fetching discovery:", error);
    }
  }

  setInterval(runJob, JOB_INTERVAL_MS);
}
