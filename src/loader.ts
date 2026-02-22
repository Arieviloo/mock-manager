import fs from "fs";
import path from "path";

interface MockResponse {
  status?: number;
  delay?: number;
  body: any;
}

type MockMap = Record<string, MockResponse>;

export function loadMocks(): MockMap {
  const filePath = path.join(process.cwd(), "mocks.json");

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({}, null, 2));
  }

  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}
