import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import HeaderSearchBar from "./HeaderSearchBar";
import { getTimeBasedGreeting } from "../utils/greetings";

interface SearchProps {
  onSearchChange?: (text: string) => void;
  placeholder?: string;
  text?: string;
}

const Search = (props: SearchProps) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const animatedHeight = new Animated.Value(0);

  const toggleSearch = () => {
    Animated.timing(animatedHeight, {
      toValue: isSearchVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearchChange = (text: string) => {
    props.onSearchChange && props.onSearchChange(text);
    if (text.trim() === "") {
      toggleSearch();
    }
  };

  return (
    <View
      style={tw`w-[100%] flex flex-row items-center justify-between px-3 mt-5`}
    >
      {isSearchVisible && (
        <View style={tw`w-full`}>
          <HeaderSearchBar
            placeholder={props.placeholder}
            onSearchChange={handleSearchChange}
          />
        </View>
      )}
      {!isSearchVisible && (
        <>
          <Text style={tw`text-xl text-white font-bold`}>
            {getTimeBasedGreeting(props.text)}
          </Text>
          <Pressable onPress={toggleSearch}>
            <Ionicons name="search" size={24} color="#fff" />
          </Pressable>
        </>
      )}
    </View>
  );
};

export default Search;
