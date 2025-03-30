import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import AppText from "./AppText";

interface IconButtonProps {
  icon: string; // Icon name based on the chosen icon library
  onPress: () => void;
  size?: number; // Icon size
  color?: string; // Icon color
  label?: string; // Optional text label
  labelStyle?: StyleProp<TextStyle>; // Style for the label
  buttonStyle?: StyleProp<ViewStyle>; // Style for the button container
  iconStyle?: StyleProp<ViewStyle>; // Style for the icon
  disabled?: boolean; // Disable the button
}

const MUIButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  size = 24,
  color = "black",
  label,
  labelStyle,
  buttonStyle,
  iconStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 8,
          borderRadius: 8,
          opacity: disabled ? 0.6 : 1,
        },
        buttonStyle,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {icon}
      {label && (
        <AppText
          style={[{ marginLeft: 8, fontSize: size * 0.6, color }, labelStyle]}
        >
          {label}
        </AppText>
      )}
    </TouchableOpacity>
  );
};

export default MUIButton;
