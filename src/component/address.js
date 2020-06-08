import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { RaisedButton } from 'material-ui';

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
                    <h1>Address</h1>
                    <h3>Mail Adress</h3>
                    <input
                    placeholder='Address line 1' 
                    onChange={handlechange('madd1')}
                    defaultValue={values.madd1}>
                    </input><br></br>
                    <input
                    placeholder='Address line 2' 
                    onChange={handlechange('madd2')}
                    defaultValue={values.madd2}>
                    </input>
                    <br></br>
                    <input
                    placeholder='City' 
                    onChange={handlechange('city')}
                    defaultValue={values.city}>
                    </input>&emsp;
                    <select id="mstate" name="states" onChange={handlechange('mstate')}
                    defaultValue={values.mstate}>
                    <option value="anp">Andhra Pradesh</option>
                    <option value="arp">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chattisgarh">Chattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Hp">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Mp">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="TamilNadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Up">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="Wb">West Bengal</option>
                    
                    </select>&emsp;
                    <input
                    placeholder='Zip code' 
                    onChange={handlechange('zipcode')}
                    defaultValue={values.zipcode}>
                    </input><br></br>&emsp;
                    <br></br>

                    <h3>Permanent Adress</h3>
                    <div class="ui checkbox" onClick={handlechange('check')}
                    defaultValue={values.check}>
                    <input type="checkbox" class="hidden" readonly="" tabindex="0" />
                    <label>Same as mail address</label>
                    </div>
                    </React.Fragment>
                    <div>
                    {values.check=="on"?values.padd1=values.madd1:null}
                    {values.check=="on"?values.padd2=values.madd2:null}
                    {values.check=="on"?values.city1=values.city:null}
                    {values.check=="on"?values.state1=values.mstate:null}
                    {values.check=="on"?values.zipcode1=values.zipcode:null}
                    </div>
                        <React.Fragment>
                    <input
                    placeholder='Address line 1' 
                    onChange={handlechange('padd1')}
                    defaultValue={values.padd1}>
                    </input><br></br>
                    <input
                    placeholder='Address line 2' 
                    onChange={handlechange('padd2')}
                    defaultValue={values.padd2}>
                    </input>
                    <br></br>
                    <input
                    placeholder='City' 
                    onChange={handlechange('city1')}
                    defaultValue={values.city1}>
                    </input>&emsp;
                    <select id="state1" name="state1" onChange={handlechange('state1')}
                    defaultValue={values.state1}>
                    <option value="anp">Andhra Pradesh</option>
                    <option value="arp">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chattisgarh">Chattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Hp">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Mp">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="TamilNadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Up">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="Wb">West Bengal</option>
                    
                    </select>&emsp;
                    <input
                    placeholder='Zip code' 
                    onChange={handlechange('zipcode1')}
                    defaultValue={values.zipcode1}>
                    </input><br></br>&emsp;
                    <br></br>
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
