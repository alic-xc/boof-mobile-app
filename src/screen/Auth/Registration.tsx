import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import tw from "twrnc";
import RegistrationForm from "../../forms/RegistrationForm";
import Button from "../../components/Button";

const Registration = () => {
  return (
    <SafeAreaView style={tw`flex flex-1 p-5`}>
      <View style={tw`flex flex-col gap-1 pt-2 flex-1  `}>
        <Text style={tw`text-3xl mt-5`}>Create an account with Us</Text>
        <Text style={tw`text-lg`}>Kindly provide your details below.</Text>
        
        <RegistrationForm />
      </View>
    </SafeAreaView>
  );
};

export default Registration;
