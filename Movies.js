// react navigation imports
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// screens imports
import MoviesScreen from "./screens/MoviesScreen";
import TvShowsScreen from "./screens/TvShowsScreen";
import SearchResultScreen from "./screens/SearchResultScreen";

// icons imports
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieDetailsScreen from "./screens/MovieDetailsScreen";
import TVShowDetailsScreen from "./screens/TVShowDetailsScreen";

import { useColorScheme } from "react-native";
import SearchResultDetailsScreen from "./screens/SearchResultDetailsScreen";

// top tabs navigator
const TopTabs = () => {
  const TopTab = createMaterialTopTabNavigator();

  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontWeight: "bold",
          fontFamily: "Verdana",
          height: 20,
        },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 5,
          backgroundColor: "#BC3908",
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
        headerStyle: {
          backgroundColor: "#011638",
        },
        headerRight: () => (
          <Ionicons
            style={{ marginRight: 10 }}
            name="home"
            size={24}
            color="#BC3908"
          />
        ),
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
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="TVShowDetailsScreen"
        component={TVShowDetailsScreen}
        options={{
          presentation: "modal",
        }}
      />

      <Stack.Screen
        name="SearchResultDetailsScreen"
        component={SearchResultDetailsScreen}
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
