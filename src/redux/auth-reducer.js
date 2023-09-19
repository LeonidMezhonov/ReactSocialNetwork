import { authAPI, loginAPI, logoutAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
  email: null,
  userId: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
};

export let setAuthUserData = (email, userId, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { email, userId, login, isAuth },
});

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI().then((response) => {
      if (response.resultCode === 0) {
        let { email, id, login } = response.data;
        dispatch(setAuthUserData(email, id, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    loginAPI(email, password, rememberMe).then((response) => {
      if (response.resultCode === 0) {
        dispatch(getAuthUserData());
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    logoutAPI().then((response) => {
      if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
