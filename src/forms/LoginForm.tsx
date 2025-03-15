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
import { LoginSchema, UserSchema } from "../schema/Auth";
import tw from "twrnc";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation-types";
import { AuthEntity } from "../state/auth-entity";
import { AppleIcon } from "../icons";
import { handleLogin } from "../utils/superbase";

const LoginForm = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        const data = {
          email: values.email,
          password: values.password,
        };
        console.log(data);
        const response = handleLogin(values.email, values.password);
        response
          .then((res) => {
            if (res === "completed") {
              navigation.navigate("Dashboard");
            }
          })
          .finally(() => {
            setSubmitting(false);
          });
      }}
    >
      {({
        handleChange,
        setFieldTouched,
        handleBlur,
        setFieldValue,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
      }) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={tw` flex flex-1 flex-column mt-5`}
        >
          <ScrollView>
            <View style={tw`flex flex-column gap-2 mb-5`}>
              <TextInput
                name="email"
                title="Emaill Address"
                placeholder="Enter Email Address"
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
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate("ResetPasswordRequest");
                }}
              >
                <Text style={tw` text-lg underline`}>Forgot Password ?</Text>
              </TouchableWithoutFeedback>
            </View>
            <Button
              style="py-2  flex-1 rounded-md"
              onPress={() => {
                handleSubmit();
              }}
              isDisabled={isSubmitting}
            >
              <View
                style={tw`flex flex-row items-center px-5 gap-2 flex-1 justify-center`}
              >
                {isSubmitting && (
                  <ActivityIndicator size="small" color="#fff" />
                )}

                <Text style={tw`text-white text-lg`}>Continue</Text>
              </View>
            </Button>
            <View style={tw`flex flex-col items-center flex-1 gap-2 mt-5`}>
              <Text>Or continue with your social accounts</Text>
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
                navigation.navigate("Registration");
              }}
              style={tw`text-center`}
            >
              <Text style={tw`text-center mt-5 text-lg underline`}>
                Don't have an account? Sign Up
              </Text>
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default LoginForm;
