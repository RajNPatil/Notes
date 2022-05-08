const chalk = require("chalk");
const yargs = require("yargs");
const { readNote } = require("./notes.js");
const notes = require("./notes.js");

yargs.version("1.0.0");

// Adding a note

yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Text, Note or Anything",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log('Title : ' +argv.title),
    // console.log('Body : ' + argv.body)
    notes.addNote(argv.title, argv.body);
  },
});

// Removing a note

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Reading a note

yargs.command({
  command: "read",
  describe: "Reading a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// Listing all note

yargs.command({
  command: "list",
  describe: "List all notes",
  handler() {
    notes.listNotes();
    console.log("Listing all notes");
  },
});

console.log(yargs.argv);
