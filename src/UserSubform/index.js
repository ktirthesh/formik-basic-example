//  UserSubform/index.js
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";
import {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  PASSWORD,
} from "./fieldsNames/fieldname";

export default class NewUserSubForm extends React.Component {
  static propTypes = {
    namespace: PropTypes.string,
  };

  withNamespace(fieldName) {
    const { namespace } = this.props;

    return namespace ? `${namespace}.${fieldName}` : fieldName;
  }

  render() {
    const { withNamespace } = this;

    return (
      <Fragment>
        <Field component="input" name={withNamespace(FIRST_NAME)} />
        <ErrorMessage name={withNamespace(FIRST_NAME)} />
        <Field component="input" name={withNamespace(LAST_NAME)} />
        <ErrorMessage name={withNamespace(FIRST_NAME)} />
        <Field component="input" name={withNamespace(EMAIL)} />
        <ErrorMessage name={withNamespace(FIRST_NAME)} />
        <Field component="input" name={withNamespace(PASSWORD)} />
        <ErrorMessage name={withNamespace(FIRST_NAME)} />
      </Fragment>
    );
  }
}
