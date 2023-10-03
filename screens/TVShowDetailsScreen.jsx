import { useRoute } from "@react-navigation/native";

import { View, Text, Image } from "react-native";

// fetch movie details
import { fetchTvShowDetails, image500 } from "../utils/helpers";
import { useState, useEffect } from "react";

const TVShowDetailsScreen = () => {
  const route = useRoute();
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = route.params;

  const getMovieDetails = async () => {
    const data = await fetchTvShowDetails(id);
    setMovieDetails(data);
  };

  // fetch movie details
  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <View>
      <Text>{movieDetails?.name}</Text>
      <Text>{movieDetails?.overview}</Text>
      <Text>{movieDetails?.popularity}</Text>
      <Text>{movieDetails?.first_air_date}</Text>
      <Image
        source={{
          uri: image500(movieDetails?.poster_path),
        }}
        style={{ width: "100%", height: 500 }}
        resizeMode="cover"
      />
    </View>
  );
};

export default TVShowDetailsScreen;
