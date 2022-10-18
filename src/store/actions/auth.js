//import AsyncStorage from "@react-native-async-storage/async-storage";

export const LOGOUT = "LOGOUT";
export const SET_AUTH = "SET_AUTH";

export const setAuth = (userId, sessionId, cookie, userType) => {
  return async (dispatch) => {
    dispatch({
      type: SET_AUTH,
      userId: userId,
      sessionId: sessionId,
      cookie,
      userType: userType,
    });
  };
};

export const logOut = () => {
  return async (dispatch) => {
   // AsyncStorage.removeItem("userData");
    dispatch({
      type: LOGOUT,
    });
  };
};