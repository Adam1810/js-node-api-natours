const mongoose = require('mongoose');

//name, email, photo: stirng, pwassword, passwordConfirm

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    unique: true,
    trim: true,
  },
  email: { type: String,
     },
  photo: {
    type: String,
  },
  password: {
    type: String,
  },
  passwordConfirm: {
    type: String,
  },
});
