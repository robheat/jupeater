const DAY_NAMES: Record<string, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

const DAY_ORDER = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export type OpeningHoursSpecification = {
  "@type": "OpeningHoursSpecification";
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

function expandDayRange(range: string): string[] {
  const parts = range.split("-").map((part) => part.trim());
  if (parts.length === 1) {
    return DAY_NAMES[parts[0]] ? [DAY_NAMES[parts[0]]] : [];
  }

  const [start, end] = parts;
  const startIndex = DAY_ORDER.indexOf(start);
  const endIndex = DAY_ORDER.indexOf(end);
  if (startIndex === -1 || endIndex === -1) {
    return [];
  }

  const days: string[] = [];
  let index = startIndex;
  while (true) {
    days.push(DAY_NAMES[DAY_ORDER[index]]);
    if (index === endIndex) break;
    index = (index + 1) % DAY_ORDER.length;
  }
  return days;
}

function to24Hour(time: string): string | null {
  const match = time.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return null;

  let hour = Number(match[1]);
  const minute = match[2];
  const period = match[3].toUpperCase();

  if (period === "AM" && hour === 12) hour = 0;
  if (period === "PM" && hour !== 12) hour += 12;

  return `${String(hour).padStart(2, "0")}:${minute}`;
}

/**
 * Parses hour strings like "Mon-Thu: 5:00 PM - 9:00 PM" or
 * "Sun: 11:00 AM - 3:00 PM (Brunch), 5:00 PM - 9:00 PM (Dinner)" into
 * schema.org OpeningHoursSpecification entries. Lines like "Sun-Mon: Closed"
 * are omitted, since schema.org has no "closed" representation.
 */
export function parseOpeningHours(hours: string[]): OpeningHoursSpecification[] {
  const specs: OpeningHoursSpecification[] = [];

  for (const line of hours) {
    const [dayRange, rest] = line.split(/:\s(.+)/).filter(Boolean);
    if (!dayRange || !rest || /closed/i.test(rest)) continue;

    const dayOfWeek = expandDayRange(dayRange.trim());
    if (dayOfWeek.length === 0) continue;

    const segments = rest.split(",");
    for (const segment of segments) {
      const timeMatch = segment.match(
        /(\d{1,2}:\d{2}\s*[AP]M)\s*-\s*(\d{1,2}:\d{2}\s*[AP]M)/i,
      );
      if (!timeMatch) continue;

      const opens = to24Hour(timeMatch[1]);
      const closes = to24Hour(timeMatch[2]);
      if (!opens || !closes) continue;

      specs.push({
        "@type": "OpeningHoursSpecification",
        dayOfWeek,
        opens,
        closes,
      });
    }
  }

  return specs;
}
