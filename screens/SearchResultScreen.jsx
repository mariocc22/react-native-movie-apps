// react native imports
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

// react imports
import { useState } from "react";

// rne imports
import { SearchBar } from "@rneui/themed";
import SelectComponent from "../src/components/reusable/SelectComponent";

// data
import { dataSearch } from "../utils/constants";

// fetching search results
import { image185, searchMovies } from "../utils/helpers";
import { useNavigation } from "@react-navigation/native";

const SearchResultScreen = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigation = useNavigation();

  const fetchSearchResult = async (search, selected) => {
    let data = [];
    searchMovies(selected, {
      query: search,
      include_adult: false,
      page: 1,
      language: "en-US",
    }).then((res) => {
      data = res?.results;
      setSearchResult(data);
      console.log("this is the search result", data);
    });
  };

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text
        style={{
          paddingLeft: 30,
          fontSize: 16,
          fontFamily: "Verdana",
          marginTop: 20,
        }}
      >
        Search Movie/TV Show Name
        <Text style={{ fontWeight: 600, color: "#BC3908" }}>*</Text>
      </Text>
      <SearchBar
        ref={(search) => (this.search = search)}
        containerStyle={{
          backgroundColor: "white",
          width: "100%",
          paddingHorizontal: 30,
          margin: "auto",
          borderBlockColor: "white",
        }}
        inputContainerStyle={{
          backgroundColor: "lightgray",
          borderRadius: 10,
        }}
        inputStyle={{
          fontFamily: "Verdana",
          fontSize: 14,
        }}
        placeholderTextColor={"gray"}
        placeholder="i.e. James Bond, CSI"
        onChangeText={updateSearch}
        value={search}
      />

      {/* choose type */}
      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: 30,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Verdana",
          }}
        >
          Choose Search Type
          <Text style={{ fontWeight: 600, color: "#BC3908" }}>*</Text>
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <SelectComponent
            defaultOption={{ key: "multi", value: "Multi" }}
            placeholder={"Select a Category"}
            data={dataSearch}
            setSelected={setSelected}
          />
          <TouchableOpacity
            onPress={() => {
              fetchSearchResult(search, selected);
              this.search.blur();
            }}
            style={{
              backgroundColor: "#BC3908",
              padding: 10,
              borderRadius: 10,
              marginLeft: 10,
            }}
          >
            <Text style={{ color: "white" }}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* search results */}
      <FlatList
        style={{ marginTop: 10 }}
        data={searchResult}
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
                navigation.navigate("ContentDetailsScreen", {
                  id: item?.id,
                  type: selected === "multi" ? item?.media_type : selected,
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

export default SearchResultScreen;
