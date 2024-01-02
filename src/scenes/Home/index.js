import { StatusBar } from "expo-status-bar";
import { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
// import { AuthContext } from "../../store/context/authContext";
import { logout, auth } from "../../store/redux/auth";

// ck_a9cfbd64570f169d3ee9cf2cc5efff35805b29cc
// cs_e0fbf04ef5f4cbd32345e67ad299bc3876b2a9c2

export default function Home() {
  // const authCtx = useContext(AuthContext);

  // const isAuth = authCtx.domain;
  const authData = {
    domain: "https://chenaradodge.shopinthebio.com",
    key: "ck_a9cfbd64570f169d3ee9cf2cc5efff35805b29cc",
    secret: "cs_e0fbf04ef5f4cbd32345e67ad299bc3876b2a9c2",
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
