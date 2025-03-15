import * as Yup from "yup";

export const supplierValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string().email("Invalid email address").optional(),
  phone: Yup.string()
    .required("Phone number is required")
    .min(8, "Phone number must be at least 8 characters")
    .max(15, "Phone number must be at most 15 characters"),
  address: Yup.string().optional(),
  companyName: Yup.string().optional(),
  taxId: Yup.string().optional(),
});
