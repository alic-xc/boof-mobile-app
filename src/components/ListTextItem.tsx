import { View, Text } from "react-native";
import tw from "twrnc";
import AppText from "./AppText";

interface ListTextItemProps {
  primary: string;
  secondary: string;
}

export const ListTextItem = (props: ListTextItemProps) => {
  return (
    <View style={tw`mb-4`}>
      <AppText style={tw`text-lg font-bold`}>{props.primary}</AppText>
      <AppText style={tw`text-sm mt-0`}>{props.secondary}</AppText>
    </View>
  );
};
