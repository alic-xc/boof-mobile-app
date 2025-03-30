import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import tw from "twrnc";
import ResetPasswordRequestForm from "../../forms/ResetPasswordRequest";
import AppText from "../../components/AppText";

const ResetPasswordRequest = () => {
  return (
    <SafeAreaView style={tw`flex flex-1 p-3`}>
      <Header title="Reset Password" />
      <View style={tw`flex flex-col gap-3 pt-5 flex-1 `}>
        <AppText style={tw`text-2xl font-bold`}>
          Forggoten your password?
        </AppText>
        <AppText style={tw`text-lg`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit eveniet
          dicta
        </AppText>
        <ResetPasswordRequestForm />
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordRequest;
