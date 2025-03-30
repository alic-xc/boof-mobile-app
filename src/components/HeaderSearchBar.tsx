import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons"; // Or your preferred icon library
import { FilterIcon } from "../icons";
import BottomSheet from "./BottomSheet";
import { Formik } from "formik";
import DateInput from "./DateInput";
import CustomSelect from "./CustomSelect";
import AppText from "./AppText";

interface HeaderSearchBarProps {
  onSearchChange?: (text: string) => void;
  placeholder?: string;
  isDisabledFilter?: boolean;
}

const HeaderSearchBar = ({
  onSearchChange,
  placeholder = "Search...",
  isDisabledFilter = false,
}: HeaderSearchBarProps) => {
  const [search, setSearch] = useState("");
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const handleChange = (text: string) => {
    setSearch(text);
    onSearchChange?.(text);
  };

  const initialValues = {
    startDate: new Date(),
    endDate: new Date(),
    priceRange: 0,
    sortBy: "name",
    sortOrder: "asc",
  };

  const sortByOptions = [
    { label: "Name", value: "name" },
    { label: "Price", value: "price" },
    { label: "Date", value: "date" },
  ];

  const sortOrderOptions = [
    { label: "Ascending", value: "asc" },
    { label: "Descending", value: "desc" },
  ];

  return (
    <View style={tw`h-10 flex gap-2 flex-row justify-start items-center`}>
      <View
        style={tw`flex flex-1 flex-row items-center rounded-lg bg-gray-50 px-2`}
      >
        <View style={tw`pl-2`}>
          <Ionicons name="search" size={20} color="#9CA3AF" />
        </View>
        <TextInput
          style={tw`flex-1 h-full text-base text-gray-800`}
          value={search}
          onChangeText={handleChange}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
        />
      </View>
      {!isDisabledFilter && (
        <Pressable
          style={tw`flex justify-center items-center bg-gray-50 h-10 w-10  rounded-lg `}
          onPress={() => setIsVisible(true)}
        >
          <FilterIcon height={24} width={24} color="#1e2424" />
        </Pressable>
      )}
      {isVisible && !isDisabledFilter && (
        <BottomSheet
          isActive={isVisible}
          closeModal={() => {
            setIsVisible(false);
          }}
          height={"65%"}
        >
          <AppText style={tw`text-xl font-bold mb-3 px-4`}>Filter By</AppText>

          <Formik initialValues={initialValues} onSubmit={(values) => {}}>
            {({ handleSubmit, setFieldValue, values, errors, touched }) => (
              <View style={tw`px-4 flex flex-col gap-3`}>
                <View style={tw`mb-5`}>
                  <DateInput
                    title="Start Date"
                    name="startDate"
                    placeholder="Start Date"
                    style="border-0 bg-gray-200"
                    containerStyle="h-[45px] grow"
                  />
                </View>
                <View style={tw`mb-5`}>
                  <DateInput
                    title="End Date"
                    name="endDate"
                    placeholder="End Date"
                    style="border-0 bg-gray-200"
                    containerStyle="h-[45px] grow"
                  />
                </View>

                <View style={tw`mt-1`}>
                  <AppText style={tw`text-lg mb-1`}>
                    Price Range (1,1000)
                  </AppText>
                </View>

                <CustomSelect
                  name="sortBy"
                  title="Sort By"
                  data={sortByOptions}
                  placeholder="Select sort field"
                  isPicker={true}
                  containerStyle="h-[72px]"
                />

                <CustomSelect
                  name="sortOrder"
                  title="Sort Order"
                  data={sortOrderOptions}
                  placeholder="Select sort order"
                  containerStyle="h-[72px]"
                  isPicker={true}
                />

                <TouchableOpacity
                  style={tw`bg-blue-500 p-4 rounded-lg `}
                  onPress={() => {
                    handleSubmit();
                    setIsVisible(false);
                  }}
                >
                  <AppText style={tw`text-white text-center font-bold`}>
                    Continue
                  </AppText>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </BottomSheet>
      )}
    </View>
  );
};

export default HeaderSearchBar;
