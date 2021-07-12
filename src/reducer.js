export const reducer = (state, action) => {
  if (action.type === "DATA_FETCHED") {
    const newPlanet = action.payload.slice(0, 39);
    const newStarShips = action.payload.slice(40, 75);
    const newPeople = action.payload.slice(76);
    return {
      ...state,
      allData: [...action.payload],
      people: newPeople,
      planet: newPlanet,
      starShip: newStarShips,
      isLoading: false,
    };
  }
  if (action.type === "HOME_DISPLAY") {
    return {
      ...state,
      hide: true,
      pg: false,
    };
  }
  throw new Error("no matching action type");
};
