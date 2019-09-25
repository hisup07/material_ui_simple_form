import React, { Component } from "react";
import Confirm from "./Confirm";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import Success from "./Success";

class UserForm extends Component {
  state = {
    step: 1,
    firstname: "",
    lastname: "",
    email: "",
    occupation: "",
    bio: "",
    city: ""
  };

  //proced to next step
  nextStep = () => {
    const { step } = this.state;

    this.setState({
      step: step + 1
    });
  };
  //go back to step
  prevStep = () => {
    const { step } = this.state;

    this.setState({
      step: step - 1
    });
  };
  //handle fields change
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const {
      step,
      firstname,
      lastname,
      email,
      occupation,
      bio,
      city
    } = this.state;
    const values = { firstname, lastname, email, occupation, bio, city };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            values={values}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 4:
        return <Success values={values} />;
      default:
        return <h1>Default</h1>;
    }
  }
}

export default UserForm;
