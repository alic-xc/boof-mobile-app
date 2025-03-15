import { SharedValue } from "react-native-reanimated";


export const convertSharedValueToNumber = (
  value: SharedValue<number>
): string => {
  return String(value.value);
};



