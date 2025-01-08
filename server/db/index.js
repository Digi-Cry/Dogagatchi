// 0. Index is the Entry point
// require mongoose after running npm install mongodb
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

const { ATLAS_URI } = require('../config');

mongoose
  .connect(ATLAS_URI) // Changed this to fix mongodb atlas connection
  .then(() => console.log('Database connected!'))
  .catch((err) => console.log(err));

// setup schema(s)
const userSchema = new mongoose.Schema({
  username: String,
  password: String, // may be changed with passport implementation
  coinCount: Number, // increments with correct question and decrements to feed play with dog
  questionCount: Number, // increments with correct answer and stays
  dogCount: Number, // increments when dogogatchi is creates and decrements if dogogatchi is deleted
  breeds: [String], // array of image strings that are correctly answered
  achievements: [{ name: String, image: String, description: String }],
  meals: [
    {
      name: String,
      image: String,
      idMeal: Number,
      cost: Number,
      fullTime: String,
    },
  ],
  activities: [
    String
],
  medicines: [
    {
      name: String,
      image: String,
      idMedicine: Number,
      cost: Number,
      fullTime: String,
    },
  ],
  img: String,
});
// creates user docs in the db
const User = mongoose.model('User', userSchema);

// schema for Dogs
const dogSchema = new mongoose.Schema({
  name: String,
  img: String, // breed
  feedDeadline: Date, // timers
  walkDeadline: Date, // timers
  medicineDeadline: Date,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  isGroomed: Boolean,
  activities: [String],
  health: {
    type: Number,
    default: 100,
    min: 25,
    max: 100,
  },
  attackDmg: {
    type: Number,
    default: 25,
    min: 25,
    max: 100,
  },

});

const Dog = mongoose.model('Dog', dogSchema);

const wordSchema = new mongoose.Schema({
  word: String,
  phonetic: String,
  meanings: [{ partOfSpeech: String, definitions: [String] }],
  dogtionary: Boolean,
  favorite: Boolean,
  used: Boolean,
  dog: { type: mongoose.Schema.Types.ObjectId, ref: 'Dog' },
});

const Word = mongoose.model('Word', wordSchema);

module.exports = {
  Word,
  User,
  Dog,
};
