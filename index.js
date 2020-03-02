#!/usr/bin/env node
const startServer = require("./lib");
const { json, port, silent } = require("yargs")
  .usage("Usage: $0 [--json/--silent] [--port=1234]")
  .default({ port: +process.env.PORT || 4000, json: false, silent: false })
  .boolean("json")
  .describe("json", "Print JSON encoded log messages")
  .boolean("silent")
  .describe("silent", "Don't print any logs")
  .alias("port", "p")
  .describe("port", "Port to listen on")
  .help("h")
  .alias("h", "help").argv;

  startServer(json ? "json" : silent ? "silent" : null, port);
