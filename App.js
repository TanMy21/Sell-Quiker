import React from "react";
import Screen from "./app/components/Screen";
// import AccountScreen from "./app/screens/AccountScreen";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import ListingEditScreen from "./app/screens/ListingEditScreen";
// import ListingsScreen from "./app/screens/ListingsScreen";
// import LoginScreen from "./app/screens/LoginScreen";
// import Card from "./app/components/Card";
// import MessagesScreen from "./app/screens/MessagesScreen";
// import RegisterScreen from "./app/screens/RegisterScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <Screen>
      {/* <AccountScreen /> */}
      {/* <ListingDetailsScreen /> */}
      {/* <ListingEditScreen /> */}
      {/* <ListingsScreen /> */}
      {/* <LoginScreen /> */}
      {/* <MessagesScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <ViewImageScreen /> */}
      <WelcomeScreen />
      {/* <Card
        title="Title"
        subTitle="sub title"
        image={require("./app/assets/table.jpg")}
      />  */}
    </Screen>
  );
}
