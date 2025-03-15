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
import { Notifier, Easing, NotifierComponents } from "react-native-notifier";
import { signUp } from "../utils/superbase";
import { AppEntity } from "../state/app-entity";

const RegistrationForm = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        business: "",
        password: "",
      }}
      validationSchema={UserSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        try {
          const data = {
            fullName: values.fullName,
            email: values.email,
            business: values.business,
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

              <TextInput
                name="business"
                title="Business Name"
                placeholder="Enter Business Name"
                style="border-0 bg-gray-200"
                containerStyle="h-[45px]"
              />
              <TextInput
                name="password"
                title="Password"
                placeholder="Password"
                style="border-0 bg-gray-200"
                containerStyle="h-[45px]"
              />
            </View>
            <View style={tw`flex flex-row items-center flex-1 gap-2 `}>
              <Button
                style="py-2 mt-2 flex-1 rounded-md"
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

                  <Text style={tw`text-white text-lg`}>Continue</Text>
                </View>
              </Button>
              <Text style={tw`font-bold`}>OR</Text>
              <Button
                style="p-2 py-2 mt-2 flex-1 bg-white  rounded-md"
                textStyle="text-black "
                onPress={() => {}}
              >
                <View style={tw`flex flex-row items-center justify-center`}>
                  <AppleIcon color="black" width={24} height={24} />
                  <Text style={tw``}> Continue with Apple</Text>
                </View>
              </Button>
            </View>

            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("Login");
              }}
              style={tw`text-center`}
            >
              <Text style={tw`text-center mt-5 text-lg underline`}>
                Sign in with your account
              </Text>
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default RegistrationForm;
