import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import randomcolor from "randomcolor";

export default function StartGameScreen({ navigation }) {
  const [player, setPlayer] = useState("");

  return (
    <View
      onSwipeFromLeft={() => navigation.goBack()}
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: randomcolor(),
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
          padding: 50,
        }}
      >
        Enter players:
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          blurOnSubmit={true}
          maxLength={20}
          autoCapitalize="words"
          style={{
            backgroundColor: "white",
            borderColor: randomcolor(),
            borderWidth: 1,
            padding: 9,
          }}
          placeholder="Player name"
          onChangeText={(text) => setPlayer(text)}
          value={player}
        ></TextInput>
        <Button title="Add" />  
      </View>
    </View>
  );
}
