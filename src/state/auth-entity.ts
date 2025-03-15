import { entity } from "simpler-state";
import { IAuthEntity } from "../types/auth-types";

export const AuthEntity = entity<IAuthEntity>({
  email: "",
  phone: "",
  country: "",
  sender: "registration",
});
