import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ScrollView,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  BarIcon,
  CategoryIcon,
  ClientIcon,
  ExpensesIcon,
  IncomeIcon,
  InvoiceIcon,
  PosIcon,
  ProfileSettingIcon,
  PurchaseOrderIcon,
  ReturnIcon,
  ScanIcon,
  StoreIcon,
  TaxIcon,
  TruckIcon,
  UserIcon,
} from "../icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation-types";
import { ListItemProps } from "../types/dashboard";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import ListItem from "./ListItem";
import tw from "twrnc";
import ProductIcon from "../icons/ProductIcon";

const rightIcon = <Entypo name="chevron-right" size={16} color="black" />;

const CustomDrawer = (props) => {
  const navigation = props.navigation;
  const data = [
    {
      title: "Sales",
      data: [
        {
          icon: rightIcon,
          startIcon: <ScanIcon width={18} height={18} color={"black"} />,
          title: "POS",
          onPress: () => {},
        },
        // {
        //   icon: rightIcon,
        //   startIcon: <InvoiceIcon width={18} height={18} color={"black"} />,
        //   title: "Invoices",
        //   onPress: () => {},
        // },
        // {
        //   icon: rightIcon,
        //   startIcon: <CalculatorIcon width={18} height={18} color={"black"} />,
        //   title: "Estimates",
        //   onPress: () => {},
        // },
      ],
    },
    {
      title: "Products & Inventory",
      data: [
        {
          icon: rightIcon,
          startIcon: <ProductIcon width={18} height={18} color={"black"} />,
          title: "Manage Products",
          onPress: () => {
            navigation.navigate("products", "Dashboard");
          },
        },
        {
          icon: rightIcon,
          startIcon: <CategoryIcon width={18} height={18} color={"black"} />,
          title: "Category & Sub Category",
          onPress: () => {
            navigation.navigate("products", {
              screen: "Category",
            });
          },
        },
        {
          icon: rightIcon,
          startIcon: (
            <PurchaseOrderIcon width={18} height={18} color={"black"} />
          ),
          title: "Purchase Orders",
          onPress: () => {
            navigation.navigate("purchase-order", "Dashboard");
          },
        },
        {
          icon: rightIcon,
          startIcon: <ReturnIcon width={18} height={18} color={"black"} />,
          title: "Return Orders",
          onPress: () => {
            navigation.navigate("return-order", "Dashboard");
          },
        },
      ],
    },
    {
      title: "Expenses & Income",
      data: [
        {
          icon: rightIcon,
          startIcon: <ExpensesIcon width={18} height={18} color={"black"} />,
          title: "Expenses",
          onPress: () => {
            navigation.navigate("Expenses", "Dashboard");

          },
        },
        {
          icon: rightIcon,
          startIcon: <IncomeIcon width={18} height={18} color={"black"} />,
          title: "Income",
          onPress: () => {
            navigation.navigate("Income", "Dashboard");

          },
        },
      ],
    },
    {
      title: "Users Management",
      data: [
        {
          icon: rightIcon,
          startIcon: <UserIcon width={18} height={18} color={"black"} />,
          title: "Staff",
          onPress: () => {
            navigation.navigate("Staff", "Dashboard");

          },
        },
        {
          icon: rightIcon,
          startIcon: <ClientIcon width={18} height={18} color={"black"} />,
          title: "Customers",
          onPress: () => {
            navigation.navigate("Client", "Dashboard");

          },
        },
        {
          icon: rightIcon,
          startIcon: <TruckIcon width={18} height={18} color={"black"} />,
          title: "Suppliers",
          onPress: () => {
            navigation.navigate("Supplier", "Dashboard");

          },
        },
      ],
    },
    {
      title: "Store Settings",
      data: [
        {
          icon: rightIcon,
          startIcon: <StoreIcon width={18} height={18} color={"black"} />,
          title: "Store",
          onPress: () => {
            navigation.navigate("Business-section", "Dashboard");
          },
        },
        {
          icon: rightIcon,
          startIcon: <TaxIcon width={18} height={18} color={"black"} />,
          title: "Tax & Discount",
          onPress: () => {
            navigation.navigate("Tax & Discounts");
          },
        },
        {
          icon: rightIcon,
          startIcon: <BarIcon width={18} height={18} color={"black"} />,
          title: "Reports",
          onPress: () => {
            navigation.navigate("Tax & Discounts");
          },
        },
        {
          icon: rightIcon,
          startIcon: (
            <ProfileSettingIcon width={18} height={18} color={"black"} />
          ),
          title: "Profile & Settings",
          onPress: () => {
            navigation.navigate("Tax & Discounts");
          },
        },
      ],
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          marginTop: 50,
          zIndex: 10,
        }}
      >
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          {data.map((item) => (
            <View style={tw`mt-1 p-2`}>
              <Text style={tw`text-[12px] font-bold uppercase`}>
                {item.title}
              </Text>
              <View>
                {item.data.map((navItem) => (
                  <ListItem
                    icon={navItem.icon}
                    startIcon={navItem.startIcon}
                    title={navItem.title}
                    onPress={navItem.onPress}
                    textStyle="text-[16px] font-bold"
                    containerStyle="py-1 px-0 mx-2 mt-1"
                  />
                ))}
              </View>
            </View>
          ))}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userAvatar: {
    height: 67.5,
    width: 67.5,
    borderRadius: 40,
    marginBottom: 10,
    marginTop: 30,
  },
  switchTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 7,
    paddingVertical: 5,
  },
  preferences: {
    fontSize: 16,
    color: "#ccc",
    paddingTop: 10,
    fontWeight: "500",
    paddingLeft: 18,
  },
  switchText: {
    fontSize: 17,
    color: "",
    paddingTop: 10,
    fontWeight: "bold",
  },
});
