import * as Yup from "yup";
import { isValidPhoneNumber } from "libphonenumber-js";

export const staffValidationSchema = Yup.object().shape({
 firstName: Yup.string()
   .required("First name is required")
   .min(2, "First name must be at least 2 characters"),
 lastName: Yup.string()
   .required("Last name is required")
   .min(2, "Last name must be at least 2 characters"),
 email: Yup.string()
   .email("Invalid email address")
   .required("Email is required"),
 phone: Yup.string()
   .min(8, "Please enter a valid phone number")
   .max(15, "Please enter a valid phone number"),
 role: Yup.string().required("Role is required"),
});