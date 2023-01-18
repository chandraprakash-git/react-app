/** @format */

import axios from "axios";

export const getData = () => async (dispatch) => {
  try {
    const instance = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await instance.get(`https://api.publicapis.org/entries`);
    dispatch({ type: "GET_DATA", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const saveData = (formData) => async (dispatch) => {
  try {
    let data = {
      success: true,
      status: 200,
      message: "successfully submitted",
    };
    dispatch({ type: "RESPONSE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
