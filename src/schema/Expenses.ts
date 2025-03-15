import * as Yup from "yup";

export const expenseValidationSchema = Yup.object().shape({
  staffId: Yup.string(),
  amount: Yup.number().required("Amount is required").positive(),
  description: Yup.string(),
  category: Yup.string().required("Category is required"),
  paymentMethod: Yup.string().required("Payment method is required"),
  date: Yup.date().required("Date is required"),
});
