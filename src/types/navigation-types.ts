import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Registration: undefined;
  OTP: undefined;
  Login: undefined;
  Onboarding: undefined;
  ResetPassword: undefined;
  ResetPasswordRequest: undefined;
  Dashboard: NavigatorScreenParams<DashboardParamsList>;
};



// Dashboard Tab Navigation
export type DashboardParamsList = {
  Home: undefined;
  Invoice: NavigatorScreenParams<InvoiceParamsList>;
  Estimate: NavigatorScreenParams<EstimateParamsList>;
  Clients: NavigatorScreenParams<ClientParamsList>;
  Staff: NavigatorScreenParams<StaffParamsList>;
  Product: NavigatorScreenParams<ProductParamsList>;
  Settings: NavigatorScreenParams<SettingsParamsList>;
};

// Nested Screen Types
export type InvoiceParamsList = {
  Dashboard: undefined;
  Create: undefined;
  Edit: { invoiceId: string };
};

export type EstimateParamsList = {
  Dashboard: undefined;
  Create: undefined;
  Edit: { estimateId: string };
};

export type ClientParamsList = {
  Dashboard: undefined;
  Create: undefined;
  Edit: { clientId: string };
};

export type StaffParamsList = {
  Dashboard: undefined;
  Create: undefined;
  Edit: { staffId: string };
};

export type ProductParamsList = {
  Dashboard: undefined;
  Create: undefined;
  Edit: { productId: string };
};


// Type for useNavigation hook
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

// Extend navigation types for each nested navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}