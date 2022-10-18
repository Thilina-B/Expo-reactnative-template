import { LOGOUT, SET_AUTH } from "../actions/auth";

const initialState = {
  userId: "0",
  sessionId: "",
  cookie: "",
  isAuth: false,
  type: "FREE",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        userId: "",
        sessionId: "",
        cookie: "",
        isAuth: false,
      };

    case SET_AUTH:
      return {
        userId: action.userId,
        sessionId: action.sessionId,
        cookie: action.cookie,
        isAuth: true,
        type: action.userType,
      };

    default:
      return state;
  }
};