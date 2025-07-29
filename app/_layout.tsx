import AntDesign from "@expo/vector-icons/AntDesign";
import { Stack } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
  const [showShortCuts, setShowShortCuts] = useState(false);

  const showShortCutsBar = () => {
    setShowShortCuts(true);
  };

  const hideShortCutsBar = () => {
    setShowShortCuts(false);
  };

  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#000" }
        }}
      />
      <TouchableOpacity style={styles.clickAwayContainer} onPress={hideShortCutsBar} activeOpacity={1} />
      {showShortCuts && (
        <View style={styles.shortCutsBar}>
          <TouchableOpacity onPress={hideShortCutsBar} style={styles.squareButton}>
            <Text>Weight</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.footer}>
        <TouchableOpacity onPress={showShortCutsBar} style={styles.circularButton}>
          <AntDesign name="plus" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  clickAwayContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 0
  },
  shortCutsBar: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    bottom: 80,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "#1c1c1e"
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "#1c1c1e",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#38383a",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5
  },
  circularButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5
  },
  squareButton: {
    width: 56,
    height: 56,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    elevation: 5
  }
});
