import React from "react";
import spinner from "./spinner.gif";
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  spinner: {
    width: 50,
    height: 50,
  },
});

export default () => {
  return (
    <View>
      <Image
        source={spinner}
        alt="Loading..."
        style={styles.spinner}
      />
    </View>
  );
};
