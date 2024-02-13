import React, {useEffect, useState} from 'react'
import './App.css'
import TextFieldWithValidation from "./components/textfieldWithValidation";
import {ValidationTypes} from "./types";
import {Button} from "@mui/material";

type FormData = {
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string,
    age: string,
}

function App() {

    const [formData, setFormData] = useState<Partial<FormData>>({});

    useEffect(() => {
        console.log("Form Data: ", formData);
    }, [formData])
    const handleInputChange = (name: string, value: string): void => {
        setFormData(prevState => ({...prevState, [name]: value}))
    }

    const isFormValid = () => {
        // Only need to check for the existence of the required properties.
        // The properties with error will not exist on the formData object since they are not getting passed out of the TextFieldWithValidation component.
        return formData.firstName && formData.lastName && formData.email && formData.mobileNumber && formData.age
    }

    return (
        <div className='app'>
            <div className='form'>
                <h1>Form with Input Validations</h1>
                <p>This is a form with reusable input components that can handle custom validations easily.</p>
                <TextFieldWithValidation required name='firstName' label='First Name'
                                         validation={ValidationTypes.LatinCharacters} onChange={handleInputChange}/>
                <TextFieldWithValidation required name='lastName' label='Last Name'
                                         validation={ValidationTypes.LatinCharacters} onChange={handleInputChange}/>
                <TextFieldWithValidation required name='email' label='Email' validation={ValidationTypes.Email}
                                         onChange={handleInputChange}/>
                <TextFieldWithValidation required name='mobileNumber' label='Mobile Number'
                                         validation={ValidationTypes.MobileNumber} onChange={handleInputChange}/>
                <TextFieldWithValidation required name='age' label='Age' validation={ValidationTypes.Number}
                                         onChange={handleInputChange}/>
                <Button size="large" variant="contained" color="secondary" disabled={!isFormValid()}>SUBMIT</Button>
            </div>
        </div>
    )
}

export default App
