require("../../db");

let EventModel = require("../../models/Event.model");
const mongoose = require("mongoose");
let image =
  "https://i.pinimg.com/originals/97/35/2a/97352a18b151610dc66f3f693e0b9196.png";
let events = [
  {
    image,
    title: "Coding Convention",
    location: "Heaven",
    date: new Date("2021-12-24"),
    description:
      "Excited to inform you, we having the last coding convention this year. Join the event, its free!",
  },
  {
    image,
    title: "Coding Convention",
    location: "Heaven",
    date: new Date("2021-12-24"),
    description:
      "Excited to inform you, we having the last coding convention this year. Join the event, its free!",
  },
  {
    image,
    title: "Coding Convention",
    location: "Heaven",
    date: new Date("2021-12-24"),
    description:
      "Excited to inform you, we having the last coding convention this year. Join the event, its free!",
  },
];

EventModel.create(events)
  .then(() => {
    console.log("Data seeded");
    mongoose.connection.close();
  })
  .catch(() => {
    console.log("is it going to the catch block?");
    mongoose.connection.close();
  });
