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
