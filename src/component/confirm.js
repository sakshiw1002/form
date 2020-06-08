import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import {  TextField, RaisedButton,List,ListItem
 } from 'material-ui';
export class Address extends Component {

  continue = e =>{
    e.preventDefault();
    this.props.nextstep();
}

back = e =>{
    e.preventDefault();
    this.props.prevstep();
}
 

    render() {
        const{values:{firstname,lastname,photo,dob,phone,email,madd1,madd2,city,mstate,zipcode,check,padd1,padd2,city1,state1,zipcode1,edu,skill,resume,docs,
            feedback}}=this.props;
        return (
            <MuiThemeProvider>
              <React.Fragment>
                  <h1>Confirm</h1>
                  <List>
                      <ListItem
                          primaryText="First Name"
                          secondaryText={firstname}
                      />
                      <ListItem
                          primaryText="Last Name"
                          secondaryText={lastname}
                      />
                      <ListItem
                          primaryText="photo"
                          secondaryText={photo}
                      />
                      <ListItem
                          primaryText="dob"
                          secondaryText={dob}
                      />
                      <ListItem
                          primaryText="phone"
                          secondaryText={phone}
                      />
                      <ListItem
                          primaryText="email"
                          secondaryText={email}
                      />
                      <ListItem
                          primaryText="Mail Address"
                          secondaryText={madd1}
                      />
                      <ListItem
                          secondaryText={madd2}
                      />
                      <ListItem
                          primaryText="city"
                          secondaryText={city}
                      />
                      <ListItem
                          primaryText="state"
                          secondaryText={mstate}
                      />
                      <ListItem
                          primaryText="Zip code"
                          secondaryText={zipcode}
                      />
                      <ListItem
                          primaryText="Address"
                          secondaryText={padd1}
                      />
                      <ListItem
                          secondaryText={padd2}
                      />
                      <ListItem
                          primaryText="City"
                          secondaryText={city1}
                      />
                      <ListItem
                          primaryText="state"
                          secondaryText={state1}
                      />
                      <ListItem
                          primaryText="zip code"
                          secondaryText={zipcode1}
                      />
                      <ListItem
                          primaryText="Higher Education"
                          secondaryText={edu}
                      />
                      <ListItem
                          primaryText="Skills"
                          secondaryText={skill}
                      />
                      <ListItem
                          primaryText="Resume"
                          secondaryText={resume}
                      />
                      <ListItem
                          primaryText="Document"
                          secondaryText={docs}
                      />
                  </List>
                  <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                    />    
                    <RaisedButton
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                    />
                    </React.Fragment>
            </MuiThemeProvider>
        );
    }
}


const styles={
    button:{
        margin :15
    }
}

export default Address
