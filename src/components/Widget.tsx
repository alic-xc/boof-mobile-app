import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

interface WidgetProps {
  title: string;
  total: string | number;
  icon?: React.ReactNode;
}

const Widget = (props: WidgetProps) => {
  return (
    <View style={tw`flex flex-row justify-start items-center gap-2`}>
      <View
        style={tw`w-8 h-8 flex flex-col justify-center items-center rounded-full bg-[#f1f1f1]`}
      >
        {props.icon}
      </View>
      <View style={tw``}>
        <Text style={tw`font-light text-left text-[17px] text-[#1e2424]`}>
          {props.title}
        </Text>
        <Text style={tw`text-xl font-bold text-left text-[#1e2424]`}>
          {props.total}
        </Text>
      </View>
    </View>
  );
};
export default Widget;
