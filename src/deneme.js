import React, { useState } from "react";
import {
  View,
  Platform,
  UIManager,
  LayoutAnimation,
  StyleSheet,
  Button
} from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {

  const [thirdBoxPosition, setThirdBoxPosition] = useState("left");



  const toggleThirdBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setThirdBoxPosition(thirdBoxPosition === "left" ? "right" : "left");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Spring" onPress={toggleThirdBox} />
      </View>
      <View
        style={[
          styles.box,
          thirdBoxPosition === "left" ? null : styles.moveRight
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 5,
    margin: 8,
    backgroundColor: "blue",
    opacity:1,

  },
  moveRight: {
    alignSelf: "flex-start",
    height: 200,
    width: 200,
    opacity:1,
    backgroundColor: "red",
  },
  buttonContainer: {
    alignSelf: "center"
  }
});

export default App;
