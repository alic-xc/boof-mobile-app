import * as Yup from "yup";

const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "application/pdf",
];

const digitsOnly = (value) => /^\d+$/.test(value);

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(7, "Minimum of 8 characters"),
  confirm_password: Yup.string()
    .required("Password is required")
    .test({
      name: "confirm password",
      test: function (item) {
        return item == this.parent.password
          ? true
          : this.createError({
              message: "Password must be the same",
              path: "confirm_password",
            });
      },
    }),
});

export const PhoneSchema = Yup.object().shape({
  phone: Yup.number().required("Phone is required"),
});

export const VerificationSchema = Yup.object().shape({
  bvn: Yup.string()
    .length(11, "Must be 11 digits")
    .test("BVN", "Must be 11 digits", digitsOnly)
    .required("BVN is required"),
});

export const UserSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is required")
    .min(2, "Minimum of 2 characters"),
  email: Yup.string().email().required("Email is required"),
  business: Yup.string().required("Business is required"),
  password: Yup.string()
    .required("Password is required")
    .min(7, "Minimum of 8 characters"),
});

export const ChangePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required("Password is required")
    .min(7, "Minimum of 8 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(7, "Minimum of 8 characters"),
  confirmPassword: Yup.string()
    .required("You need to confirm your password")
    .test({
      name: "confirm password",
      test: function (item) {
        return item == this.parent.password
          ? true
          : this.createError({
              message: "Password must be the same",
              path: "confirmPassword",
            });
      },
    }),
  pin: Yup.string()
    .length(4, "Must be 4 digits")
    .test("Pin ", "Must be 4 digits", digitsOnly)
    .required("Pin is required"),
});
