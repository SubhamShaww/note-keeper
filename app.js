require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const passport = require('passport');
const cookieSession = require("cookie-session");
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

require("./models/User");
require("./services/passport");


app.use(cookieSession({ 
  keys: [process.env.COOKIE_KEY],
  maxAge: 30 * 24 * 60 * 60 * 1000
}));

app.use(passport.initialize());
app.use(passport.session());


require("./routes/authRoute")(app);
// require("./routes/notesRoute")(app);

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



if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });
}



app.listen(port, () => console.log(`Note keeper App listening on port ${port}`));