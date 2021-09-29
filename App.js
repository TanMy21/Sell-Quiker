import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
// import AccountScreen from "./app/screens/AccountScreen";
// import ListingsScreen from "./app/screens/ListingsScreen";
// import { View, SafeAreaView } from "react-native";
// import AppButton from "./app/components/AppButton";
// import Card from "./app/components/Card";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import MessagesScreen from "./app/screens/MessagesScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {

  const [category, setCategory] = useState(categories[0]);


  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <Card title="Title" subTitle="sub title" image={require("./app/assets/")}/>
    // <ListingDetailsScreen />
    // <MessagesScreen />
    // <AccountScreen />
    // <ListingsScreen />
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
