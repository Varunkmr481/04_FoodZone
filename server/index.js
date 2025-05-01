const express = require("express");
const cors = require("cors");
const path = require("path");

const foodData = [
  {
    name: "BOILED EGG",
    price: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/egg.png",
    type: "breakfast",
  },
  {
    name: "RAMEN",
    price: 25,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/ramen.png",
    type: "lunch",
  },
  {
    name: "GRILLED CHICKEN",
    price: 45,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/chicken.png",
    type: "dinner",
  },
  {
    name: "CAKE",
    price: 18,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/cake.png",
    type: "breakfast",
  },
  {
    name: "BURGER",
    price: 23,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/burger.png",
    type: "lunch",
  },
  {
    name: "PANCAKE",
    price: 25,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/pancake.png",
    type: "dinner",
  },
];

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/images", express.static(path.join(__dirname, "/public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  res.json(foodData);
});

app.get("/breakfast", (req, res) => {
  const data = [...foodData];
  const breakfastData = data.filter((item) => item.type === "breakfast");
  console.log(breakfastData);
  res.json(breakfastData);
});

app.get("/lunch", (req, res) => {
  const data = [...foodData];
  const lunchData = data.filter((item) => item.type === "lunch");
  console.log(lunchData);
  res.json(lunchData);
});

app.get("/dinner", (req, res) => {
  const data = [...foodData];
  const dinnerData = data.filter((item) => item.type === "dinner");
  console.log(dinnerData);
  res.json(dinnerData);
});

app.listen(8000, () => {
  console.log("This server is running on port 8000");
});
