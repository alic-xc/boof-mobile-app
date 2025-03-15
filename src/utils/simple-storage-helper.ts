import AsyncStorage from "@react-native-async-storage/async-storage";

export const getSimpleStorageDataHandler = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return false;
  }
};

export const saveSimpleStorageDataHandler = async (
  key: string,
  val: string
) => {
  try {
    const value = await AsyncStorage.setItem(key, val);
    return true;
  } catch (e) {
    return false;
  }
};
