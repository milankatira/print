const initialValue = {
  theme: "",
};
const exampleReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "theme":
      return {

        ...state, 
        theme : action.payload
      }
    default:
      return state;
  }
};

export default exampleReducer;
