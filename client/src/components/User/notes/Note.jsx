import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

function Note(props) {
  function handleClick() {
    axios.post("/deleteNote", {_id: props._id});
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
