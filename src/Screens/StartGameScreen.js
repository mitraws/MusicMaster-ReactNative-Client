import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import randomcolor from "randomcolor";

export default function StartGameScreen({ navigation }) {
  const [player, setPlayer] = useState("");

  return (
    <View
      onSwipeFromLeft={() => navigation.goBack()}
      style={{
        alignItems: "center",
        flex: 1,
        backgroundColor: randomcolor(),
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          padding: 50,
        }}
      >
        Enter players:
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          onBlur={Keyboard.dismiss}
          blurOnSubmit={true}
          maxLength={20}
          autoCapitalize="words"
          style={styles.textInput}
          placeholder="Player name"
          onChangeText={(text) => setPlayer(text)}
          value={player}
        ></TextInput>
        <TouchableOpacity
          onPress={() => handleSubmit()}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#CCCCCC",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white",
    borderColor: "black",
    textAlign: "right",
  },
  addButton: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "grey",
    padding: 10,
    margin: 5,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
});
