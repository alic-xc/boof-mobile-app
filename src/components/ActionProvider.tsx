import { View, Text, Alert } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import { ListTextItem } from "../components/ListTextItem";
import tw from "twrnc";
import { CancelIcon, EditIcon, EyeIcon } from "../icons";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation-types";
import AppText from "./AppText";
interface IActionProviderProps {
  navigation?: NavigationProp<RootStackParamList>;
  handleDelete?: () => void;
  onEdit?: () => void;
  onViewDetails?: () => void;
}

const ActionProvider = (props: IActionProviderProps) => {
  return (
    <View style={tw`flex flex-col gap-2 flex-1`}>
      <AppText style={tw`text-2xl font-semibold mb-3`}>Quick Actions</AppText>
      <ListItem
        containerStyle="bg-[#f1f1f1]"
        title="View Details"
        icon={<EyeIcon width={24} height={24} color="black" />}
        onPress={() => {
          props.onViewDetails && props.onViewDetails();
        }}
      />
      <ListItem
        containerStyle="bg-[#f1f1f1]"
        title="Edit"
        icon={<EditIcon width={24} height={24} color="black" />}
        onPress={() => {
          props.onEdit && props.onEdit();
          props.navigation && props.navigation.navigate("Create");
        }}
      />
      <ListItem
        containerStyle="bg-[#f1f1f1]"
        title="Delete"
        icon={<CancelIcon width={24} height={24} color="red" />}
        onPress={() => {
          Alert.alert("Delete", "This action is irreversible. Continue?", [
            { text: "Cancel", style: "cancel" },
            {
              text: "Proceed",
              onPress: props?.handleDelete,
            },
          ]);
        }}
      />
    </View>
  );
};

export default ActionProvider;
