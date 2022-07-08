import React, { useState } from 'react';

const Form = (props) => {
    console.log('props in form', props);
    const storeHandler = (e) => {
        if (validateForm(props.formUser)) {
            props.storeHandler();
        }
    }

    const modifiedHandler = (e) => {
        if (validateForm(props.formUser)) {
            props.modifiedHandler();
        }
    }

    const validateForm = (user) => {
        let isNameValid = validateName(user.userName);
        let isEmailValid = validateEmail(user.email);
        let isPhoneValid = validatePhone(user.phone);

        if (!isNameValid) alert("incorrect NAME");
        if (!isPhoneValid) alert("incorrect Phone");
        if (!isEmailValid) alert("incorrect Email");

        return isNameValid && isEmailValid && isPhoneValid;
    }

    const validateName = (name) => {
        return name.match(/[A-Z]/gi);
    }

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    const validatePhone = (phone) => {
        return phone.match(/\d/g);
    }

    return (
        <form id="contact-form" action="#">
            <div className="mb-3 form-control-md box-lists">
                <input type="text" placeholder="Name" className='form-control input rounded-0' name='userName' value={props.formUser.userName} onChange={props.handleUserInput} />
            </div>
            <div className="mb-3 form-control-md box-lists">
                <input type="text" placeholder="Phone" className="form-control input rounded-0" name='phone' value={props.formUser.phone} onChange={props.handleUserInput} />
            </div>
            <div className="mb-3 form-control-md box-lists">
                <input type="email" placeholder="Email" className="form-control input rounded-0" name='email' value={props.formUser.email} onChange={props.handleUserInput} />
            </div>
            <button className='btn input rounded-0 w-100' id='editButton' hidden={props.saveMode} type="button" onClick={modifiedHandler}>Update</button>
            <button className='btn input rounded-0 w-100' id='saveButton' hidden={!props.saveMode} type="button" onClick={storeHandler}>Save</button>
        </form>
    );
};

export default Form;