import { Text, TextProps, TextStyle, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import tw from "twrnc";

interface AppTextProps extends TextProps {
  truncate?: boolean;
  type?:
    | "displayBold"
    | "headingLargeBold"
    | "headingSmallSemibold"
    | "titleRegular"
    | "titleMedium"
    | "titleSemibold"
    | "titleBold"
    | "bodyRegular"
    | "bodyMedium"
    | "bodySemibold"
    | "captionRegular"
    | "captionMedium"
    | "captionSemibold";
  black?: boolean;
  white?: boolean;
  wide?: boolean;
  center?: boolean;
}

const AppText = ({
  truncate,
  style,
  type = "bodyRegular",
  children,
  wide,
  black,
  white,
  center,
  ...props
}: AppTextProps) => {
  // Font styles with explicit fontFamily
  const styles = StyleSheet.create({
    displayBold: {
      fontFamily: "Montserrat_700Bold",
      fontSize: scale(32),
      lineHeight: scale(36),
    },
    headingLargeBold: {
      fontFamily: "Montserrat_700Bold",
      fontSize: scale(24),
      lineHeight: scale(28),
    },
    headingSmallSemibold: {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: scale(18),
      lineHeight: scale(24),
    },
    titleRegular: {
      fontFamily: "Montserrat_400Regular",
      fontSize: scale(16),
      lineHeight: scale(24),
    },
    titleMedium: {
      fontFamily: "Montserrat_500Medium",
      fontSize: scale(14),
      lineHeight: scale(24),
    },
    titleSemibold: {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: scale(16),
      lineHeight: scale(24),
    },
    titleBold: {
      fontFamily: "Montserrat_700Bold",
      fontSize: scale(16),
      lineHeight: scale(24),
    },
    bodyRegular: {
      fontFamily: "Montserrat_400Regular",
      fontSize: scale(14),
      lineHeight: scale(20),
    },
    bodyMedium: {
      fontFamily: "Montserrat_500Medium",
      fontSize: scale(14),
      lineHeight: scale(20),
    },
    bodySemibold: {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: scale(14),
      lineHeight: scale(20),
    },
    captionRegular: {
      fontFamily: "Montserrat_400Regular",
      fontSize: scale(12),
      lineHeight: scale(20),
    },
    captionMedium: {
      fontFamily: "Montserrat_500Medium",
      fontSize: scale(12),
      lineHeight: scale(20),
    },
    captionSemibold: {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: scale(12),
      lineHeight: scale(20),
    },
  });

  const baseStyle = [
    styles[type],
    tw`flex-shrink`,
    black ? tw`text-black` : white ? tw`text-white` : tw`text-blackMid`,
    wide && tw`grow`,
    center && tw`text-center`,
    truncate && { overflow: "hidden" as TextStyle["overflow"] },
    style,
  ];

  return (
    <Text
      testID={props.testID}
      style={baseStyle}
      numberOfLines={truncate ? 1 : 0}
      ellipsizeMode={truncate ? "tail" : undefined}
      {...props}
    >
      {children}
    </Text>
  );
};

export default AppText;
