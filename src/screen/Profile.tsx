import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import Header from "../components/Header";
import { UserIcon } from "../icons";
import ListItem from "../components/ListItem";
import { ListItemProps } from "../types/dashboard";
import { AppEntity } from "../state/app-entity";
import { getSubscriptionStatus, subscriber } from "../utils/paywall";
import AppText from "../components/AppText";
import colors from "../constant/Color";

const Profile = () => {
  const { session } = AppEntity.get();
  const [subscription, setSubscription] = React.useState<any>(null);
  React.useEffect(() => {
    getSubscriptionStatus().then((response) => {
      const sub = response;
      setSubscription(sub);
    });
  }, []);

  const data: (ListItemProps | any)[] = [
    {
      icon: "",
      component: (
        <View style={tw``}>
          <AppText style={tw`text-sm font-light`}>First Name</AppText>
          <AppText style={tw`text-lg `}>
            {String(session?.user.user_metadata.full_name).split(" ")?.[0]}
          </AppText>
        </View>
      ),
      onPress: () => {},
    },
    {
      icon: "",
      component: (
        <View style={tw``}>
          <AppText style={tw`text-sm font-light`}>Last Name</AppText>
          <AppText style={tw`text-lg `}>
            {String(session?.user.user_metadata.full_name).split(" ")?.[1] ||
              "-"}
          </AppText>
        </View>
      ),
      onPress: () => {},
    },
    {
      icon: "",
      component: (
        <View style={tw``}>
          <AppText style={tw`text-sm font-light`}>Email</AppText>
          <AppText style={tw`text-lg `}>
            {session?.user.user_metadata.email}
          </AppText>
        </View>
      ),
      onPress: () => {},
    },
    {
      icon: "",
      component: (
        <View style={tw``}>
          <AppText style={tw`text-sm font-light`}>
            Total Credit ({subscription?.type})
          </AppText>
          <AppText style={tw`text-lg `}>
            ({subscription?.credit_remaining}){" "}
          </AppText>
          {(subscription?.credit_remaining < 5 ||
            subscription?.type == "none") && (
            <AppText style={tw`text-sm text-[${colors.primary}]`}>
              Click to subscribe
            </AppText>
          )}
        </View>
      ),
      onPress: () => {
        subscription?.credit_remaining < 5 && subscriber();
      },
    },
  ];
  return (
    <SafeAreaView style={tw`flex-1`}>
      <Header title="Profile Information" />
      <View style={tw`flex flex-col items-center my-5 gap-5 px-5`}>
        <UserIcon width={100} height={100} color="#1e2424" />
        <View style={tw`w-full rounded-md p-2 bg-white`}>
          {data.filter(Boolean).map((item, index) => (
            <ListItem
              key={index}
              containerStyle={"py-3 border-b border-[#f1f1f1]"}
              component={item.component}
              icon={item.icon}
              onPress={item.onPress}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
