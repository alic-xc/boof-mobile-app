import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "../icons";
import AppText from "./AppText";

interface HeaderProps {
  title: string | React.ReactNode;
  onPress?: () => void;
  icon?: React.ReactNode;
  other?: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  const navigate = useNavigation();
  return (
    <View style={tw` h-13 flex flex-row justify-between items-center`}>
      <View style={tw`flex flex-row gap-3`}>
        {!props.icon && (
          <Pressable
            onPress={() => {
              if (props.onPress) {
                props?.onPress();
              } else {
                navigate.goBack();
              }
            }}
          >
            <ArrowLeftIcon width={24} height={24} color={"black"} />
          </Pressable>
        )}

        <AppText style={tw`text-xl font-bold`}>{props.title}</AppText>
      </View>
      <View>{props.other}</View>
    </View>
  );
};

export default Header;
