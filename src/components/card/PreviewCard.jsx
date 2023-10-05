// react native components
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

// react navigation imports
import { useNavigation } from "@react-navigation/native";

// image helper
import { image185 } from "../../../utils/helpers";

// color constants
import { themeColors } from "../../../utils/colors";

const PreviewCard = ({ item, type }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: image185(item?.poster_path) }}
        width={150}
        height={150}
        resizeMode="cover"
      />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{item?.title || item?.name}</Text>
        <Text style={styles.text}>
          <Text style={styles.strongText}>Popularity:</Text> {item?.popularity}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.strongText}>Released Date:</Text>{" "}
          {item?.release_date || item?.first_air_date}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("ContentDetailsScreen", {
              id: item?.id,
              type: type,
            })
          }
        >
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 5,
    flex: 1,
  },
  image: {
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: themeColors.primary,
  },
  text: {
    fontSize: 14,
    color: themeColors.tertiary,
    flexWrap: "wrap",
  },
  strongText: {
    fontSize: 16,
    fontWeight: "bold",
    color: themeColors.primary,
  },
  button: {
    backgroundColor: themeColors.complementary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: "auto",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default PreviewCard;
