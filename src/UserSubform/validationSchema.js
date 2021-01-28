//  UserSubform/validationSchema.js
import * as yup from "yup";
import {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  PASSWORD,
} from "./fieldsNames/fieldname";

const MIN_PASSWORD_LENGTH = 8;

const REQUIRED_MESSAGE = "This field is required";
const INVALID_EMAIL_FORMAT = "Invalid email format";
const PASSWORD_TOO_SHOWRT = `The password must be at least ${MIN_PASSWORD_LENGTH} characters long`;

export default yup.object({
  [FIRST_NAME]: yup.string().required(REQUIRED_MESSAGE),
  [LAST_NAME]: yup.string().required(REQUIRED_MESSAGE),
  [EMAIL]: yup.string().required(REQUIRED_MESSAGE).email(INVALID_EMAIL_FORMAT),
  [PASSWORD]: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .min(MIN_PASSWORD_LENGTH, PASSWORD_TOO_SHOWRT),
});
