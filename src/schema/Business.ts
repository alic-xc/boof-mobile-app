import * as Yup from "yup";
import { isValidPhoneNumber } from "libphonenumber-js";

export const businessValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Business name is required")
    .min(2, "Business name must be at least 2 characters"),
  country: Yup.string().required("Country name is required"),
  phone: Yup.string()
    .min(8, "Please Enter a valid number")
    .max(15, "Please Enter a valid number"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  address: Yup.string().optional(),
});
