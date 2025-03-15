import React from "react";
import {
  View,
  Text,
  TextInput as RNTextInput,
  TextInputProps,
  KeyboardTypeOptions,
} from "react-native";
import { useFormikContext } from "formik";
import tw from "twrnc";

interface FormikTextInputProps extends TextInputProps {
  name: string;
  title?: string;
  placeholder: string;
  style?: string;
  containerStyle?: string;
  textStyle?: string;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  row?: number;
}

const TextInput: React.FC<FormikTextInputProps> = ({
  name,
  title,
  placeholder,
  style,
  containerStyle,
  textStyle,
  keyboardType = "email-address",
  row = 0,
  multiline = false,
  ...props
}) => {
  const { handleChange, handleBlur, values, errors, touched } =
    useFormikContext<any>();

  return (
    <View style={tw``}>
      {title && (
          <Text style={tw.style("mb-1 text-lg", textStyle)}>{title}</Text>
      )}
      <View
        style={tw.style(
          `flex flex-col h-15 gap-2 bg-white rounded-md `,
          containerStyle
        )}
      >
        <RNTextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
          underlineColorAndroid="transparent"
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          value={values[name]}
          style={tw.style(
            `rounded-md flex-1 border-2 border-[#1e2424] px-3 pb-2 text-lg font-light bg-white`,
            style
          )}
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          multiline={multiline}
          // numberOfLines={row}
          {...props}
        />
        {/* {errors[name] && touched[name] && (
        <Text style={tw`text-red-500`}>{errors[name]}</Text>
      )} */}
      </View>
    </View>
  );
};

export default TextInput;
