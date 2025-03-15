import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

const ProductItem = (props) => {
  return (
    <View
      style={tw`flex flex-1 gap-2 grow flex-row justify-start items-center  border-b-[1px] border-dashed mb-2  px-1 pb-2`}
    >
      {/* <View style={tw`flex w-12 rounded-md bg-white border-2 h-full`}></View> */}
      <View style={tw`flex flex-1 flex-col`}>
        <View style={tw`flex flex-row justify-between items-center `}>
          <View style={tw`flex flex-col`}>
            <Text style={tw`text-lg font-bold`}>Oyablow</Text>
            <Text style={tw``}>$500 X 4</Text>
          </View>
          <Text style={tw`text-lg font-bold`}>34,000</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
