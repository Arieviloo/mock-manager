#!/usr/bin/env node
import { Command } from "commander";
import { startServer } from "../src/server";
import { db, initDB } from "../src/storage";
import fs from "fs";
import path from "path";
import os from "os";

const program = new Command();

program
  .command("start")
  .option("-p, --port <port>", "Porta do servidor", "3001")
  .option("--delay <ms>", "Delay global em ms", "0")
  .option("--faker", "Gerar dados fake automaticamente", false)
  .action((opts) => {
    startServer(Number(opts.port), Number(opts.delay), opts.faker);
  });

program
  .command("clear")
  .option("-r, --route <route>", "Rota específica para limpar")
  .action(async (opts) => {
    await initDB();
    if (opts.route) {
      db.data!.storage[opts.route] = [];
      db.data!.endpoints = db.data!.endpoints.filter((e) => e !== opts.route);
      console.log(`🗑 Rota '${opts.route}' limpa!`);
    } else {
      db.data!.storage = {};
      db.data!.endpoints = [];
      console.log("🗑 Todo o storage foi resetado!");
    }
    await db.write();
  });

program.parse(process.argv);
