const SITE_TIMEZONES: Record<string, string> = {
  "lasvegasnevadainjurylawyer.com": "America/Los_Angeles",
  "dallastexasinjurylawyer.com": "America/Chicago",
  "austintexasinjurylawyer.com": "America/Chicago",
  "omahanebraskainjurylawyer.com": "America/Chicago",
  "denvercoloradoinjurylawyer.com": "America/Denver",
};

export function isBusinessHours(domain: string): boolean {
  const tz = SITE_TIMEZONES[domain] ?? "America/Chicago";
  const now = new Date();
  const local = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour: "numeric",
    minute: "numeric",
    weekday: "short",
    hour12: false,
  }).formatToParts(now);

  const get = (type: string) => local.find((p) => p.type === type)?.value ?? "";
  const weekday = get("weekday"); // Mon, Tue, Wed, Thu, Fri, Sat, Sun
  const hour = parseInt(get("hour"), 10);
  const minute = parseInt(get("minute"), 10);
  const totalMins = hour * 60 + minute;

  if (["Mon", "Tue", "Wed", "Thu", "Fri"].includes(weekday)) {
    return totalMins >= 8 * 60 && totalMins < 20 * 60; // 8am–8pm
  }
  if (weekday === "Sat") {
    return totalMins >= 9 * 60 && totalMins < 17 * 60; // 9am–5pm
  }
  return false;
}

export function getTimezone(domain: string): string {
  return SITE_TIMEZONES[domain] ?? "America/Chicago";
}
