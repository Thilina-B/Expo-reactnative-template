import { StatusBar } from "expo-status-bar";
import { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
// import { AuthContext } from "../../store/context/authContext";
import { logout, auth } from "../../store/redux/auth";


export default function Home() {
  // const authCtx = useContext(AuthContext);

  // const isAuth = authCtx.domain;
  const authData = {
    domain: "#",
    key: "#",
    secret: "#",
  };
  const dispatch = useDispatch();
  dispatch(auth(authData));

  const domain = useSelector((state) => state.auth.domain);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
