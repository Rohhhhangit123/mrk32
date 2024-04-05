const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/foodtime', { useNewUrlParser: true, useUnifiedTopology: true });


const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  phone: String,
  ageGroup: String,
});

const User = mongoose.model('User', userSchema);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); 
app.post('/login', (req, res) => {
  
});

app.post('/signup', (req, res) => {
 
  const { username, email, password, phone, ageGroup } = req.body;

  const newUser = new User({
    username,
    email,
    password, 
    phone,
    ageGroup,
  });

  newUser.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving user to the database.');
    } else {
      res.status(200).send('User successfully registered.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
