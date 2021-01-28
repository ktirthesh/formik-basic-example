import * as yup from "yup";
import { USER } from "./fieldsNames";
import userValidationSchema from "./subforms/NewUserSubForm/validationSchema";

export default yup.object({
  [USER]: userValidationSchema,
});
