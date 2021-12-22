require("../../db");

let EventModel = require("../../models/Event.model");
const mongoose = require("mongoose");
// let image =
//   "https://i.pinimg.com/originals/97/35/2a/97352a18b151610dc66f3f693e0b9196.png";
let events = [
  {
    image:
      "https://us02web.zoom.us/w_p/_FzdWJEmQOSnPn4iXRtcAQ/5c457bd4-a5be-4dca-96bf-3c2a8f305a73.png",
    title: "Rotterdam create coding meetup",
    location: "Rotterdam",
    date: new Date("2021-12-20"),
    description:
      "What is Rotterdam Creative Coding Meetup? It is a group for anyone interested in programming, patching or soldering. We focus on all creative applications of technology. ",
  },
  {
    image:
      "https://i.pinimg.com/originals/97/35/2a/97352a18b151610dc66f3f693e0b9196.png",
    title: "Berlin Functional Programming Group",
    location: "Berlin",
    date: new Date("2021-12-13"),
    description:
      "We are a diverse and friendly group of professional and hobbyist practitioners of functional programming, with interests in many idioms and at all skill levels.",
  },
  {
    image:
      "https://www.britishcouncil.org/sites/default/files/nesa-by-makers-via-unsplash_0.jpg",
    title: "FreeCodeCamp Lisbon",
    location: "Lisbon",
    date: new Date("2021-12-27"),
    description:
      "Open CoWorking/CoLearning; Work on the FreeCodeCamp curriculum, your own project or whatever you want to work on. Mutual exchange and assistance is welcome. English or German, as you are comfortable.",
  },
  {
    image:
      "https://www.learningpotential.gov.au/sites/default/files/styles/large/public/2019-07/HS43-code-masters.jpg?itok=yXLyU6Cp",
    title: "Programming Without Type Classes",
    location: "Amsterdam",
    date: new Date("2022-01-04"),
    description:
      " Type classes have become a cornerstone of statically-typed functional programming, powering abstractions like monoid and monad. Yet, type classes often have generalized names.",
  },
  {
    image:
      "https://lh6.googleusercontent.com/gneND8WWNYmW87h8O9gF_bZFN54nDLitRLUHzK8bPghbFhSldAM-bBwyXJJ1F00tfgSnBjJz6zmRIlafR32R8FXh-lerXYUaf9mFd1HzAE_9WP_hKzNon2iuLle0PUTk--Ny2BV7",
    title: "ITERATIONS: Creative Coding Symposium",
    location: "Bristol",
    date: new Date("2022-01-08"),
    description:
      "How do recent technological developments empower makers to generate new creative avenues? How is the creative coding landscape going to evolve in the coming few years?",
  },
  {
    image:
      "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F645426397%2F960x0.jpg%3Ffit%3Dscale",
    title: "An introduction to React",
    location: "Budapest",
    date: new Date("2022-01-12"),
    description:
      "In this session, attendees/you will learn about the most popular JS frontend library React. I will explain how to get started with React components and how to create a small application using React.",
  },
  //Marcos

  {
    image:
      "https://www.weareamsterdam.com/wp-content/uploads/2018/07/IMG_1315-e1551362907538.jpg",
    title: "Code Party at IronHack",
    location: "Amsterdam",
    date: new Date("2022-01-15"),
    description:
      "A nice display flex party with Manish, if you are lucky maybe you can get a fancy black hoodie. If you feel very crazy you also can guess Manish's age by playing his game or just stalking him on facebook",
  },

  {
    image:
      "https://4.bp.blogspot.com/-UYJjvmDemn0/WT3ov0R6cpI/AAAAAAAAvgE/frFGuJ4p4Ac7umWkdZZF5qTbnKdReWP2wCLcB/s1600/landscape-1456483171-pokemon2.jpg,",
    title: "Crazy Pokemon API party",
    location: "India",
    date: new Date("2022-01-27"),
    description:
      "A cool code party with the best teacher ever, the greatest Manish. Experience the best coding challenges and fetching pokemons as much as you want. Be part of Manishs god mode ",
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
