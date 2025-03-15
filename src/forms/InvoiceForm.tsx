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
import DateInput from "../components/DateInput";

const InvoiceForm = () => {
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
                title="Invoice Number"
                name="invoice"
                placeholder="Invoice Number"
                style="border-0 bg-gray-200"
                containerStyle="h-[50px] "
              />
              <DateInput
                title="Select Due Date"
                name="date"
                placeholder="Due Date"
                style="border-0 bg-gray-200"
                containerStyle="h-[50px]"
              />
            </View>
            <Button  onPress={() => {}}>Continue</Button>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default InvoiceForm;
