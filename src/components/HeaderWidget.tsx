import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import Widget from "./Widget";
import {
  ActiveStaffIcon,
  ApproveOrderIcon,
  ClientIcon,
  DisbursementIcon,
  ExpensesIcon,
  MenuIcon,
  NotificationIcon,
  PaymentIcon,
  PendingOrderIcon,
  StoreIcon,
  TagIcon,
  TruckIcon,
  UserIcon,
} from "../icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation-types";
import { AppEntity } from "../state/app-entity";

interface IDashboardAnalytics {
  isDisabledSearch?: boolean;
  isDisabledFilter?: boolean;
  title?: string;
  goBack?: () => void;
}

const HeaderWidget = ({ title, goBack }: IDashboardAnalytics) => {
  const { session } = AppEntity.get();

  return (
    <View style={tw`bg-white  pb-2 flex flex-col gap-5`}>
      <View style={tw`flex flex-row justify-between items-center mt-5 `}>
        <View style={tw`flex flex-row gap-2 justify-start items-center`}>
          <UserIcon width={50} height={50} color="#1e2424" />
          <View style={tw`flex flex-row gap-3 justify-start items-center`}>
            <Text style={tw`text-lg  text-[#1e2424] font-bold`}>
              {!title ? `Hi, ${session?.user.user_metadata.full_name}` : title}
            </Text>
          </View>
        </View>
        {/* <NotificationIcon width={25} height={25} color="#1e2424" /> */}
      </View>
    </View>
  );
};

export default HeaderWidget;
