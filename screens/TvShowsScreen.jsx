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
import SelectComponent from "../components/SelectComponent";

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
    <SafeAreaView style={{ flex: 1 }}>
      <SelectComponent
        defaultOption={{ key: "popular", value: "popular" }}
        placeholder={"Select a Category"}
        data={dataTv}
        setSelected={setSelected}
      />
      <FlatList
        style={{ marginTop: 10 }}
        data={tvshows}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item?.name}</Text>
            <Text>{item?.popularity}</Text>
            <Text>{item?.first_air_date}</Text>
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
                navigation.navigate("TVShowDetailsScreen", {
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

export default TVShowsScreen;
