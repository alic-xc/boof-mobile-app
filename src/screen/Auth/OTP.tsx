import {
  View,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import { Keyboard } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import tw from "twrnc";
import { OtpInput } from "react-native-otp-entry";
import Button from "../../components/Button";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation-types";
import { AppEntity } from "../../state/app-entity";
import { verifyOTP } from "../../utils/superbase";

const OTP = () => {
  const { step, email } = AppEntity.use();
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onSubmitHanlder = (otp: string) => {
    setLoading(true);
    if (step == "otp") {
      const response = verifyOTP(otp, email, step);
      response
        .then((res) => {
          if (res === "completed") {
            navigation.navigate("Dashboard");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      navigation.navigate("ResetPassword");
    }
  };

  return (
    <SafeAreaView style={tw`flex flex-1 p-3`}>
      <Header title="OTP" />
      <View style={tw`flex flex-col gap-3 pt-5 flex-1`}>
        <Text style={tw`text-2xl font-bold`}>OTP Verification</Text>
        <Text style={tw`text-lg`}>
          Kindly verify OTP sent to <Text style={tw`font-bold`}>{email}</Text>
        </Text>
        <View style={tw`flex flex-col justify-between flex-1 pb-10`}>
          <View>
            <OtpInput
              numberOfDigits={6}
              onTextChange={(text) => {
                // setOTP(text)
                if (text.length === 6) {
                  Keyboard.dismiss();
                  onSubmitHanlder(text);
                }
              }}
              theme={{
                pinCodeContainerStyle: tw`border-0 border-b-2 rounded-none`,
                pinCodeTextStyle: tw`text-2xl text-[#1e2424] border-[#559ff3] font-bold`,
                focusedPinCodeContainerStyle: tw`border-0 border-b-2 border-[#1e2424] rounded-none`,
              }}
            />
            <TouchableWithoutFeedback>
              <Text style={tw`mt-5`}>Resend OTP after 30 seconds</Text>
            </TouchableWithoutFeedback>
          </View>
          {/* <Button
            style="py-2 mt-2 rounded-md"
            isDisabled={OTP.length < 6}
            onPress={() => {
              
            }}
          >
            <View
              style={tw`flex flex-row items-center gap-2 flex-1 justify-center`}
            >
              {loading && <ActivityIndicator size="small" color="#fff" />}

              <Text style={tw`text-white text-lg`}>Continue</Text>
            </View>
          </Button> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTP;
