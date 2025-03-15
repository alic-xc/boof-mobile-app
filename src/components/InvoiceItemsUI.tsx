import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderSearchBar from "./HeaderSearchBar";
import tw from "twrnc";
import { IClient } from "../types/clients";
import UserContactUI from "./UserContactUI";
import Button from "./Button";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation-types";
import { SignatureIcon } from "../icons";
import ProductItem from "./ProductItem";

const InvoiceItemsUI = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const products = [
    { name: "Iphonne 12", price: "450,000", totalPrice: "900,000", qty: "2" },
    { name: "Cloth Jeanns", price: "15,000", totalPrice: "30,000", qty: "2" },
    { name: "Rice(50kg)", price: "89,000", totalPrice: "89,000", qty: "1" },
    { name: "Rice(50kg)", price: "89,000", totalPrice: "89,000", qty: "1" },
    { name: "Rice(50kg)", price: "89,000", totalPrice: "89,000", qty: "1" },
    { name: "Rice(50kg)", price: "89,000", totalPrice: "89,000", qty: "1" },
    { name: "Rice(50kg)", price: "89,000", totalPrice: "89,000", qty: "1" },
    { name: "Rice(50kg)", price: "89,000", totalPrice: "89,000", qty: "1" },
  ];

  return (
    <View style={tw`flex flex-1`}>
      <View style={tw`flex flex-1 grow mt-2`}>
        {products.length > 0 &&
          products
            .map((item) => <ProductItem />)
            .filter((item, index) => index < 5)}
      </View>
    </View>
  );
};

export default InvoiceItemsUI;
