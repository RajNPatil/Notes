const fs = require("fs");
const chalk = require("chalk");
const { title } = require("process");

// save function
const saveNotes = (n) => {
  const dataJSON = JSON.stringify(n);

  fs.writeFileSync("notes.json", dataJSON);
};

// Load Note function

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// Add Note function

addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.find((note) => note.title === title);

  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("Note added"));
  } else {
    console.log(chalk.red.inverse("Note with this title already exists"));
  }
};

//Remove Note function

removeNote = (title) => {
  const notes = loadNotes();
  const uniqueNotes = notes.filter((note) => {
    if (note.title === title) {
      console.log(chalk.green.inverse("Note removed"));
    }
    return note.title !== title;
  });
  if (notes.length === uniqueNotes.length) {
    console.log(chalk.red.inverse("Note does not exist"));
  }

  saveNotes(uniqueNotes);
};

//Listing notes

listNotes = () => {
  // titles = loadNotes();
  // const names = titles.map((item) => item["title"]);
  // console.log(names);
  titles = loadNotes();
  titles.forEach((head) => {
    console.log(head.title);
  });
  // console.log(loadNotes());
};

readNote = (title) => {
  const notes = loadNotes();
  const request = notes.find((note) => {
    if (note.title === title) return note;
  });
  if (!request) {
    console.log(chalk.red.inverse("Note does not exist"));
  } else console.log(chalk.bold.blue(request.title) + "\n" + request.body);
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
