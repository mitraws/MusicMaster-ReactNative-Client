import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import StartGameScreen from "./src/Screens/StartGameScreen";
import GameScreen from "./src/Screens/GameScreen";
import ScoreScreen from "./src/Screens/ScoreScreen";
import { Provider as StoreProvider } from "react-redux";
import store from './src/store/index.js'

const Stack = createStackNavigator();

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="StartGame" component={StartGameScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="Score" component={ScoreScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}
