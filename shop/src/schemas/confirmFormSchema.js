import * as Yup from "yup";

const defaultText = Yup.string()
.matches(/^[A-Za-z]+$/, "only letters")
.min(2, "min 2 letters required")
.max(30, "only 30 letters allowed")
.required("this field is required");

export const confirmFormSchema = Yup.object ({
    firstName: defaultText,
    lastName: defaultText,
    age: Yup.number()
        .min(18, "you cannot purchase the product")
        .max(99, "check if your age is correct")
        .required("this field is required"),
    city: defaultText,
    street: Yup.string()
        .min(2, "min 2 letters required")
        .max(30, "only 30 letters allowed")
        .required("this field is required"),
    houseNumber: Yup.string()
        .matches(/^[A-Za-z]/ && /[0-9]/, "only letters and number")
        .required("this field is required"),
    apartment: Yup.string()
        .matches(/[0-9]/, "only number"),
    mobileNumber: Yup.string()
        .min(2, "min 2 letters required")
        .max(20, "only 20 letters allowed")
        .required("this field is required"),
})