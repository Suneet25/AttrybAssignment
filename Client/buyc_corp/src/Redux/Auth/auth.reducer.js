import {
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_REGISTER_ERROR,
  AUTH_REGISTER_LOADING,
  AUTH_REGISTER_SUCCESS,
  AUTH_LOGOUT
} from "./auth.actionTypes";

let initState = {
  loading: false,
  error: false,
  isAuth: false,
  token: "",
  name: "",
};

export let authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case AUTH_REGISTER_ERROR: {
      return {
        ...state,
        error: true,
        loading:false
      };
    }

    case AUTH_REGISTER_LOADING: {
      return {
        ...state,
        loading: true,
        error:false
      };
    }
    case AUTH_REGISTER_SUCCESS: {
      return {
        ...state,
        loading:false,
        error:false
      };
    }

    case AUTH_ERROR: {
      return { ...state, error: true,loading:false };
    }
    case AUTH_LOADING: {
      return { ...state, loading: true ,erroe:false};
    }
    case AUTH_SUCCESS: {
      localStorage.setItem("token", JSON.stringify(payload));
      return {
        ...state,
        token: payload.token,
        loading: false,
        error: false,
        isAuth: true,
        name: payload.user.name,
      };
    }
    case AUTH_LOGOUT: {
      localStorage.removeItem("token");
      return { ...state, isAuth: false, token: "", name: "" };
    }
    default: {
      return state;
    }
  }
};
