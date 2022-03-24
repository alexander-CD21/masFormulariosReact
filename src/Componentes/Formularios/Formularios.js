import React, { useState,Component } from "react";

const Formulario = (props) =>{
    const [firstNameError,setFirstNameError] = useState('');
    const [lastNameError,setLastNameError] = useState('');
    const [emailError,setEmailError] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const [comfirmPasswordError,setComfirmPasswordError] = useState('');

    const{data, setData} = props;
    
    const cambioFirstName = (event) => {
        setData({
            ...data,
            [event.target.id] : event.target.value
        });
        
        if(event.target.value.length > 0 ){
            console.log(event.target.value.length);
            if(event.target.value.length <= 2){
                setFirstNameError('Firstname must be 2 character or longer!');
            }else{
                setFirstNameError('');
            }
        }else {
            setFirstNameError('');
        }
        
    } 
    const cambioLastName = (event) => {
        setData({
            ...data,
            [event.target.id] : event.target.value
        });
        
        if(event.target.value.length > 0 ){
            console.log(event.target.value.length);
            if(event.target.value.length <= 2){
                setLastNameError('Lastname must be 2 character or longer!');
            }else{
                setLastNameError('');
            }
        }else {
            setLastNameError('');
        }
        
    } 
    const cambioEmail = (event) => {
        setData({
            ...data,
            [event.target.id] : event.target.value
        });
        
        if(event.target.value.length > 0 ){
            console.log(event.target.value.length);
            if(event.target.value.length <= 5){
                setEmailError('Email must be 5 character or longer!');
            }else{
                setEmailError('');
            }
        }else {
            setEmailError('');
        }
        
    } 

    const cambioPassword = (event) => {
        setData({
            ...data,
            [event.target.id] : event.target.value
        });
        
        if(event.target.value.length > 0 ){
            
            if(event.target.value.length < 8){
                setPasswordError('Email must be 8 character or longer!');
            }else{
                setPasswordError('');
            }
        }else {
            setPasswordError('');
        }

        if(event.target.value !== data.comfirmPassword){
            setComfirmPasswordError('passsword must match');
        }else{
            setComfirmPasswordError('');
        }
        
    } 
    const cambioComfirmPassword = (event) => {
        setData({
            ...data,
            [event.target.id] : event.target.value
        });
        
       if(event.target.value !== data.password){
           setComfirmPasswordError('password must match');
       }else {
           setComfirmPasswordError('');
       }
        
    } 

    {/*
    // no se puede aplicar una sola funcion porque no realiza lo esperado 
    const cambio = (event) =>{
        setData({
            ...setData,
            [event.target.id] : event.target.value
        });

        if(event.target.value.length > 0 ){
            console.log(event.target.value.length);
            if(event.target.value.length <= 2){
                setFirstNameError('Firstname must be 2 character or longer!');
                setLastNameError('LastName must be 2 character or longer!');
                setEmailError('Email must be 2 character or longer');
            }else{
                setFirstNameError('');
                setLastNameError('');
                setEmailError('');
            }
        }else{
            setFirstNameError('');
            setLastNameError('');
            setEmailError('');
        }
    }
        
*/}
    return (
        <form>
            <div>
                <label htmlFor="firstName">
                    FirstName: 
                </label>
                <input type="text" id="firstName" onChange={(event) => cambioFirstName(event)} />
                {
                    firstNameError ? <p style={{color:'red'}}> {firstNameError} </p> : ''
                }
            </div>

            <div>
                <label htmlFor="lastName">
                    LastName: 
                </label>
                <input type="text" id="lastName" onChange={(event) => cambioLastName(event)} />
                {
                    lastNameError ? <p style={{color:'red'}}> {lastNameError} </p> : ''
                }
            </div>

            <div>
                <label htmlFor="email">
                    Email: 
                </label>
                <input type="text" id="email" onChange={(event) => cambioEmail(event)} />
                {
                    emailError ? <p style={{color:'red'}}> {emailError} </p> : ''
                }
            </div>

            <div>
                <label htmlFor="password">
                    Password: 
                </label>
                <input type="password" id="password" onChange={(event) => cambioPassword(event)} />
                {
                    passwordError ? <p style={{color:'red'}}> {passwordError} </p> : ''
                }
            </div>

            <div>
                <label htmlFor="comfirmPassword">
                    ComfirmPassword: 
                </label>
                <input type="password" id="comfirmPassword" onChange={(event) => cambioComfirmPassword(event)}/>
                {
                    comfirmPasswordError ? <p style={{color:'red'}}> {comfirmPasswordError} </p> : ''
                }
            </div>

        </form>
    )
}
export default Formulario ;