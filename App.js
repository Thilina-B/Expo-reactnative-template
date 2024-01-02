import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
//import { store } from "./src/store/redux/store";
import AppNavigation from "_navigations/AppNavigation.js";
import Entypo from "@expo/vector-icons/Entypo";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./src/store/redux/store";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.warn(error);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    };

    prepare();
  }, []);

  useEffect(() => {
    // Additional side effects based on appIsReady can be added here
  }, [appIsReady]);

  if (appIsReady) {
    SplashScreen.hideAsync();
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    );
  } else {
    return null;
  }
};

export default App;
