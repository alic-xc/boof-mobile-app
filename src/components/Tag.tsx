import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { CheckIcon } from "../icons";
import AppText from "./AppText";

interface ITagButton {
  onPress?: () => void;
  icon?: React.ReactNode;
  title?: string | React.ReactNode;
  style?: string;
  isSelect?: boolean;
}

const Tag = (props: ITagButton) => {
  return (
    <Pressable
      style={tw.style(
        `flex flex-row bg-white justify-between items-center gap-2 rounded-[16px] pr-2`,
        !props.isSelect ? "" : ""
      )}
      onPress={() => props.onPress && props.onPress()}
    >
      {props.isSelect ? (
        <CheckIcon color="#559ff3" width={30} height={30} />
      ) : (
        <View
          style={tw.style(
            `w-8 h-8 flex flex-row justify-center items-center  rounded-full bg-[#559ff3]`,
            props.style
          )}
        >
          {props.icon}
        </View>
      )}

      <AppText style={tw`font-bold`}> {props.title}</AppText>
    </Pressable>
  );
};

export default Tag;
