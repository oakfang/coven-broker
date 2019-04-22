const createCovenServer = require("coven/server");
const chalk = require("chalk");

const printConsole = ({ room, type, origin, target }) =>
  console.log(
    // [ROOM::TYPE] ORIGIN -> TARGET/<BROADCAST>
    chalk`
      [{magenta ${room}}::{cyan ${type}}] {white ${origin}} -> {${
      target ? "white" : "green"
    } ${target || "<BROADCAST>"}}
    `
      .split("\n")
      .map(line => line.trim())
      .filter(Boolean)
      .join("\n")
  );

const printJson = ({ room, type, origin, target }) =>
  console.log(JSON.stringify({ room, type, origin, target }));

const dontPrint = () => null;

const getPrinter = printer => {
  switch (printer) {
    case "json":
      return printJson;
    case "silent":
      return dontPrint;
    default:
      return printConsole;
  }
};

const startServer = (printer, port) =>
  createCovenServer({ port, onMessage: getPrinter(printer) });

module.exports = startServer;
