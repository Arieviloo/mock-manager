import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import fs from "fs";
import path from "path";
import os from "os";

export type EndpointData = Record<string, any[]>;

export interface DB {
  endpoints: string[];
  storage: EndpointData;
}

const dir = path.join(os.homedir(), ".mockly");
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const file = path.join(dir, "data.json");
const adapter = new JSONFile<DB>(file);
const db = new Low<DB>(adapter, { endpoints: [], storage: {} });

export async function initDB() {
  await db.read();
  db.data ||= { endpoints: [], storage: {} };
  await db.write();
}

export { db };
