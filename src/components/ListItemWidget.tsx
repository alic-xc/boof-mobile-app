import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { ListItemProps } from "../types/dashboard";
import AppText from "./AppText";

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
          <AppText style={tw`text-xl font-bold`}>{props.title}</AppText>
          <AppText style={tw`font-semibold mt-1`}>{props.description}</AppText>
        </View>
        <AppText style={tw`text-xl font-bold`}>{props.subTitle}</AppText>
      </View>
    </Pressable>
  );
};

export default ListItemWidget;
