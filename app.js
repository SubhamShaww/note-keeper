require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const passport = require('passport');
const cookieSession = require("cookie-session");

const port = process.env.PORT || 5000;
const reactUrl = 'http://localhost:3000';

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


require("./models/User");
require("./services/passport");


app.use(cookieSession({ 
  keys: [process.env.COOKIE_KEY],
  maxAge: 30 * 24 * 60 * 60 * 1000
}));

app.use(passport.initialize());
app.use(passport.session());


require("./routes/authRoute")(app);
require("./routes/notesRoute")(app);



if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });
}



app.listen(port, () => console.log(`Note keeper App listening on port ${port}`));