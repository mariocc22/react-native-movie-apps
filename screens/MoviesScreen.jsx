// react imports
import { useLayoutEffect, useState, useEffect } from "react";

// react native imports
import { SafeAreaView, FlatList, View } from "react-native";

// fetching movies
import {
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchUpcomingMovies,
} from "../utils/helpers";

// data for the select list
import { data } from "../utils/constants";
import SelectComponent from "../src/components/reusable/SelectComponent";
import PreviewCard from "../src/components/card/PreviewCard";

const MoviesScreen = () => {
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
        <SelectComponent
          defaultOption={{ key: "popular", value: "Popular" }}
          placeholder={"Select a Category"}
          data={data}
          setSelected={setSelected}
        />
        <FlatList
          style={{ marginTop: 20 }}
          data={movies}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => <PreviewCard type={"movie"} item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default MoviesScreen;
