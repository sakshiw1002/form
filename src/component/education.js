import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import {  TextField, RaisedButton } from 'material-ui';

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
        const{values,handlechange}=this.props;
        return (
            <MuiThemeProvider>
              <React.Fragment>
                    <h1>Education</h1>
                    <label>Higher Education</label><select id="edu" name="states" onChange={handlechange('edu')}
                    defaultValue={values.edu}>
                    <option value="Mca">Mca</option>
                    <option value="Mba">Mba</option>
                    <option value="Me">ME</option>
                    <option value="Mtech">MTech</option>
                    <option value="Ms">MS</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>></select>
                    <br></br>
                    <label>Skills</label><select id="skill" name="states" onChange={handlechange('skill')}
                    defaultValue={values.skill}>
                    <option value="Mca">C</option>
                    <option value="Mba">C++</option>
                    <option value="Me">C#</option>
                    <option value="Mtech">React Js</option>
                    <option value="Ms">Angular Js</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>></select>
                    <br></br>
                    <label>Resume</label>
                    <input type="file"
                    floatingLabelText='resume'
                    onChange={handlechange('resume')}
                    defaultValue={values.resume}>
                    </input>
                    <label>Education Documents</label>
                    <input type="file"
                    floatingLabelText='docs'
                    onChange={handlechange('docs')}
                    defaultValue={values.docs}>
                    </input><br></br>
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
