import { View } from "react-native";
import React from "react";
import { SelectList } from "react-native-dropdown-select-list";

const SelectComponent = ({ defaultOption, placeholder, data, setSelected }) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10,
      }}
    >
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
