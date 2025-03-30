import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import { UserSchema } from "../schema/Auth";
import tw from "twrnc";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation-types";
import { AuthEntity } from "../state/auth-entity";
import PhoneInput from "../components/PhoneInput";
import { AppleIcon } from "../icons";
import { signUp } from "../utils/superbase";
import { AppEntity } from "../state/app-entity";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";

const RegistrationForm = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        country: "",
        password: "",
      }}
      validationSchema={UserSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        try {
          const data = {
            fullName: values.fullName,
            email: values.email,
            country: values.country,
            password: values.password,
          };
          const response = signUp(data);
          response
            .then((res) => {
              if (res === "completed") {
                AppEntity.set((state) => {
                  return {
                    ...state,
                    email: values.email,
                    step: "otp",
                  };
                });
                navigation.navigate("OTP");
              }
            })
            .finally(() => {
              setSubmitting(false);
            });
        } catch (e) {
        } finally {
          () => {
            setSubmitting(false);
          };
        }
      }}
    >
      {({
        handleChange,
        setFieldTouched,
        handleBlur,
        setFieldValue,
        handleSubmit,
        isSubmitting,
        values,
        errors,
        touched,
      }) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={tw` flex flex-1 flex-column`}
        >
          <ScrollView>
            <View style={tw`flex flex-column gap-3 my-3`}>
              <TextInput
                name="fullName"
                title="Full Name"
                placeholder="Enter Full Name"
                style="border-0 bg-gray-200 "
                containerStyle="h-[45px]"
              />
              <TextInput
                name="email"
                title="Emaill Address"
                placeholder="Enter Email Address"
                style="border-0 bg-gray-200"
                containerStyle="h-[45px]"
              />
              <View style={tw`h-[45px]`}>
                <AppText style={tw`text-gray-700 mb-1`}>Country</AppText>
                <CountryPicker
                  withFlag
                  withFilter
                  withCountryNameButton
                  withEmoji
                  withFlagButton
                  countryCode={(values.country as CountryCode) || "NG"} // Default to Nigeria
                  onSelect={(country: Country) => {
                    setFieldValue("country", country.cca2); // Set country code (e.g., "NG")
                    setFieldTouched("country", true);
                  }}
                  containerButtonStyle={tw`bg-gray-200 h-10 rounded-md px-3 flex-row items-center`}
                  theme={{
                    backgroundColor: "#e5e7eb", // Matches bg-gray-200
                    onBackgroundTextColor: "#000",
                    primaryColor: "#000",
                  }}
                />
                {touched.country && errors.country && (
                  <AppText style={tw`text-red-500 text-sm`}>
                    {errors.country}
                  </AppText>
                )}
              </View>
              <TextInput
                name="password"
                title="Password"
                placeholder="Password"
                style="border-0 bg-gray-200"
                containerStyle="h-[45px]"
                isPassword={true}
              />
            </View>
            <Button
              style="py-3 mt-2 flex-1 rounded-md"
              onPress={() => {
                handleSubmit();
              }}
              isDisabled={isSubmitting}
            >
              <View
                style={tw`flex flex-row items-center gap-2 flex-1 justify-center`}
              >
                {isSubmitting && (
                  <ActivityIndicator size="small" color="#fff" />
                )}

                <AppText style={tw`text-white text-lg`}>Continue</AppText>
              </View>
            </Button>
            {/* <View style={tw`flex flex-col items-center flex-1 gap-2 mt-5`}>
              <AppText>Or continue with your social accounts</AppText>
              <Button
                style="p-2 py-2 mt-2 flex-1 bg-white  rounded-md"
                textStyle="text-black "
                onPress={() => {}}
              >
                <View style={tw`flex flex-row items-center justify-center`}>
                  <AppleIcon color="black" width={24} height={24} />
                  <AppText style={tw``}> Continue with Apple</AppText>
                </View>
              </Button>
            </View> */}

            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("Login");
              }}
              style={tw`text-center`}
            >
              <AppText style={tw`text-center mt-5 text-lg underline`}>
                Sign in with your account
              </AppText>
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default RegistrationForm;
