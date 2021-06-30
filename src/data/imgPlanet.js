import planet1 from "../assets/planet-1.jpg";
import planet2 from "../assets/planet-2.jpg";
import planet3 from "../assets/planet-3.jpg";

export const items = [
  {
    Name: "Tatooine",
    Image: planet1,
    contentPosition: "left",
    Items: [
      {
        Name: "Alderaan",
        Image: planet2,
      },
      {
        Name: "Yavin IV",
        Image: planet3,
      },
    ],
  },
  {
    Name: "Hoth",
    Image: planet1,
    contentPosition: "middle",
    Items: [
      {
        Name: "Dagobah",
        Image: planet2,
      },
      {
        Name: "Bepsin",
        Image: planet3,
      },
    ],
  },
  {
    Name: "Endor",
    Image: planet1,
    contentPosition: "right",
    Items: [
      {
        Name: "Naboo",
        Image: planet2,
      },
      {
        Name: "Coruscant",
        Image: planet3,
      },
    ],
  },
];
