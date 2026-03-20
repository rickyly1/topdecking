// Generic validation helpers (not deck legality)

export function requireField<T extends object>(
  obj: T,
  field: keyof T,
  message?: string
) {
  if (obj[field] === undefined || obj[field] === null) {
    throw new Error(message || `Missing required field: ${String(field)}`);
  }
}

export function isUUID(value: string) {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(value);
}