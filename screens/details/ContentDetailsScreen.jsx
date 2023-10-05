// react navigation
import { useNavigation, useRoute } from "@react-navigation/native";

// react native imports
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

// fetch movie details
import { fetchMoreDetails, image500 } from "../../utils/helpers";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

// colors import
import { themeColors } from "../../utils/colors";

// icons
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ContentDetailsScreen = () => {
  const route = useRoute();
  const [movieDetails, setMovieDetails] = useState({});
  const { id, type } = route.params;
  const navigation = useNavigation();

  const getMovieDetails = async () => {
    const data = await fetchMoreDetails(type, id);
    setMovieDetails(data);
  };

  // fetch movie details
  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: themeColors.primary }}>
      <SafeAreaView
        style={{
          position: "absolute",
          zIndex: 10,
          width: "100%",
          marginLeft: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
          }}
        >
          <Ionicons
            name="chevron-back-outline"
            size={40}
            color={themeColors.primary}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={{ flex: 1 }}>
        <Image
          source={{
            uri: image500(movieDetails?.poster_path),
          }}
          style={{ width: "100%", height: 500 }}
          resizeMode="cover"
        />
        <LinearGradient
          colors={["transparent", themeColors.primary80, themeColors.primary]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: -50 }}>
        <Text style={styles.title}>
          {movieDetails?.title || movieDetails?.name}
        </Text>
        <View style={styles.subWrapper}>
          <View style={styles.popularity}>
            <Text style={styles.statsText}>Popularity</Text>
            <Text style={styles.statsSubText}>{movieDetails?.popularity}</Text>
          </View>

          <AntDesign name="star" size={24} color={themeColors.secondary} />

          <View style={styles.releaseDate}>
            <Text style={styles.statsText}>Released Date</Text>
            <Text style={styles.statsSubText}>
              {movieDetails?.release_date || movieDetails?.first_air_date}
            </Text>
          </View>
        </View>
        <Text style={styles.overview}>{movieDetails?.overview}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    bottom: 0,
    width,
    height: height * 0.4,
  },
  title: {
    fontSize: 42,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 2,
    color: "white",
    marginBottom: 20,
  },
  overview: {
    fontSize: 20,
    color: "white",
    marginVertical: 20,
    lineHeight: 30,
    textAlign: "justify",
  },
  popularity: {
    display: "flex",
    flexDirection: "column",
  },
  releaseDate: {
    display: "flex",
    flexDirection: "column",
  },
  subWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    alignItems: "center",
  },
  statsText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  statsSubText: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
});

export default ContentDetailsScreen;
