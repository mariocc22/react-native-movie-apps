import { View } from "react-native";
import React from "react";
import { SelectList } from "react-native-dropdown-select-list";

const SelectComponent = ({ defaultOption, placeholder, data, setSelected }) => {
  return (
    <View>
      <SelectList
        defaultOption={defaultOption}
        placeholder={placeholder}
        data={data}
        setSelected={setSelected}
      />
    </View>
  );
};

export default SelectComponent;
