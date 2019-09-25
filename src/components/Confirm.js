import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Confirm extends Component {
  contine = e => {
    e.preventDefault();
    //Send data to API

    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();

    this.props.prevStep();
  };

  render() {
    const {
      values: { firstname, lastname, occupation, city, bio, email }
    } = this.props;
    //console.log(values);

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm: your Data" />
          <br />
          <List>
            <ListItem
              primaryText="First name"
              secondaryText={firstname}
            ></ListItem>
            <ListItem
              primaryText="Last name"
              secondaryText={lastname}
            ></ListItem>
            <ListItem primaryText="Email" secondaryText={email}></ListItem>
            <ListItem
              primaryText="Occupation"
              secondaryText={occupation}
            ></ListItem>
            <ListItem primaryText="Bio" secondaryText={bio}></ListItem>
            <ListItem primaryText="City" secondaryText={city}></ListItem>
          </List>
          <RaisedButton
            label="Confirm and Continue"
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

export default Confirm;
