import React from "react";
import DemoForm from "./DemoForm";

export class Mainapp extends React.Component {
  handleDemoFormSubmit = (values, setSubmitting) => {
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };
  render() {
    let values = {
      name: "",
      email: "",
      age: 20,
    };
    return (
      <div>
        <DemoForm values={values} handleSubmit={this.handleDemoFormSubmit} />
      </div>
    );
  }
}
