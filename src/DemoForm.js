import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

class DemoForm extends React.Component {
  render() {
    let {
      handleSubmit,
      handleChange,
      isSubmitting,
      values,
      errors,
    } = this.props;
    return (
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="name"
            className="form-control"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>
        <div className="form-group">
          <input
            name="email"
            className="form-control"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="text-right">
          <button type="submit" className="btn btn-primary">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    );
  }
}

const EnhansedDemoForm = withFormik({
  mapPropsToValues: (props) => props.values,
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Please enter valid email")
      .required("Email is required"),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    props.handleSubmit(values, setSubmitting);
  },
  displayName: "BaseRateForm",
})(DemoForm);

export default EnhansedDemoForm;
