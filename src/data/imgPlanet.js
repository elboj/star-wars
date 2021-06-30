import planet1 from "../assets/planet-1.jpg";
import planet2 from "../assets/planet-2.jpg";
import planet3 from "../assets/planet-3.jpg";

// export const planetImage = [
//   {
//     src: planet1,
//   },
//   {
//     src: planet2,
//   },
//   {
//     src: planet3,
//   },
// ];

export const items = [
  {
    Name: "Macbook Pro",
    Image: planet1,
    contentPosition: "left",
    Items: [
      {
        Name: "Macbook Pro",
        Image: planet2,
      },
      {
        Name: "iPhone",
        Image: planet3,
      },
    ],
  },
  {
    Name: "Home Appliances",
    Image: planet1,
    contentPosition: "middle",
    Items: [
      {
        Name: "Washing Machine WX9102",
        Image: planet2,
      },
      {
        Name: "Learus Vacuum Cleaner",
        Image: planet3,
      },
    ],
  },
  {
    Name: "Decoratives",
    Image: planet1,
    contentPosition: "right",
    Items: [
      {
        Name: "Living Room Lamp",
        Image: planet2,
      },
      {
        Name: "Floral Vase",
        Image: planet3,
      },
    ],
  },
];
