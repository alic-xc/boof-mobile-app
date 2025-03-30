import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
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

const ResetPassword = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Formik
      initialValues={{
        email: "",
        phone: "",
        password: "",
      }}
      validationSchema={UserSchema}
      onSubmit={(values) => {
        const data = {
          email: values.email,
          first_name: values.firstName,
          last_name: values.lastName,
          password: values.password,
          user_referral_code: "user",
          device: "mobile",
        };
      }}
    >
      {({
        handleChange,
        setFieldTouched,
        handleBlur,
        setFieldValue,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={tw` flex flex-1 flex-column`}
        >
          <ScrollView>
            <View className="flex flex-column gap-3 mb-5">
              <TextInput name="password" placeholder="Enter Password" />
              <TextInput name="password" placeholder="Enter Password" />
            </View>
            <Button onPress={() => {}}>Change Password</Button>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default ResetPassword;
