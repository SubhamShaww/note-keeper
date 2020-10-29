const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const noteSchema = new mongoose.Schema({
    title: String,
    content: String
});

const userSchema = new mongoose.Schema({
    googleId: String,
    facebookId: String,
    notes: [noteSchema]
});
userSchema.plugin(findOrCreate);

const Note = mongoose.model("Note", noteSchema);

const User = mongoose.model("User", userSchema);