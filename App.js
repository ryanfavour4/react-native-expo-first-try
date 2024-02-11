import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
const logo = require("./assets/adaptive-icon.png");

export default function App() {
  const [random, setRandom] = useState(Math.floor(Math.random() * 100))

  useEffect(() => {
    const timer = setInterval(() => {
      setRandom(
        Math.floor(Math.random() * 100)
      )
    }, 2000)

    return () => {
      clearInterval(timer);
    }
  }, [])

  return (
    <View style={styles.container}>
      {/* <ScrollView>
      </ScrollView> */}
      <Text>{random}, DONE MAH BOUY! WE UOPP</Text>
      <Text>This is awesome woohoo!</Text>
      <Text>IT'S FREAKING FAST 😱😱</Text>
      <Text>No freaking way again</Text>
      <StatusBar style="auto" />
      <>
        {random <= 50 ? (
          <>
            <Image
              style={{ height: 50, width: 100 }}
              source={logo}
            />
            <Text>{random} less than 50</Text>
          </>
        ) : (
          <>
            <Image
              style={{ height: 50, width: 100 }}
              source={{ uri: "https://picsum.photos/200" }}
            />
            <Text>{random} higher than 50</Text>
          </>
        )}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3d3",
    alignItems: "center",
    justifyContent: "center",
  },
});

