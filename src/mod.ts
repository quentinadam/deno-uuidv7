/**
 * Generates a UUIDv7 string.
 *
 * UUIDv7 is a time-ordered UUID that embeds a Unix timestamp in milliseconds,
 * making it suitable for use as a sortable unique identifier.
 *
 * @param timestamp The timestamp to use for the UUID. Defaults to the current time.
 * @returns A UUIDv7 string in the format `xxxxxxxx-xxxx-7xxx-xxxx-xxxxxxxxxxxx`.
 *
 * @example
 * ```ts
 * import { generateUUIDv7 } from "@quentinadam/uuidv7";
 *
 * const uuid = generateUUIDv7();
 * console.log(uuid); // e.g., "018f6b1c-8a3b-7f2a-9c4d-1e5f6a7b8c9d"
 *
 * const uuidWithTimestamp = generateUUIDv7(new Date("2024-01-01"));
 * ```
 */
export function generateUUIDv7(timestamp: Date = new Date()): string {
  const serializedTimestamp = timestamp.valueOf().toString(16).padStart(12, '0');
  const baseUUID = crypto.randomUUID();
  return `${serializedTimestamp.slice(0, 8)}-${serializedTimestamp.slice(8, 12)}-7${baseUUID.slice(15)}`;
}
