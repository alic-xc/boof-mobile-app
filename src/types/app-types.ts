import { Session } from "@supabase/supabase-js";

export interface IAppEntity {
  email: string;
  step: "otp" | "none";
  session: Session | null;
  onboarding: boolean;
  format: "url" | "pdf" | "image" | "default";
  data: "",
  url: ""
}

export interface IUser {
  email: string;
  password: string;
  fullName: string;
  business: string;
}
