import React, { useRef } from "react";
import { Animated, Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start();
    }, []);

    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  };

  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
    >
      <FadeInView>
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
      </FadeInView>
    </View>
  );
}
