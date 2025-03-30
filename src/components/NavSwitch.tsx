import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import AppText from "./AppText";

interface NavSwitchProps {
  options: string[];
  default: string;
  onChange: (text: string) => void;
}

const NavSwitch = (props: NavSwitchProps) => {
  const [selectedOption, setSelectedOption] = useState<string>(props.default);

  const activeHandler = (data: string) => {
    props.onChange(data);
    setSelectedOption(data);
  };

  return (
    <View style={tw`flex-row justify-center items-center`}>
      <View style={tw`flex-row justify-center bg-gray-200 py-1 rounded-lg`}>
        {props.options.map((option, index) => (
          <Pressable
            key={index}
            onPress={() => activeHandler(option)}
            style={[
              tw`px-4 py-2 w-[47%] rounded-lg mx-1`,
              selectedOption === option ? tw`bg-white` : tw``,
            ]}
          >
            <AppText style={[tw`text-center text-lg font-semibold text-black`]}>
              {option}
            </AppText>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default NavSwitch;
