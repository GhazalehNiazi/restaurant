import mutable from "../image/mutable-normal.jpg";
import babaGhanoush from "../image/baba-ghanoush-normal.jpg";
import tabboulehSalad from "../image/tabbouleh-salad-normal.jpg";
import fafafel from "../image/falafel-roll-normal.jpg";
import fattoush from "../image/fattoush-normal.jpg";
import beefRoll from "../image/beef-shawarma-sandwich-roll-normal.jpg";
// this is an array of list of all foods for food menu
const foodList = [
 {
    name: "MUTABLE",
    description: "Eggplant, Yogurt, Lemon",
    price: 4,
    photo: mutable,
    id: "mutable",
  },
 {
    name: "BABA GHANOUSH",
    description: "Eggplant, Pomegranate, Tomato",
    price: 5,
    photo: babaGhanoush,
    id: "BbabaGhanoush",
  },
  {
    name: "TABBOULEH SALAD",
    description: "Parsly, Tomato, Olive Oil",
    price: 6,
    photo: tabboulehSalad,
    id: "tabboulehSalad",
  },
  {
    name: "FATTOUSH",
    description: "Lettuce, Tomato, Parsly",
    price: 4,
    photo: fattoush,
    id: "fattoush",
  },
  {
    name: "FALAFEL ROLL",
    description: "Falafel, Bread, chips",
    price: 8,
    photo: fafafel,
    id: "falafel",
  },
  {
    name: "BEEF ROLL",
    description: "Beef Roll, chips",
    price: 10,
    photo: beefRoll,
    id: "beefRoll",
  },
];
 export default foodList;