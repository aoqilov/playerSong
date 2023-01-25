import { v4 as uuidv4 } from "uuid";

function albumData() {
  return [
    {
      id: uuidv4(),
      name: "Moving on ",
      img: "https://chillhop.com/wp-content/uploads/2022/10/0b99c64a1316ecfb990c546ba4a73f6de27cfde5-1024x1024.jpg",
      author: "Nymano, Suuna",
      colors: ["gray", "lightgray"],
      active: true,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=45154",
    },
    {
      id: uuidv4(),
      name: "chillhop beat tapes",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=45169",
      author: "Less people",
      colors: ["gray", "lightgray"],
      active: false,
      img: "https://chillhop.com/wp-content/uploads/2022/10/41619d032f80a089e2c99e98953d441fd061ef12-1024x1024.jpg",
    },
    {
      id: uuidv4(),
      name: "Monolith",
      img: "https://chillhop.com/wp-content/uploads/2022/10/0fe2c45f6e5410339c1040b8d72a137294a95d95-1024x1024.jpg",
      author: "TooNorth",
      colors: ["gray", "lightgray"],
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=45160",
    },
  ];
}
export default albumData;
