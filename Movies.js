// react imports
import React from "react";

// react native imports
import { Text, View } from "react-native";

// react navigation imports
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens imports
import MoviesScreen from "./screens/MoviesScreen";
import TvShowsScreen from "./screens/TvShowsScreen";
import SearchResultScreen from "./screens/SearchResultScreen";
import ContentDetailsScreen from "./screens/details/ContentDetailsScreen";

// scheme imports
import { useColorScheme } from "react-native";

// colors imports
import { themeColors } from "./utils/colors";

// components imports
import Header from "./src/components/header/Header";

// top tabs navigator
const TopTabs = () => {
  const TopTab = createMaterialTopTabNavigator();

  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          color: themeColors.primary,
          textTransform: "capitalize",
          height: 20,
        },
        tabBarIndicatorStyle: {
          height: 3,
          borderRadius: 3,
          backgroundColor: themeColors.secondary,
        },
      }}
    >
      <TopTab.Screen name="Movies" component={MoviesScreen} />
      <TopTab.Screen name="Search" component={SearchResultScreen} />
      <TopTab.Screen name="Tv Shows" component={TvShowsScreen} />
    </TopTab.Navigator>
  );
};

// home stack navigator
const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <Header />,
        headerStyle: {
          backgroundColor: themeColors.primary,
        },
      }}
    >
      <Stack.Screen
        name="Movie App"
        options={{
          headerTitleStyle: {
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
            fontFamily: "Verdana",
          },
        }}
        component={TopTabs}
      />
      <Stack.Screen
        name="ContentDetailsScreen"
        component={ContentDetailsScreen}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

const Movies = () => {
  const currentTheme = useColorScheme();
  return (
    <NavigationContainer
      theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <HomeStack />
    </NavigationContainer>
  );
};

export default Movies;
