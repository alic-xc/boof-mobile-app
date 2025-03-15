import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation-types";

const navigation = useNavigation<NavigationProp<RootStackParamList>>();

export default navigation;
