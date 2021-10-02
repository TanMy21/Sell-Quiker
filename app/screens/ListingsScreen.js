import React  from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";

const listings = [
  {
    id: 1,
    title: "Coffee Table for sale",
    price: 1000,
    image: require("../assets/CoffeeTable.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 8000,
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Headphone in working condition",
    price: 500,
    image: require("../assets/headphones.jpg"),
  },
  {
    id: 4,
    title: "Leather Shoes",
    price: 1000,
    image: require("../assets/shoes.jpg"),
  },
  {
    id: 5,
    title: "Camera",
    price: 10000,
    image: require("../assets/camera.jpg"),
  },
  {
    id: 6,
    title: "Jeans",
    price: 2000,
    image: require("../assets/jeans.jpg"),
  },
  {
    id: 7,
    title: "Car",
    price: 100000,
    image: require("../assets/car.jpg"),
  },
];


function ListingsScreen({ navigation }) {


  return (
    <Screen style={styles.screen}>
      <ActivityIndicator animating={true}/>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"Rs." + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
