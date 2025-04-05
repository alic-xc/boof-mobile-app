import { View, Text, ScrollView, Linking, Alert } from "react-native";
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
import AppText from "../components/AppText";
import { BASE_URL } from "../utils/constants";

const rightIcon = <LeftIcon width={24} height={24} color="black" />;

const More = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { session } = AppEntity.use(); // Assuming data[0] is the PDF URI
  const token = session?.access_token;

  const data: (ListItemProps | any)[] = [
    {
      icon: rightIcon,
      component: <AppText style={tw`text-lg font-bold`}>Profile</AppText>,
      onPress: () => {
        navigation.navigate("Profile");
      },
    },
    {
      icon: rightIcon,
      component: <AppText style={tw`text-lg font-bold`}>About Us</AppText>,
      onPress: () => {
        navigation.navigate("About");
      },
    },

    {
      icon: rightIcon,
      component: <AppText style={tw`text-lg font-bold`}>Term of Use </AppText>,
      onPress: () => {
        Linking.openURL("https://boof.alicsystems.com/#/terms");
      },
    },

    {
      icon: rightIcon,
      component: (
        <AppText style={tw`text-lg font-bold`}>Privacy & Policy</AppText>
      ),
      onPress: () => {
        Linking.openURL("https://boof.alicsystems.com/#/privacy");
      },
    },
    {
      icon: rightIcon,
      component: <AppText style={tw`text-lg font-bold`}>Sign Out</AppText>,
      onPress: () => {
        handleLogout().then((res) => {
          if (res === "completed") {
            navigation.navigate("Login");
          }
        });
      },
    },
    {
      icon: rightIcon,
      component: (
        <AppText style={tw`text-lg font-bold`}>Delete Account</AppText>
      ),
      onPress: () => {
        Alert.alert(
          `Account Deletion`,
          `Do you wish to proceed? Please Note: this account can not be recovered after deletion.`,
          [
            {
              style: "cancel",
              text: "Cancel",
            },
            {
              style: "default",
              text: "Proceed",
              onPress: async () => {
                if (!token) throw new Error("User not authenticated");

                const response = await fetch(
                  `${BASE_URL}/api/user/delete-account`,
                  {
                    method: "DELETE",
                    headers: {
                      Authorization: `Bearer ${token}`,
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({}),
                  }
                );

                const data = await response.json();
                if (!response.ok) {
                  throw new Error(data.error || "Unable to complete action.");
                }
                handleLogout().then((res) => {
                  if (res === "completed") {
                    navigation.navigate("Login");
                  }
                });
              },
            },
          ]
        );
      },
    },
  ];

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={tw`flex flex-1 flex-col gap-3 pt-5 px-4 `}>
        <View>
          <AppText style={tw`text-2xl font-bold`}>App Settings</AppText>
          <AppText style={tw`text-lg`}>
            Learn more about our app and services
          </AppText>
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
