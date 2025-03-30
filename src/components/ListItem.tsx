import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { ListItemProps } from "../types/dashboard";
import { CancelIcon, CheckIcon, ShieldWarningIcon } from "../icons";
import AppText from "./AppText";

const ListItem = (props: ListItemProps) => {
  if (props.uiSwitch) {
    return (
      <Pressable
        onPress={props.onPress}
        style={tw.style(
          `relative flex flex-col justify-center  items-center w-[48%] bg-[#fff] h-20 py-2 rounded-md`,
          props.containerStyle
        )}
      >
        <View
          style={tw`w-6 h-6 flex flex-row justify-center items-center rounded-full -top-02 -right-2 absolute bg-[#eee]`}
        >
          {!props.isCompleted ? (
            <ShieldWarningIcon width={18} height={18} color="orange" />
          ) : (
            <CheckIcon width={18} height={18} color="green" />
          )}
        </View>
        <View style={tw`p-0.5 rounded-md`}>{props.startIcon}</View>
        <AppText style={tw.style(`text-lg`, props.textStyle)}>
          {props.title}
        </AppText>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={props.onPress}
      style={tw.style(
        `flex  bg-white flex-row gap-2 px-3 py-4 rounded-md items-center `,
        props.containerStyle
      )}
    >
      <View style={tw`p-0.5 rounded-md`}>{props.startIcon}</View>

      <View style={tw`flex flex-row flex-1 items-center justify-between`}>
        <View>
          {props.component && props.component}
          {!props.component && (
            <AppText style={tw.style(`text-xl`, props.textStyle)}>
              {props.title}
            </AppText>
          )}
        </View>

        {props.icon}
      </View>
    </Pressable>
  );
};

export default ListItem;
