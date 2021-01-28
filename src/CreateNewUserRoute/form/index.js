import React from "react";
import { Formik, Form } from "formik";
import NewUserSubForm from "./subforms/NewUserSubForm";
import validationSchema from "./validationSchema";
import defaultValues from "./defaultValues";
import { USER } from "./fieldsNames";
import ErrorBanner from "path/to/components/ErrorBanner";

export default class NewUserSubForm extends React.Component {
  state = {
    unknownErrors: null,
  };

  onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      //  Send values somehow
      await sendForm(values);
    } catch (e) {
      //  Map and show the errors in your form
      const [formErrors, unknownErrors] = mapErrorsFromRequest(e);

      setErrors(formErrors);
      this.setState({
        unknownErrors,
      });
    } finally {
      setSubmitting(false);
    }
  };

  render() {
    const { unknownErrors } = this.state;

    return (
      <Formik
        onSubmit={this.onSubmit}
        initialValues={defaultValues}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            {unknownErrors && <ErrorBanner errors={unknownErrors} />}
            <NewUserSubForm namespace={USER} />
          </Form>
        )}
      </Formik>
    );
  }
}
