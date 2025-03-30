import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import AddIcon from "../icons/AddIcon";
import AppText from "./AppText";

interface IIconButton {
  onPress?: () => void;
  icon?: React.ReactNode;
  title?: string | React.ReactNode;
  style?: string;
}

const IconButton = (props: IIconButton) => {
  return (
    <Pressable style={tw`flex flex-col justify-center items-center`}>
      <View
        style={tw.style(
          `w-10 h-10  flex flex-row justify-center items-center  rounded-full bg-[#559ff3]`,
          props.style
        )}
      >
        {props.icon ? (
          props.icon
        ) : (
          <AddIcon width={30} height={30} color={"white"} />
        )}
      </View>
      <AppText style={tw`font-semibold`}> {props.title}</AppText>
    </Pressable>
  );
};

export default IconButton;
