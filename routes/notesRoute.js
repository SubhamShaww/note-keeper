//for fetching the already defined model( here schema is not included )
const mongoose = require('mongoose');

const Note = mongoose.model('Note');  
const User = mongoose.model('User');


module.exports = (app) => {
    app.get("/notes", (req, res) => {
        User.findOne({_id: req.user._id}, (err, foundUser) => {
        //sending user notes from usersDB to react for rendering
        err && console.log(err);
        res.send(foundUser.notes);
        });
    });

    app.post("/addNote", (req, res) => {
        
        //adding note from react createArea.jsx to db.
        const newTitle = req.body.title;
        const newContent = req.body.content;

        const newNote = new Note({
            title: newTitle,
            content: newContent
        });

        User.findOne({_id: req.user._id}, (err, foundUser) => {
            if(!err) {
            console.log("new note inserted to usersDB.");

            foundUser.notes.push(newNote);
            foundUser.save((err) => {
                res.redirect("/notes");
            });
            }
        });
    });

    app.post("/deleteNote", (req, res) => {
        const toDeleteId = req.body._id;

        //deleting note from db on clicking delete in Note.jsx
        User.findOneAndUpdate({_id: req.user._id}, {$pull: {notes: {_id: toDeleteId}}}, (err, foundUser) => {
            if(!err) {
                res.redirect("/notes");
            }
        });
    });
}