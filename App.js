import React from "react";
import Screen from "./app/components/Screen";
import { Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
// import AccountScreen from "./app/screens/AccountScreen";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import ListingEditScreen from "./app/screens/ListingEditScreen";
// import ListingsScreen from "./app/screens/ListingsScreen";
// import LoginScreen from "./app/screens/LoginScreen";
// import Card from "./app/components/Card";
// import MessagesScreen from "./app/screens/MessagesScreen";
// import RegisterScreen from "./app/screens/RegisterScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button title="View Tweet" onPress={() => navigation.navigate("TweetDetails")}/>
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <Text>Tweets</Text>
  </Screen>
);

const Account = () => (
  <Screen>
    <Text> Account </Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets}/>
    <Stack.Screen name="TweetDetails" component={TweetDetails}/>
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={StackNavigator}/>
    <Tab.Screen name="Account" component={Account}/>
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
      
  );
}
