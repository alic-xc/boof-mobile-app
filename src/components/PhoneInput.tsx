import React, { useState } from "react";
import {
  View,
  Text,
  TextInput as RNTextInput,
  TouchableOpacity,
} from "react-native";
import { useFormikContext } from "formik";
import { CountryPicker } from "react-native-country-codes-picker";
import tw from "twrnc";
import { FormEntity } from "../state/app-entity";
import { getCountryCodes } from "../utils/country-codes";

interface CountryCode {
  code: string;
  dial_code: string;
  flag: string;
  name: string;
}

interface PhoneInputProps {
  name: string;
  countryName?: string;
  placeholder?: string;
  title?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  name,
  countryName = "countryCode", // Add countryName prop
  placeholder = "Enter phone number",
  title,
}) => {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormikContext<any>();
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState<CountryCode>({
    code: "+1",
    dial_code: "+1",
    flag: "🇺🇸",
    name: "United States",
  });

  const formatPhoneNumber = (number: string) => {
    const cleaned = number.replace(/[^\d]/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return cleaned;
  };

  const handlePhoneChange = (text: string) => {
    const cleanedText = text.replace(/[^\d]/g, "");
    handleChange(name)(cleanedText);
  };

  return (
    <View style={tw`w-full`}>
      {title && <Text style={tw`mb-2 text-lg font-semibold`}>{title}</Text>}
      <View style={tw`flex-row items-center rounded-md bg-gray-200`}>
        <TouchableOpacity onPress={() => setShow(true)} style={tw`p-3`}>
          <Text style={tw`text-xl`}>
            {countryCode.flag} {countryCode.dial_code}
          </Text>
        </TouchableOpacity>

        <RNTextInput
          placeholder={placeholder}
          style={tw`flex-1 p-3 text-lg`}
          keyboardType="phone-pad"
          value={formatPhoneNumber(values[name])}
          onChangeText={handlePhoneChange}
          onBlur={handleBlur(name)}
        />
      </View>

      {/* Formik Error Handling for Phone */}
      {errors[name] && touched[name] && (
        <Text style={tw`text-red-500 text-sm mt-1`}>{errors[name]}</Text>
      )}

      {/* Formik Error Handling for Country */}
      {errors[countryName] && touched[countryName] && (
        <Text style={tw`text-red-500 text-sm mt-1`}>{errors[countryName]}</Text>
      )}

      {/* Country Picker Modal */}
      <CountryPicker
        show={show}
        lang="en"
        pickerButtonOnPress={(item) => {
          setCountryCode(item);
          setFieldValue(countryName, item.name["en"]);
          setShow(false);
        }}
        style={{
          modal: {
            height: 500,
          },
        }}
      />
    </View>
  );
};

export default PhoneInput;
