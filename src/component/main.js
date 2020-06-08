import React, { Component } from 'react';
import About from './about';
import Address from './address';
import Education from './education';
import Confirm from './confirm';
import Success from './success';

export class Main extends Component {
    state={
        step: 1,
        firstname: '',
        lastname: '',
        photo:'',
        dob:'',
        phone:'',
        email:'',
        madd1:'',
        madd2:'',
        city:'',
        mstate:'',
        zipcode:'',
        check:'',
        padd1:'',
        padd2:'',
        city1:'',
        state1:'',
        zipcode1:'',
        edu:'',
        skill:'',
        resume:'',
        docs:'',
        feedback:''
    }

    //proceed to next step

    nextstep=()=>{
        const{step}=this.state;
        this.setState(
            {
                step: step+1
            });
    }

    //proceed to previous step

    prevstep=()=>{
        const{step}=this.state;
        this.setState(
            {
                step: step-1
            });
    }


    //handle fields change

    handlechange = input => e =>{
        this.setState({[input]: e.target.value});
    }
    render() {
        const{step}=this.state;
        const{firstname,lastname,photo,dob,phone,email,madd1,madd2,city,mstate,zipcode,check,padd1,padd2,city1,state1,zipcode1,edu,skill,resume,docs,
            feedback}=this.state;
        const values={firstname,lastname,photo,dob,phone,email,madd1,madd2,city,mstate,zipcode,check,padd1,padd2,
            city1,state1,zipcode1,edu,skill,resume,docs,feedback}
        switch(step){
            case 1:
                return(
                    <About
                    nextstep={this.nextstep}
                    handlechange={this.handlechange}
                    values={values}
                    />
                )
            case 2:
                return(
                    <Address
                    nextstep={this.nextstep}
                    prevstep={this.prevstep}
                    handlechange={this.handlechange}
                    values={values}
                    />
                )
            case 3:
                return(
                    <Education
                    nextstep={this.nextstep}
                    prevstep={this.prevstep}
                    handlechange={this.handlechange}
                    values={values}
                    />
                )
            case 4:
                return(
                    <Confirm 
                    nextstep={this.nextstep}
                    prevstep={this.prevstep}
                    values={values}
                    />
                )
            // case 4:
            //     return <Success></Success>
        }
    }
}

export default Main