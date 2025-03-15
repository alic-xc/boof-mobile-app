import * as Yup from "yup";

export const categoryValidationSchema = Yup.object().shape({
  name: Yup.string().required("Category name is required"),
  image_path: Yup.string().optional(),
});

export const subCategoryValidationSchema = Yup.object().shape({
  name: Yup.string().required("Category name is required"),
  categoryId: Yup.number().required("Parent Category is required"),
});

export const taxValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Tax name is required")
    .max(100, "Tax name cannot exceed 100 characters"),
  rate: Yup.number()
    .required("Tax rate is required")
    .min(0, "Tax rate cannot be negative")
    .max(100, "Tax rate must not exceed 100%")
    .typeError("Tax rate must be a valid number"),
});

export const discountValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Discount name is required")
    .max(100, "Discount name cannot exceed 100 characters"),
  value: Yup.number()
    .required("Discount value is required")
    .min(0, "Discount value cannot be negative")
    .typeError("Discount value must be a valid number"),
  valueCapped: Yup.number()
    .required("Discount value is required")
    .min(0, "Discount value cannot be negative")
    .typeError("Discount value must be a valid number"),
  type: Yup.string().required("Discount type is required"),
});

export const ProductValidationSchema = Yup.object().shape({
  productName: Yup.string()
    .trim()
    .required("Product Name is required")
    .min(2, "Product Name must be at least 2 characters")
    .max(100, "Product Name must not exceed 100 characters"),

  sku: Yup.string()
    .trim()
    .required("SKU is required")
    .matches(
      /^[A-Za-z0-9-]+$/,
      "SKU can only contain letters, numbers, and hyphens"
    )
    .min(3, "SKU must be at least 3 characters")
    .max(20, "SKU must not exceed 20 characters"),

  barcode: Yup.string()
    .trim()
    .optional()
    .matches(/^[0-9]+$/, "Barcode must contain only numbers"),

  measurement: Yup.string()
    .trim()
    .optional()
    .max(50, "Measurement must not exceed 50 characters"),
  image_local_url: Yup.string().required("Cover image is required"),
  cost_price: Yup.number()
    .required("Price is required")
    .positive("Price must be a positive number")
    .typeError("Price must be a valid number")
    .test(
      "maxDigitsAfterDecimal",
      "Price can have maximum 2 decimal places",
      (number) => /^\d+(\.\d{1,2})?$/.test(number.toString())
    ),
  selling_price: Yup.number()
    .required("Price is required")
    .positive("Price must be a positive number")
    .typeError("Price must be a valid number")
    .test(
      "maxDigitsAfterDecimal",
      "Price can have maximum 2 decimal places",
      (number) => /^\d+(\.\d{1,2})?$/.test(number.toString())
    ),
  quantity: Yup.number()
    .required("Quantity is required")
    .integer("Quantity must be a whole number")
    .positive("Quantity must be a positive number")
    .typeError("Quantity must be a valid number")
    .max(10000, "Quantity cannot exceed 10,000"),

  description: Yup.string()
    .optional()
    .max(500, "Description must not exceed 500 characters"),

  categoryId: Yup.number().required("Parent Category is required"),
  subcategoryId: Yup.number()
    .nullable()
    .test(
      "subcategory-required-based-on-category",
      "Sub-Category is required",
      function (value) {
        const { categoryId } = this.parent; // Access other form values
        // Validate if categoryId > 0 and subcategoryId is not null or invalid
        if (categoryId > 0) {
          return value !== null && (value as number) > 0;
        }
        return true; // No validation error if categoryId <= 0
      }
    ),
});

export const CartItemSchema = Yup.object().shape({
  quantity: Yup.number()
    .required("Quantity is required")
    .positive("Quantity must be positive")
    .integer("Quantity must be a whole number"),
  cost_price: Yup.number()
    .required("Cost price is required")
    .positive("Cost price must be positive"),
  total_amount: Yup.number()
    .required("Total amount is required")
    .positive("Total amount must be positive"),
  new_selling_price: Yup.number()
    .required("New selling price is required")
    .positive("New selling price must be positive"),
  date_expiry: Yup.date().nullable(),
  note: Yup.string(),
});

export const PurchaseOrderSchema = Yup.object().shape({
  supplier: Yup.number().required("Supplier is required"),
  cart: Yup.array().min(1, "At least one item is required"),
});

export const ReturnItemSchema = Yup.object().shape({
  quantity: Yup.number()
    .required("Quantity is required")
    .positive("Quantity must be positive")
    .integer("Quantity must be a whole number"),
  cost_price: Yup.number()
    .required("Cost price is required")
    .positive("Cost price must be positive"),
  total_amount: Yup.number()
    .required("Total amount is required")
    .positive("Total amount must be positive"),
  note: Yup.string(),
  condition: Yup.string().required("Condition is required"),
});

export const ReasonSchema = Yup.object().shape({
  reason: Yup.string(),
});
