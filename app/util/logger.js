export class LOGGER {
  static getCurrentDateTime() {
    const now = new Date();
    const currentDate = this.getCurrentDate(now);
    const currentTime = this.getCurrentTime(now);

    return `[${currentDate} ${currentTime}]`;
  }

  static getCurrentTime(now) {
    return now.toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
    });
  }

  static getCurrentDate(now) {
    return now.toLocaleDateString("en-US", {
      timeZone: "America/New_York",
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  }

  static log(...messages) {
    console.log(this.getCurrentDateTime(), ...messages);
  }

  static info(...messages) {
    this.log("INFO:", ...messages);
  }

  static warn(...messages) {
    this.log("WARN:", ...messages);
  }

  static error(...messages) {
    this.log("ERROR:", ...messages);
  }
}
