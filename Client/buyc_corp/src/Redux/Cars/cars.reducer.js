import {
  ADD_CARS_ERROR,
  ADD_CARS_LOADING,
  ADD_CARS_SUCCESS,
  GET_CARS_LOADING,
  GET_CARS_SUCCESS,
  GET_CARS_ERROR,
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

let initData = {
  loading: false,
  error: false,
  carsData: [],
  singleCarData: {},
};

export let carsReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case GET_CARS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_CARS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        carsData: payload,
      };
    }
    case GET_CARS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case GET_SINGLE_CARS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_SINGLE_CARS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_SINGLE_CARS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        singleCarData: payload,
      };
    }

    default: {
      return state;
    }
  }
};
