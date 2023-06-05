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
export let getCars = (filter,order) => async (dispatch) => {
  dispatch({ type: GET_CARS_LOADING });
  try {
    let res = await axios.get(
      `https://drawers-armadillo.cyclic.app/api/marketPlace_Inventory/get-inventoryInfo?filter=${filter}&order=${order}`
    );
console.log(res.data.flteredData);
    dispatch({ type: GET_CARS_SUCCESS, payload: res.data.flteredData });
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
      `https://drawers-armadillo.cyclic.app/api/marketPlace_Inventory/get-SingleinventoryInfo/${id}`
    );

    await dispatch({
      type: GET_SINGLE_CARS_SUCCESS,
      payload: res.data.singleInventoryData,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_SINGLE_CARS_ERROR });
  }
};

//addCar
export let addCar = (data) => async (dispatch) => {
  dispatch({ type: ADD_CARS_LOADING });
  try {
    let res = await axios.post(
      `https://drawers-armadillo.cyclic.app/api/marketPlace_Inventory/get-SingleinventoryInfo/`,
      data
    );

    await dispatch({ type: ADD_CARS_SUCCESS, payload: res });
  } catch (error) {
    console.log(error);
    dispatch({ type: ADD_CARS_ERROR });
  }
};
