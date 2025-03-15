// components/Tag.tsx
import React from "react";
import { View, Text, ViewStyle, TextStyle } from "react-native";
import tw from "twrnc";

type TagVariant = "success" | "error" | "warning" | "info";

interface TagProps {
  text: string;
  variant?: TagVariant;
  customColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const StatusTag: React.FC<TagProps> = ({
  text,
  variant = "info",
  customColor,
  style,
  textStyle,
}) => {
  const getVariantStyles = () => {
    const styles = {
      success: {
        bg: "bg-green-100",
        dot: "bg-green-500",
        text: "text-green-700",
      },
      error: {
        bg: "bg-red-100",
        dot: "bg-red-500",
        text: "text-red-700",
      },
      warning: {
        bg: "bg-yellow-100",
        dot: "bg-yellow-500",
        text: "text-yellow-700",
      },
      info: {
        bg: "bg-blue-100",
        dot: "bg-blue-500",
        text: "text-blue-700",
      },
    };

    return styles[variant];
  };

  const variantStyles = getVariantStyles();

  return (
    <View
      style={[
        tw`flex-row items-center px-2 py-0.5 rounded-full ${variantStyles.bg}`,
        customColor && { backgroundColor: customColor },
        style,
      ]}
    >
      <View style={tw`w-1.5 h-1.5 rounded-full mr-2 ${variantStyles.dot}`} />
      <Text style={[tw`text-sm font-medium ${variantStyles.text}`, textStyle]}>
        {text}
      </Text>
    </View>
  );
};

export default StatusTag;
