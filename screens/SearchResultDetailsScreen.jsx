import { useRoute } from "@react-navigation/native";

import { View, Text, Image } from "react-native";

// fetch movie details
import { fetchSearchResultDetails, image500 } from "../utils/helpers";
import { useState, useEffect } from "react";

const SearchResultDetailsScreen = () => {
  const route = useRoute();
  const [movieDetails, setMovieDetails] = useState({});
  const { id, type } = route.params;

  console.log("this is the route params", route.params);

  const getMovieDetails = async () => {
    const data = await fetchSearchResultDetails(type, id);
    setMovieDetails(data);
  };

  // fetch movie details
  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <View>
      <Text>{movieDetails?.title}</Text>
      <Text>{movieDetails?.overview}</Text>
      <Text>{movieDetails?.popularity}</Text>
      <Text>{movieDetails?.release_date}</Text>
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

export default SearchResultDetailsScreen;
