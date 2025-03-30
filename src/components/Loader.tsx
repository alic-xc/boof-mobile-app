import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import AppText from "./AppText";

const Loader = () => {
  return (
    <View className="flex-1 flex-col justify-center items-center">
      <ActivityIndicator size="large" />
      <AppText>Loading</AppText>
    </View>
  );
};

export default Loader;
