export function generateUniqueId(): string {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 15);
  const uniqueId = `id_${timestamp}_${randomString}`;

  return uniqueId;
}
