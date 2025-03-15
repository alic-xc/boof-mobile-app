import { View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import React from "react";
import { Formik } from "formik";
import { UserSchema } from "../schema/Auth";
import tw from "twrnc";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const ClientForm = () => {
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
            <View className="flex flex-column gap-4 mb-5">
              <TextInput
                title="Full Name"
                name="invoice"
                placeholder="Enter Client's Full name"
                style="border-0 bg-gray-200"
                containerStyle="h-[50px] "
              />
              <TextInput
                title="Email Address"
                name="email"
                placeholder="Enter Client's Email Address"
                style="border-0 bg-gray-200"
                containerStyle="h-[50px]"
              />
              <TextInput
                title="Phone Number"
                name="phone"
                placeholder="Enter Client's Phone Number"
                style="border-0 bg-gray-200"
                containerStyle="h-[50px]"
              />
              <TextInput
                title="Address"
                name="address"
                placeholder="Enter Client's Address"
                style="border-0 bg-gray-200"
                containerStyle="h-[50px]"
              />
              <TextInput
                title="City"
                name="city"
                placeholder="Enter City"
                style="border-0 bg-gray-200"
                containerStyle="h-[50px]"
              />
              <TextInput
                title="Postal Code"
                name="postalCode"
                placeholder="Enter Postal Code"
                style="border-0 bg-gray-200"
                containerStyle="h-[50px]"
              />
              <TextInput
                title="Country"
                name="country"
                placeholder="Enter Country"
                style="border-0 bg-gray-200"
                containerStyle="h-[50px]"
              />
            </View>
            <Button onPress={() => {}}>Continue</Button>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default ClientForm;
