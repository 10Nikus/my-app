import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  function showLayout() {
    setExpanded(true);
  }

  function hideLayout() {
    setExpanded(false);
  }

  function handleClick(e) {
    e.preventDefault();
    hideLayout();
    props.add();
  }

  return (
    <div>
      <form>
        {isExpanded ? (
          <input
            onChange={props.handleChange}
            name="title"
            placeholder="Title"
          />
        ) : null}

        <textarea
          onChange={props.handleChange}
          onClick={showLayout}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded ? true : false}>
          <button onClick={handleClick}>
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
