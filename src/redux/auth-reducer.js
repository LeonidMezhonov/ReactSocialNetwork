import { authAPI } from "../api/api";

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
        ...action.data,
        isAuth: true,
      };
    }

    default:
      return state;
  }
};

export let setAuthUserData = (email, userId, login) => ({
  type: SET_USER_DATA,
  data: { email, userId, login },
});

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI().then((response) => {
      if (response.resultCode === 0) {
        let { email, id, login } = response.data;
        dispatch(setAuthUserData(email, id, login));
      }
    });
  };
};

export default authReducer;
