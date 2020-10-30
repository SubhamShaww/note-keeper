import React, {useState} from "react";
import Note from "./Note";

function Notes() {
    const [notes, setNotes] = useState([]);

    fetch('/notes')
        .then(res1 => res1.json())
        .then((res) => {
            setNotes(res.data);
        })

    return (
        <div>
            {notes.map((noteItem) => {
            return (
                <Note
                key={noteItem._id}
                _id={noteItem._id}
                title={noteItem.title}
                content={noteItem.content}
                />
            );
            })}
        </div>
    )
}

export default Notes;