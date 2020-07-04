import React from "react";
import { Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
    >
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          Music Master
        </Text>
        <Button
          title="Start Game"
          onPress={() => navigation.navigate("StartGame")}
        />
      </View>
    </View>
  );
}
