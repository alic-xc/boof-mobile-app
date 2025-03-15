import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { ListItemProps } from "../types/dashboard";

const ListItemWidget = (props: ListItemProps) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={tw.style(
        `flex  flex-row gap-4 px-3 py-2 rounded-md items-center `,
        props.containerStyle
      )}
    >
      <View
        style={tw`p-0.5 w-12 h-12 flex flex-row justify-center items-center rounded-full  bg-[#d1d1d1]`}
      >
        {props.startIcon}
      </View>

      <View style={tw`flex flex-row flex-1 items-center justify-between`}>
        <View>
          <Text style={tw`text-xl font-bold`}>{props.title}</Text>
          <Text style={tw`font-semibold mt-1`}>{props.description}</Text>
        </View>
        <Text style={tw`text-xl font-bold`}>{props.subTitle}</Text>
      </View>
    </Pressable>
  );
};

export default ListItemWidget;
