/** @format */

const initialState = {
   
};

// changed to arrow function
const collections = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        getInfoData: action.payload,
      };
    case "RESPONSE":
      return {
        ...state,
        response: action.payload,
      };
    default:
      return { ...state };
  }
};

export default collections;
