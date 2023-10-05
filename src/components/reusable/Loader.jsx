// react native imports
import { View, Dimensions, StyleSheet, ActivityIndicator } from "react-native";

// color imports
import { themeColors } from "../../../utils/colors";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={themeColors.complementary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 200,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
});

export default Loader;
