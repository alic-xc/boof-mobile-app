import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { Easing, Notifier, NotifierComponents } from "react-native-notifier";
import { IUser } from "../types/app-types";
import { verify } from "crypto";

const SUPABASE_URL = "https://uhmhzwiazeikhycbybnf.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVobWh6d2lhemVpa2h5Y2J5Ym5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NzEyNDAsImV4cCI6MjA1NTQ0NzI0MH0.afoUTOrGI0R3d4g6Abm56P46fAYJlYZblF96DMLuElY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export const signUp = async ({
  email,
  password,
  fullName,
  business,
}: IUser) => {
  const data = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName, business: business },
    },
  });
  const notification = { title: "", description: "", type: "" };
  const { error } = data;
  if (error) {
    notification.title = "Unable to complete registration";
    notification.description = error.message;
    notification.type = "error";
  } else {
    return "completed";
  }
  if (notification.title.length > 0) {
    Notifier.showNotification({
      title: notification.title,
      description: notification.description,
      duration: 10,
      Component: NotifierComponents.Alert,
      showAnimationDuration: 800,
      showEasing: Easing.linear,
      hideOnPress: false,
      componentProps: {
        alertType: notification.type,
      },
    });
  }
};

export const verifyOTP = async (
  otp: string,
  email: string,
  purpose: string
) => {
  console.log({
    email: email,
    token: otp,
    type: purpose === "reset" ? "recovery" : "signup",
  });
  const { error } = await supabase.auth.verifyOtp({
    email: email,
    token: otp,
    type: purpose === "reset" ? "recovery" : "signup",
  });
  if (error) {
    Notifier.showNotification({
      title: "OTP Verification Failed",
      description: error.message,
      duration: 10,
      Component: NotifierComponents.Alert,
      showAnimationDuration: 800,
      showEasing: Easing.linear,
      hideOnPress: false,
      componentProps: {
        alertType: "error",
      },
    });
  } else {
    Notifier.showNotification({
      title: "Account Created Successfully",
      description: "You can now login to your account",
      duration: 10,
      Component: NotifierComponents.Alert,
      showAnimationDuration: 800,
      showEasing: Easing.linear,
      hideOnPress: false,
      componentProps: {
        alertType: "success",
      },
    });
    return "completed";
  }
};

export const handleLogout = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return "completed";
  } catch (error) {
    Notifier.showNotification({
      title: "Logout Failed",
      description: "Unable to process your request",
      duration: 10,
      Component: NotifierComponents.Alert,
      showAnimationDuration: 800,
      showEasing: Easing.linear,
      hideOnPress: false,
      componentProps: {
        alertType: "error",
      },
    });
  }
};

export const handleLogin = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) throw error;

    // If login successful
    if (data.session) {
      return "completed";
    }
  } catch (error) {
    Notifier.showNotification({
      title: "Login Failed",
      description: error?.message,
      duration: 10,
      Component: NotifierComponents.Alert,
      showAnimationDuration: 800,
      showEasing: Easing.linear,
      hideOnPress: false,
      componentProps: {
        alertType: "error",
      },
    });
  }
};
