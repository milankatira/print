const exampleReducer = (state = [], action) => {
  switch (action.type) {
    case "theme":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default exampleReducer;
