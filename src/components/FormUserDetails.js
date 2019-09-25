import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
  contine = e => {
    e.preventDefault();

    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter user details" />
          <TextField
            hintText="Enter your first name"
            floatingLabelText="First Name"
            onChange={handleChange("firstname")}
            defaultValue={values.firstname}
          />
          <br />
          <TextField
            hintText="Enter your last name"
            floatingLabelText="Last Name"
            onChange={handleChange("lastname")}
            defaultValue={values.lastname}
          />
          <br />
          <TextField
            hintText="Enter your email"
            floatingLabelText="email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.contine}
          ></RaisedButton>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
