import {
  GET_CARS_ERROR,
  ADD_CARS_ERROR,
  ADD_CARS_LOADING,
  ADD_CARS_SUCCESS,
  GET_CARS_LOADING,
  GET_CARS_SUCCESS,
  GET_SINGLE_CARS_ERROR,
  GET_SINGLE_CARS_LOADING,
  GET_SINGLE_CARS_SUCCESS,
  REMOVE_CARS_ERROR,
  REMOVE_CARS_LOADING,
  REMOVE_CARS_SUCCESS,
  UPDATE_CARS_ERROR,
  UPDATE_CARS_LOADING,
  UPDATE_CARS_SUCCESS,
} from "./cars.actionTypes";

import axios from "axios";
//getAllCars
export let getCars = () => async (dispatch) => {
  dispatch({ type: GET_CARS_LOADING });
  try {
    let res = await axios.get(
      "http://localhost:8000/api/marketPlace_Inventory/get-inventoryInfo"
    );

    dispatch({ type: GET_CARS_SUCCESS, payload: res.data.allInventoryData });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_CARS_ERROR });
  }
};

//getSingleCar
export let getSingleCar = (id) => async (dispatch) => {
  dispatch({ type: GET_SINGLE_CARS_LOADING });
  try {
    let res = await axios.get(
      `http://localhost:8000/api/marketPlace_Inventory/get-SingleinventoryInfo/${id}`
    );

    await dispatch({ type: GET_SINGLE_CARS_SUCCESS, payload: res.data.singleInventoryData });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_SINGLE_CARS_ERROR });
  }
};