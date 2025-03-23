import { View, Text, ScrollView, Linking } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootStackParamList } from "../types/navigation-types";
import { ListItemProps } from "../types/dashboard";
import ListItem from "../components/ListItem";
import { LeftIcon } from "../icons";

import { AppEntity } from "../state/app-entity";
import { handleLogout } from "../utils/superbase";

const rightIcon = <LeftIcon width={24} height={24} color="black" />;

const More = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { subscription } = AppEntity.use();

  const data: (ListItemProps | any)[] = [
    {
      icon: rightIcon,
      component: <Text style={tw`text-lg font-bold`}>Profile</Text>,
      onPress: () => {
        navigation.navigate("Profile");
      },
    },
    {
      icon: rightIcon,
      component: <Text style={tw`text-lg font-bold`}>About Us</Text>,
      onPress: () => {
        navigation.navigate("About");
      },
    },

    {
      icon: rightIcon,
      component: <Text style={tw`text-lg font-bold`}>Term of Use </Text>,
      onPress: () => {
        Linking.openURL("https://boof.alicsystems.com/#/terms");
      },
    },

    {
      icon: rightIcon,
      component: <Text style={tw`text-lg font-bold`}>Privacy & Policy</Text>,
      onPress: () => {
        Linking.openURL("https://boof.alicsystems.com/#/privacy");
      },
    },
    {
      icon: rightIcon,
      component: <Text style={tw`text-lg font-bold`}>Sign Out</Text>,
      onPress: () => {
        handleLogout().then((res) => {
          if (res === "completed") {
            navigation.navigate("Login");
          }
        });
      },
    },
  ];

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={tw`flex flex-1 flex-col gap-3 pt-5 px-4 `}>
        <View>
          <Text style={tw`text-2xl font-bold`}>App Settings</Text>
          <Text style={tw`text-lg`}>Learn more about our app and services</Text>
        </View>

        <ScrollView
          contentContainerStyle={tw`flex flex-col gap-2 min-h-60 mb-10 mt-2`}
        >
          {data.filter(Boolean).map((item, index) => (
            <ListItem
              key={index}
              containerStyle={item.containerStyle}
              component={item.component}
              icon={item.icon}
              onPress={item.onPress}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default More;
