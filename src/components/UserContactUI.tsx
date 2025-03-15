import { View, Text, Pressable } from "react-native";
import React from "react";
import { IClient } from "../types/clients";
import tw from "twrnc";
import { Avatar } from "@kolking/react-native-avatar";

const UserContactUI = (props: IClient) => {
  return (
    <Pressable>
      <View style={tw`rounded-sm px-4 mb-2 bg-gray-100 flex flex-row gap-3`}>
        <Avatar colorize={true} name={props.name} size={40} />
        <View style={tw`py-1 rounded-md`}>
          <Text style={tw`text-lg`}>{props.name}</Text>
          <Text style={tw`text-lg`}>{props.phone}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default UserContactUI;
