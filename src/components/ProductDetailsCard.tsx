import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { CurrencyFormatter } from "../utils/helpers";

interface ProductDetailsCardProps {
  isGrid: boolean;
  name: string;
  costPrice: number;
  sellingPrice: number;
  quantity: number;
  image: string;
}

const ProductDetailsCard = (props: ProductDetailsCardProps) => {
  return (
    <View
      style={tw`w-full flex flex-row justify-start gap-3 bg-white p-2 rounded-md`}
    >
      <Image source={{ uri: props.image }} style={tw`w-14 h-14 rounded-md`} />
      <View style={tw`flex flex-col grow gap-1`}>
        <Text style={tw`font-bold text-lg`}>{props.name}</Text>
        <View
          style={tw`flex flex-1 grow flex-row justify-between items-center`}
        >
          <View style={tw`grow`}>
            <View style={tw`flex flex-row justify-between gap-3`}>
              <Text style={tw`text-gray-500 text-lg`}>Selling Price</Text>
              <Text style={tw`text-black font-bold text-lg`}>
                {CurrencyFormatter(props.sellingPrice)}
              </Text>
            </View>
            <View style={tw`flex flex-row justify-between gap-3`}>
              <Text style={tw`text-gray-500`}>Cost Price</Text>
              <Text style={tw`text-black font-bold`}>
                {CurrencyFormatter(props.costPrice)}
              </Text>
            </View>
          </View>
          <View style={tw`w-25 flex flex-col items-center `}>
            <Text style={tw`text-black font-bold text-center`}>
              {props.quantity < 0 ? "Out Of Stock" : "In Stock"}
            </Text>
            <Text style={tw`text-black font-bold text-lg`}>
              {props.quantity}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsCard;
