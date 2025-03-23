import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import Header from "../components/Header";
import { UserIcon } from "../icons";
import ListItem from "../components/ListItem";
import { ListItemProps } from "../types/dashboard";
import { AppEntity } from "../state/app-entity";
import { getSubscriptionStatus } from "../utils/paywall";

const Profile = () => {
  const { session } = AppEntity.get();
  const [subscription, setSubscription] = React.useState<any>(null);
  React.useEffect(() => {
    getSubscriptionStatus().then((response) => {
      const sub = response;
      setSubscription(sub);
    });
  }, []);

  console.log(subscription);

  const data: (ListItemProps | any)[] = [
    {
      icon: "",
      component: (
        <View style={tw``}>
          <Text style={tw`text-sm font-light`}>First Name</Text>
          <Text style={tw`text-lg `}>
            {String(session?.user.user_metadata.full_name).split(" ")?.[0]}
          </Text>
        </View>
      ),
      onPress: () => {},
    },
    {
      icon: "",
      component: (
        <View style={tw``}>
          <Text style={tw`text-sm font-light`}>Last Name</Text>
          <Text style={tw`text-lg `}>
            {String(session?.user.user_metadata.full_name).split(" ")?.[1] ||
              "-"}
          </Text>
        </View>
      ),
      onPress: () => {},
    },
    {
      icon: "",
      component: (
        <View style={tw``}>
          <Text style={tw`text-sm font-light`}>Email</Text>
          <Text style={tw`text-lg `}>{session?.user.user_metadata.email}</Text>
        </View>
      ),
      onPress: () => {},
    },
    {
      icon: "",
      component: (
        <View style={tw``}>
          <Text style={tw`text-sm font-light`}>
            Total Credit ({subscription?.type})
          </Text>
          <Text style={tw`text-lg `}>({subscription?.credit_remaining})</Text>
        </View>
      ),
      onPress: () => {},
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
