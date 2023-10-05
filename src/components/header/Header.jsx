// react native imports
import { View, Text } from "react-native";

// icons imports
import { MaterialCommunityIcons } from "@expo/vector-icons";

// color imports
import { themeColors } from "../../../utils/colors";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontFamily: "Helvetica Neue",
          fontSize: 16,
          letterSpacing: 1,
          marginRight: 8,
          textTransform: "uppercase",
        }}
      >
        MarioFlix
      </Text>
      <MaterialCommunityIcons
        name="movie-filter"
        size={30}
        color={themeColors.complementary}
      />
    </View>
  );
};

export default Header;
