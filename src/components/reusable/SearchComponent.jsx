import { View, Text } from "react-native";

// search bar rne
import { SearchBar } from "@rneui/base";

// color imports
import { themeColors } from "../../../utils/colors";

const SearchComponent = ({ search, updateSearch }) => {
  return (
    <>
      <SearchBar
        ref={(search) => (this.search = search)}
        searchIcon={{ size: 20, color: themeColors.primary }}
        clearIcon={{ size: 20, color: themeColors.primary }}
        containerStyle={{
          backgroundColor: "white",
          width: "100%",
          paddingHorizontal: 20,
          margin: "auto",
          borderBlockColor: "white",
        }}
        inputContainerStyle={{
          backgroundColor: "white",
          borderRadius: 10,
          borderColor: themeColors.primary,
          borderWidth: 2,
          borderBottomWidth: 2,
        }}
        inputStyle={{
          fontSize: 14,
          color: themeColors.primary,
        }}
        placeholderTextColor={"gray"}
        placeholder="i.e. James Bond, CSI"
        onChangeText={updateSearch}
        value={search}
      />
    </>
  );
};

export default SearchComponent;
