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

// components
import PreviewCard from "../src/components/card/PreviewCard";
import SelectComponent from "../src/components/reusable/SelectComponent";

// data
import { dataSearch } from "../utils/constants";

// loader
import Loader from "../src/components/reusable/Loader";

// helpers
import { searchMovies } from "../utils/helpers";
import SearchComponent from "../src/components/reusable/SearchComponent";

// colors import
import { themeColors } from "../utils/colors";

const SearchResultScreen = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSearchResult = async (search, selected) => {
    setLoading(true);
    let data = [];
    searchMovies(selected, {
      query: search,
      include_adult: false,
      page: 1,
      language: "en-US",
    }).then((res) => {
      data = res?.results;
      setSearchResult(data);
      setLoading(false);
    });
  };

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text
        style={{
          fontSize: 14,
          marginTop: 20,
          paddingHorizontal: 20,
        }}
      >
        Search Movie/TV Show Name
        <Text style={{ fontWeight: 600, color: themeColors.secondary }}>*</Text>
      </Text>
      {/* search bar rne */}
      <SearchComponent search={search} updateSearch={updateSearch} />

      {/* choose type */}
      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: 20,
          marginTop: 10,
          gap: 10,
        }}
      >
        <Text
          style={{
            fontSize: 14,
          }}
        >
          Choose Search Type
          <Text style={{ fontWeight: 600, color: themeColors.secondary }}>
            *
          </Text>
        </Text>
        <SelectComponent
          defaultOption={{ key: "multi", value: "Multi" }}
          placeholder={"Select a Category"}
          data={dataSearch}
          setSelected={setSelected}
        />
      </View>

      {/* search button */}
      <TouchableOpacity
        style={{
          backgroundColor: themeColors.complementary,
          padding: 1,
          borderRadius: 10,
          marginTop: 20,
          marginHorizontal: 20,
        }}
        onPress={() => {
          fetchSearchResult(search, selected);
          this.search.blur();
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 16,
            fontWeight: 600,
            paddingVertical: 10,
          }}
        >
          Search
        </Text>
      </TouchableOpacity>

      {/* search results */}
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          style={{ marginTop: 30, paddingHorizontal: 10 }}
          data={searchResult}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => (
            <PreviewCard
              type={selected === "multi" ? item?.media_type : selected}
              item={item}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchResultScreen;
