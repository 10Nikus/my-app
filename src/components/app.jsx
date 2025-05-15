import Header from "./header";
import React, { useState } from "react";
import Note from "./note";
import Footer from "./footer";
import CreateArea from "./createArea";

const App = () => {
  const [notes, addNote] = useState([]);
  const [input, saveInput] = useState({ title: "", description: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    saveInput((prev) => {
      if (name === "title") {
        return { title: { value }, description: prev.description };
      } else if (name === "content") {
        return { title: prev.title, description: { value } };
      }
    });
  }

  function deleteNote(index) {
    addNote((prev) => {
      return prev.filter((note) => {
        return note.index !== index;
      });
    });
  }

  function add() {
    const title = input.title.value;
    const content = input.description.value;
    const key = notes.length + 1;
    addNote((prev) => {
      return [
        ...prev,
        {
          key: [key],
          index: [key],
          title: [title],
          content: [content],
        },
      ];
    });
    document.querySelector("input").value = "";
    document.querySelector("textarea").value = "";
  }
  return (
    <div>
      <Header />
      <CreateArea add={add} handleChange={handleChange} />
      {notes.map((note) => {
        return (
          <Note
            key={note.key}
            index={note.index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
