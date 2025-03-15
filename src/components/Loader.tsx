import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

const Loader = () => {
  return (
    <View className="flex-1 flex-col justify-center items-center">
      <ActivityIndicator size="large" />
      <Text>Loading</Text>
    </View>
  );
};

export default Loader;
