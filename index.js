#!/usr/bin/env node
const startServer = require("./lib");
const argv = require("yargs")
  .usage("Usage: $0 [--json] [--port=1234]")
  .default({ port: 4000, json: false })
  .boolean("json")
  .alias("port", "p")
  .describe("port", "Port to listen on")
  .help("h")
  .alias("h", "help").argv;

startServer(argv.json, argv.port)
