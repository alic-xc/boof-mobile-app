import * as Yup from "yup";

export const FilterSchema = Yup.object().shape({
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date()
    .min(Yup.ref("startDate"), "End date must be after start date")
    .required("End date is required"),
  priceRange: Yup.number(),
  sortBy: Yup.string(),
  sortOrder: Yup.string().oneOf(["asc", "desc"]),
});

export const TextInputSchema = Yup.object().shape({
  text: Yup.string()
    .max(10000, "Text must not exceed 1000 characters")
    .required("Text is required"),
});

export const UrlSchema = Yup.object().shape({
  url: Yup.string().url("Must be a valid URL").required("URL is required"),
});
