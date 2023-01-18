/** @format */

const initialState = {
  isAuth: localStorage.getItem("access_token") ? true : false,
  loading: false,
  error: null,
  jwt: localStorage.getItem("access_token")
    ? localStorage.getItem("access_token")
    : null,
  sidebar: false,
  notification: false,
  dimension: [],
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
