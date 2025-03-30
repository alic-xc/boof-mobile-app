import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { useFormikContext } from "formik";
import tw from "twrnc";
import BottomSheet from "./BottomSheet";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import colors from "../constant/Color";
import Button from "./Button";
import { CheckIcon } from "../icons";
import AppText from "./AppText";

interface Option {
  label: string | React.ReactNode;
  value: number | string;
}

interface CustomSelectProps {
  data: Option[];
  name: string;
  title: string;
  placeholder?: string;
  textStyle?: string;
  containerStyle?: string;
  onChange?: (value: string | number) => void;
  isPicker?: boolean;
  horizontal?: boolean;
  showsHorizontalScrollIndicator?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  data,
  name,
  title,
  placeholder = "Select an option",
  textStyle,
  containerStyle,
  onChange,
  isPicker = false,
  horizontal = false,
  showsHorizontalScrollIndicator = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const { errors, setFieldValue, touched, values } = useFormikContext<any>();

  const handleSelect = (item: Option) => {
    setFieldValue(name, item.value);
    setIsVisible(false);
    onChange && onChange(item.value);
  };
  const handlePickerSelect = (value: string | number) => {
    setFieldValue(name, value);
    onChange && onChange(value);
  };
  return (
    <View style={tw.style(` flex flex-col`, containerStyle)}>
      {title && (
        <View style={tw.style("text-[red]")}>
          <AppText style={tw.style("mb-1 text-lg", textStyle)}>{title}</AppText>
        </View>
      )}
      <TouchableOpacity
        style={tw`flex-1 flex-col rounded-md justify-center h-[50px] bg-gray-100 px-3 `}
        onPress={() => setIsVisible(true)}
      >
        <AppText style={tw`text-lg text-gray-800`}>
          {values[name]
            ? data.find((option) => option.value === values[name])?.label
            : placeholder}
        </AppText>
      </TouchableOpacity>

      {/* Error message */}
      {errors[name] && touched[name] && (
        <AppText style={tw`"text-red-500 text-sm mt-1`}>{errors[name]}</AppText>
      )}
      {!isPicker && (
        <BottomSheet
          height={"60%"}
          disableScroll={false}
          isActive={isVisible}
          closeModal={() => setIsVisible(false)}
        >
          <View style={tw`flex flex-1 p-5`}>
            <AppText style={tw`text-xl font-bold mb-5 capitalize`}>
              Select {title}
            </AppText>

            <ScrollView
              horizontal={horizontal}
              showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
            >
              {data &&
                data.map((item) => {
                  if (horizontal) {
                    return (
                      <TouchableOpacity
                        style={tw`h-30 w-30 mb-5 bg-[red] rounded-md mr-1 flex flex-row justify-between items-center  py-3 text-lg`}
                        onPress={() => {
                          handleSelect(item);
                        }}
                      >
                        {item.label}
                        {item.value === values[name] && (
                          <CheckIcon
                            width={20}
                            height={20}
                            color="white"
                            style={tw`absolute top-[1] right-1 z-10`}
                          />
                        )}
                      </TouchableOpacity>
                    );
                  } else {
                    return (
                      <TouchableOpacity
                        style={tw`h-13 flex flex-row justify-between items-center  py-3 text-lg`}
                        onPress={() => {
                          handleSelect(item);
                        }}
                      >
                        <AppText
                          style={tw.style(
                            `text-lg `,
                            item.value === values[name]
                              ? `text-[${colors.primary}]`
                              : "text-gray-800"
                          )}
                        >
                          {item.label}
                        </AppText>
                        <View
                          style={tw.style(
                            `w-5 h-5  rounded-full`,
                            item.value === values[name]
                              ? `border-4 border-[${colors.primary}]`
                              : "border-2 border-[black]"
                          )}
                        />
                      </TouchableOpacity>
                    );
                  }
                })}
            </ScrollView>
          </View>
        </BottomSheet>
      )}
      {isPicker && (
        <Modal visible={isVisible} transparent={true} animationType="slide">
          <View style={tw`flex-1 justify-end bg-black/50`}>
            <View style={tw`bg-white`}>
              <View
                style={tw`flex-row justify-between p-4 border-b border-gray-200`}
              >
                <TouchableOpacity onPress={() => setIsVisible(false)}>
                  <AppText style={tw`text-blue-500 text-lg`}>Cancel</AppText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsVisible(false)}>
                  <AppText style={tw`text-blue-500 text-lg`}>Done</AppText>
                </TouchableOpacity>
              </View>
              <Picker
                selectedValue={values[name]}
                onValueChange={handlePickerSelect}
                mode="dropdown"
              >
                {data.map((item) => (
                  <Picker.Item
                    key={item.value.toString()}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default CustomSelect;
