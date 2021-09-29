import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";

import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/CoffeeTable.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Coffee Table for sale</AppText>
        <AppText style={styles.price}>Rs.5000</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/person1.png")}
            title="John Doe"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
