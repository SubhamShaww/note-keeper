import React, {useState} from "react";
import Note from "./Note";
import axios from "axios";

function Notes() {
    const [notes, setNotes] = useState([]);

    axios.get('/notes')
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