import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Info from "./Info";

type properties = {
  image: string;
  name: string;
  language: string;
  region: string;
  capital?: string[];
};

const Card = ({ image, name, language, region, capital }: properties) => {
  const styles = StyleSheet.create({
    card: {
      flexDirection: "row", 
      width: 400,
      height: 125,
      borderRadius: 10,
      backgroundColor: "#d3d3d3",
      margin: 10,
      alignItems: "center",
    },
    image: {
      width: 120,
      height: 80,
      margin: 10, 
      
    },
    textContainer: {
      flex: 1, 
      padding: 25, 
    },
  });

  return (
    <SafeAreaView style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.textContainer}>
        <Info label={"Nome"} description={name} />
        <Info label={"Capital"} description={capital?.length ? capital[0] : "--"} />
        <Info label={"Região"} description={region} />
        <Info label={"Língua"} description={language} />


      </View>
    </SafeAreaView>
  );
};

export default Card;
