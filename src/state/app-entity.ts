import { entity } from "simpler-state";
import { IAppEntity } from "../types/app-types";

export const AppEntity = entity<IAppEntity>({
  email: "",
  step: "otp",
  session: null,
  onboarding: false,
  format: "default",
  data: "",
  url: "",
});
