import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import LoginForm from "../../forms/LoginForm";

const Login = () => {
  return (
    <SafeAreaView style={tw`flex flex-1 p-3`}>
      <View style={tw`flex flex-col gap-1 pt-2 flex-1  `}>
        <Text style={tw`text-3xl mt-5`}>Welcome Back</Text>
        <Text style={tw`text-lg`}>Kindly provide your details below.</Text>

        <LoginForm />
      </View>
    </SafeAreaView>
  );
};

export default Login;
