// PrivacyPolicyScreen.tsx
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import Header from "../components/Header";

export const PrivacyPolicyScreen = () => {
  return (
    <SafeAreaView style={tw`flex flex-1`}>
      <Header title="Back" />
      <ScrollView style={tw`flex-1 bg-white p-4`}>
        <Text style={tw`text-2xl font-bold mb-4`}>Privacy Policy</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
