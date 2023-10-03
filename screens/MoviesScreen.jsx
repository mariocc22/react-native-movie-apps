// react imports
import { useLayoutEffect, useState, useEffect } from "react";

// react native imports
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

// react navigation imports
import { useNavigation } from "@react-navigation/native";

// fetching movies
import {
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchUpcomingMovies,
  image185,
} from "../utils/helpers";

// data for the select list
import { data } from "../utils/constants";
import SelectComponent from "../components/SelectComponent";

const MoviesScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const [movies, setMovies] = useState([]);

  // fetch movies by type
  const fetchMoviesByType = async (selectedType) => {
    let data = [];

    switch (selectedType) {
      case "popular":
        data = await fetchPopularMovies();
        break;
      case "top_rated":
        data = await fetchTopRatedMovies();
        break;
      case "now_playing":
        data = await fetchNowPlayingMovies();
        break;
      case "upcoming":
        data = await fetchUpcomingMovies();
        break;
      default:
        break;
    }

    setMovies(data?.results);
  };

  useEffect(() => {
    fetchMoviesByType(selected);
  }, [selected]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SelectComponent
        defaultOption={{ key: "popular", value: "popular" }}
        placeholder={"Select a Category"}
        data={data}
        setSelected={setSelected}
      />
      <FlatList
        style={{ marginTop: 10 }}
        data={movies}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item?.title}</Text>
            <Text>{item?.popularity}</Text>
            <Text>{item?.release_date}</Text>
            <Image
              source={{ uri: image185(item?.poster_path) }}
              width={150}
              height={150}
            />
            <TouchableOpacity
              style={{
                width: 200,
                borderRadius: 10,
                overflow: "hidden",
              }}
              onPress={() =>
                navigation.navigate("MovieDetailsScreen", {
                  id: item?.id,
                })
              }
            >
              <Text
                style={{
                  color: "blue",
                  backgroundColor: "lightblue",
                  padding: 15,
                }}
              >
                View Details
              </Text>
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              backgroundColor: "black",
              marginVertical: 10,
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MoviesScreen;
