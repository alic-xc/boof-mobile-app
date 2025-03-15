import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderSearchBar from "./HeaderSearchBar";
import tw from "twrnc";
import { IClient } from "../types/clients";
import UserContactUI from "./UserContactUI";
import Button from "./Button";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import EmptyContact from "../icons/EmptyContact";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation-types";
import ProductIcon from "../icons/ProductIcon";

const ProductUI = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const data: IClient[] = [
    {
      name: "lamm Al45ade",
      phone: "+234893949444",
      profilPic: "",
    },
    {
      name: "Sam A43lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "Sm A32lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "Sam A43lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "Sm A32lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "Sam A43lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "Sm A32lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "Sam A43lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "Sm A32lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "Sam A43lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "Sm A32lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "Sam A43lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "Sm A32lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "Sam A43lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "Sm A32lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "Sam A43lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "Sm A32lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "Sam A43lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "Sm A32lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "amm A3lade",
      phone: "+23480939444",
      profilPic: "",
    },
    {
      name: "Salamm2 Ala3de",
      phone: "+23493949444",
      profilPic: "",
    },
    {
      name: "Sam A43lade",
      phone: "+23480949444",
      profilPic: "",
    },
    {
      name: "Sm A32lade",
      phone: "+23480949444",
      profilPic: "",
    },
  ];
  const [clients, setClients] = React.useState<IClient[] | []>([]);

  const handleClientSearch = (search: string) => {
    setClients(
      data.filter(
        (item) => item.name.includes(search) || item.phone.includes(search)
      )
    );
  };

  return (
    <View style={tw`flex flex-1`}>
      <HeaderSearchBar
        placeholder="Search items..."
        onSearchChange={handleClientSearch}
      />
      <View style={tw`flex flex-1 grow mt-2`}>
        {clients.length < 1 && (
          <View style={tw`grow`}>
            <View style={tw`flex flex-1 grow justify-center items-center`}>
              <ProductIcon width={46} height={46} color="black" />
              <Text style={tw`text-lg font-bold`}>
                No Item/Services Added Yet
              </Text>
            </View>
            <View style={tw`flex bg-white pb-1 pt-2`}>
              <Button
                onPress={() =>
                  navigation.navigate("Product", {
                    screen: "Create",
                  })
                }
                style={"mx-3 rounded-md"}
              >
                Add New Item
              </Button>
            </View>
          </View>
        )}
        <BottomSheetScrollView style={tw` `}>
          {clients.map((client) => (
            <UserContactUI {...client} />
          ))}
        </BottomSheetScrollView>
      </View>
      {clients.length > 1 && (
        <View style={tw`flex bg-white pb-1 pt-2`}>
          <Button style={"mx-3 rounded-md"}>Continue</Button>
        </View>
      )}
    </View>
  );
};

export default ProductUI;
