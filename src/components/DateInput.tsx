import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInputProps,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFormikContext } from "formik";
import tw from "twrnc";

interface FormikDateInputProps extends TextInputProps {
  name: string;
  title?: string;
  placeholder: string;
  style?: string;
  containerStyle?: string;
  textStyle?: string;
}

const DateInput: React.FC<FormikDateInputProps> = ({
  name,
  title,
  placeholder,
  style,
  containerStyle,
  textStyle,
  ...props
}) => {
  const { setFieldValue, handleBlur, values, errors, touched } =
    useFormikContext<any>();
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) {
      setFieldValue(name, selectedDate.toISOString().split("T")[0]); // Format as "YYYY-MM-DD"
    }
  };

  const formatDate = (date: Date) => date.toISOString().split("T")[0]; // "YYYY-MM-DD"

  return (
    <View style={tw.style(containerStyle)}>
      {title && (
        <View style={tw.style("")}>
          <Text style={tw.style("mb-1 text-lg", textStyle)}>{title}</Text>
        </View>
      )}
      <View
        style={tw.style(
          `flex flex-col h-15 gap-2 bg-white rounded-md`,
          containerStyle
        )}
      >
        <TouchableOpacity
          onPress={() => setShowPicker(true)}
          style={tw.style(
            `rounded-md flex-1 border-2 border-[#1e2424] px-3 text-lg font-light bg-white justify-center`,
            style
          )}
        >
          <Text style={tw`text-gray-500 text-lg font-semibold`}>
            {values[name] instanceof Date
              ? formatDate(values[name])
              : values[name] || placeholder}
          </Text>
        </TouchableOpacity>

        {showPicker && (
          <DateTimePicker
            value={values[name] ? new Date(values[name]) : new Date()}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={onChange}
          />
        )}

        {errors[name] && touched[name] && (
          <Text style={tw`text-red-500`}>{errors[name]}</Text>
        )}
      </View>
    </View>
  );
};

export default DateInput;
