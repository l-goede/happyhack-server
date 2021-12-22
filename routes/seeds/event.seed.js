require("../../db");

let EventModel = require("../../models/Event.model");
const mongoose = require("mongoose");
let image =
  "https://i.pinimg.com/originals/97/35/2a/97352a18b151610dc66f3f693e0b9196.png";
let events = [
  {
    image: "https://www.weareamsterdam.com/wp-content/uploads/2018/07/IMG_1315-e1551362907538.jpg",
    title: "Code Party at IronHack",
    location: "Amsterdam",
    date: new Date("2022-01-15"),
    description:
      "A nice display flex party with Manish, if you got lucky maybe can get a fancy black hoodie",
  },
  {
    image: "https://res.cloudinary.com/teepublic/image/private/s--6vRODuCH--/c_crop,x_10,y_10/c_fit,h_830/c_crop,g_north_west,h_1038,w_1038,x_-295,y_-104/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-406,y_-215/b_rgb:fffffe/c_limit,f_jpg,h_630,q_90,w_630/v1567010453/production/designs/5769420_0.jpg",
    title: "Coffee and code",
    location: "Porto",
    date: new Date("2022-01-19"),
    description:
      "An awesome code reunion with Rodrigao, Joshua to code some cool Surf app",
  },
  {
    image: "https://4.bp.blogspot.com/-UYJjvmDemn0/WT3ov0R6cpI/AAAAAAAAvgE/frFGuJ4p4Ac7umWkdZZF5qTbnKdReWP2wCLcB/s1600/landscape-1456483171-pokemon2.jpg,",
    title: "Crazy Pokemon API party",
    location: "India",
    date: new Date("2022-01-27"),
    description:
      "A cool code party with the best teatcher ever, the greatest Manish",
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
