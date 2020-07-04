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
import { useDispatch } from "react-redux";
import { addPlayer } from "../store/user/actions";

export default function StartGameScreen({ navigation }) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [players, setPlayers] = useState([]);

  const handleAddPlayer = () => {
    alert('Player added!')
    setPlayers([...players, text]);
  };

  const handleSubmit = () => {
    navigation.navigate("Game")
    dispatch(addPlayer(players));
    console.log("players added?", players);
  };

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
          clearTextOnFocus={true}
          maxLength={20}
          autoCapitalize="words"
          style={styles.textInput}
          placeholder="Player name"
          onChangeText={(text) => setText(text)}
          value={text}
        ></TextInput>
        <TouchableOpacity
          onPress={() => handleAddPlayer()}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(() => handleSubmit())}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>Play</Text>
        </TouchableOpacity>
      </View>
      {/* {gamePlayers} */}
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
