import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

interface WidgetProps {
  title: React.ReactNode | string;
  icon?: React.ReactNode;
}

const Widget = (props: WidgetProps) => {
  return (
    <View
      style={tw`flex flex-row justify-start items-center gap-2 bg-[#f1f1f1] p-4 rounded-md`}
    >
      <View
        style={tw`w-8 h-8 flex flex-col justify-center items-center rounded-full bg-[#fff]`}
      >
        {props.icon}
      </View>
      <View style={tw``}>
        <Text style={tw`font-light text-left text-[17px] text-[#1e2424]`}>
          {props.title}
        </Text>
        
      </View>
    </View>
  );
};
export default Widget;
