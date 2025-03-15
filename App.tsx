import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "./assets/css/index.css";
import React from "react";
import TabIconsGenerator from "./src/components/TabIconsGenerator";
import Dashboard from "./src/screen/Dashboard";
import Settings from "./src/screen/Settings";
import { AboutUsScreen } from "./src/screen/About";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, AppState, View } from "react-native";
import { AppEntity } from "./src/state/app-entity";
import Payment from "./src/screen/Payment";
import {
  AuthLogin,
  AuthOTP,
  AuthRegistration,
  AuthResetPassword,
  AuthResetPasswordRequest,
} from "./src/screen/Auth";
import { NotifierWrapper } from "react-native-notifier";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { supabase } from "./src/utils/superbase";
import Onboarding from "./src/screen/Auth/Onboarding";
import colors from "./src/constant/Color";

const HAS_SEEN_ONBOARDING = "hasSeenOnboarding";

// Function to check if user has seen onboarding
const checkOnboardingStatus = async () => {
  try {
    const hasSeenOnboarding = await AsyncStorage.getItem(HAS_SEEN_ONBOARDING);
    return hasSeenOnboarding === "true";
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    return false;
  }
};

const OnboardingStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const { onboarding, session } = AppEntity.use();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      // if (session) setIsLoading(false);
      AppEntity.set((state) => {
        return {
          ...state,
          session,
        };
      });
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      // if (session) setIsLoading(false);
      AppEntity.set((state) => {
        return {
          ...state,
          session,
        };
      });
    });
  }, []);

  React.useEffect(() => {
    // Check onboarding status when app loads
    checkOnboardingStatus().then((status) => {
      AppEntity.set((data) => {
        return {
          ...data,
          onboarding: status,
        };
      });
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />;
      </View>
    );
  }

  return (
    <GestureHandlerRootView>
      <NotifierWrapper>
        <NavigationContainer>
          <OnboardingStack.Navigator
          initialRouteName={
            Boolean(onboarding)
              ? session && session.user && !isLoading
                ? "Dashboard"
                : "Registration"
              : "Onboarding"
          }
          >
            {!onboarding && (
              <OnboardingStack.Screen
                name="Onboarding"
                component={Onboarding}
                options={{
                  headerShown: false,
                }}
              />
            )}

            <OnboardingStack.Screen
              name="Registration"
              component={AuthRegistration}
              options={{
                headerShown: false,
              }}
            />
            <OnboardingStack.Screen
              name="Login"
              component={AuthLogin}
              options={{
                headerShown: false,
              }}
            />
            <OnboardingStack.Screen
              name="OTP"
              component={AuthOTP}
              options={{
                headerShown: false,
              }}
            />
            <OnboardingStack.Screen
              name="ResetPassword"
              component={AuthResetPassword}
              options={{
                headerShown: false,
              }}
            />
            <OnboardingStack.Screen
              name="ResetPasswordRequest"
              component={AuthResetPasswordRequest}
              options={{
                headerShown: false,
              }}
            />

            <OnboardingStack.Screen
              name="Dashboard"
              component={AppTab}
              options={{
                headerShown: false,
              }}
            />

            <OnboardingStack.Screen
              name="Payment"
              component={Payment}
              options={{
                headerShown: false,
              }}
            />
            <OnboardingStack.Screen
              name="About"
              component={AboutUsScreen}
              options={{
                headerShown: false,
              }}
            />
          </OnboardingStack.Navigator>
        </NavigationContainer>
      </NotifierWrapper>
    </GestureHandlerRootView>
  );
}

const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <TabIconsGenerator
              route={route.name}
              focused={focused}
              color={color}
              size={size}
            />
          );
        },

        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        tabBarStyle: {
          height: 70,
          paddingHorizontal: 20,
          borderColor: "transparent",
          backgroundColor: "transparent",
          borderWidth: 2,
          boxShadow: "none",
          paddingBottom: 3,
        },
        tabBarIconStyle: {
          padding: 0,
          marginTop: 7,
          height: 30,
          marginBottom: 4,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: 400,
          margin: 0,
        },
      })}
    >
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
