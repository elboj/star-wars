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
  // if (action.type === "PAGINATION_HIDDEN") {
  //   return {
  //     ...state,
  //     pHide: true,
  //     pg: false,
  //   };
  // }
  if (action.type === "HOME_DISPLAY") {
    return {
      ...state,
      hide: true,
      pg: false,
    };
  }
  if (action.type === "NO_RESULT") {
    return {
      ...state,
      pHide: true,
      pg: false,
      hide: true,
    };
  }

  if (action.type === "SEARCH_DATA") {
    const newData = action.payload;
    console.log(action.payload);
    return {
      ...state,
      searchResult: [...newData],
      hide: false,
      pHide: false,
      pg: true,
    };
  }
  throw new Error("no matching action type");
};
