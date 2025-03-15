import { Pressable, View, Text } from "react-native";
import tw from "twrnc";

interface IProductCartItem {
  name: string;
  qty: number;
  cost_price: number;
  total_amount: number;
  onPress?: () => void;
}

const ProductCartItem = (props: IProductCartItem) => {
  return (
    <Pressable onPress={props.onPress && props.onPress}>
      <View style={tw`flex flex-row justify-between items-center`}>
        <View style={tw`flex flex-col`}>
          <Text style={tw`text-lg`}>{props.name}</Text>
          <Text style={tw`text-lg font-bold`}>x {props.qty}</Text>
        </View>
        <View style={tw`flex flex-col items-center`}>
          <Text style={tw`font-bold`}>{props.cost_price}</Text>
          <Text style={tw`font-bold`}>{props.total_amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCartItem;
