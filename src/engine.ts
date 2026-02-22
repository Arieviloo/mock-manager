import crypto from "crypto";
import { db } from "./storage";
import { generateFakeData } from "./faker";

export async function handleRequest(
  method: string,
  url: string,
  body: any,
  pathId?: string,
  delay = 0,
  useFaker = false
) {
  if (!db.data!.endpoints.includes(url)) {
    db.data!.endpoints.push(url);
    db.data!.storage[url] = [];
    await db.write();
  }

  if (delay) await new Promise((res) => setTimeout(res, delay));

  let response: any;

  switch (method) {
    case "POST":
      let newItem =
        body && Object.keys(body).length
          ? body
          : useFaker
          ? generateFakeData(url)
          : {};
      newItem.id =
        pathId ||
        newItem.id ||
        (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString());

      if (!db.data!.storage[url]) db.data!.storage[url] = [];
      if (!db.data!.endpoints.includes(url)) db.data!.endpoints.push(url);

      db.data!.storage[url].push(newItem);
      await db.write();
      response = newItem;
      break;

    case "GET":
      response = pathId
        ? db.data!.storage[url]?.find((item: any) => item.id === pathId) || {
            error: "Not found",
          }
        : db.data!.storage[url] || [];
      break;

    case "PUT":
      if (!pathId) {
        response = { error: "PUT requires id in path" };
        break;
      }
      db.data!.storage[url] = db.data!.storage[url].map((item: any) =>
        item.id === pathId ? { ...item, ...body } : item
      );
      await db.write();
      response = db.data!.storage[url].find((item: any) => item.id === pathId);
      break;

    case "DELETE":
      const deleteId = pathId || (body && body.id);
      if (!deleteId) {
        response = { error: "DELETE requires id (in path or body)" };
        break;
      }
      db.data!.storage[url] = db.data!.storage[url].filter(
        (item: any) => item.id !== deleteId
      );
      await db.write();
      response = { success: true };
      break;
  }

  return { response, ms: 0 };
}
