import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import colors from "../constant/Color";

interface ButtonProps {
  children?: string | React.ReactNode;
  onPress?: () => void;
  style?: string;
  textStyle?: string;
  isDisabled?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <Pressable
      onPress={props.onPress}
      disabled={props.isDisabled}
      style={tw.style(`bg-[${colors.primary}] rounded-10`, props.style)}
    >
      {props.children}
    </Pressable>
  );
};

export default Button;
