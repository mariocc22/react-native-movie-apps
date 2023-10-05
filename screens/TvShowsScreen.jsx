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
  fetchAiringTodayTvShows,
  fetchOnTheAirTvShows,
  fetchPopularTvShows,
  fetchTopRatedTvShows,
  image185,
} from "../utils/helpers";

// data for the select list
import { dataTv } from "../utils/constants";
import SelectComponent from "../src/components/reusable/SelectComponent";
import PreviewCard from "../src/components/card/PreviewCard";

const TVShowsScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const [tvshows, setTvShows] = useState([]);

  // fetch movies by type
  const fetchTvShowsByType = async (selectedType) => {
    let data = [];

    switch (selectedType) {
      case "popular":
        data = await fetchPopularTvShows();
        break;
      case "top_rated":
        data = await fetchTopRatedTvShows();
        break;
      case "on_the_air":
        data = await fetchOnTheAirTvShows();
        break;
      case "airing_today":
        data = await fetchAiringTodayTvShows();
        break;
      default:
        break;
    }

    setTvShows(data?.results);
  };

  useEffect(() => {
    fetchTvShowsByType(selected);
  }, [selected]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <SelectComponent
        defaultOption={{ key: "popular", value: "Popular" }}
        placeholder={"Select a Category"}
        data={dataTv}
        setSelected={setSelected}
      />
      <FlatList
        style={{ padding: 10 }}
        data={tvshows}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => <PreviewCard type={"tv"} item={item} />}
      />
    </SafeAreaView>
  );
};

export default TVShowsScreen;
