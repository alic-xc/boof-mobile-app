import { View, Text } from "react-native";
import tw from "twrnc";

interface ListTextItemProps {
  primary: string;
  secondary: string;
}

export const ListTextItem = (props: ListTextItemProps) => {
  return (
    <View style={tw`mb-4`}>
      <Text style={tw`text-lg font-bold`}>{props.primary}</Text>
      <Text style={tw`text-sm mt-0`}>{props.secondary}</Text>
    </View>
  );
};
