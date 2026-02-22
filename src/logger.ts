export function logRequest(
  method: string,
  url: string,
  status: number,
  ms: number
) {
  console.log(`${method} ${url} → ${status} (${ms}ms)`);
}
