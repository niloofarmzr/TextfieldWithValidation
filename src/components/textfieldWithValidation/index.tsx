import TextField from '@mui/material/TextField';
import {isEmailValid, isLatinCharacterValid, isMobileNumberValid, isNumberValid} from '../../regex';
import React, {useEffect, useState} from 'react';
import {ValidationTypes} from "../../types";

type Props = {
    name: string,
    validation: ValidationTypes,
    defaultValue?: string,
    onChange: (name: string, value: string ) => void,
    [key: string]: any
}

type Error = {
    hasError: boolean,
    errorMessage: string
}

const validations = {
    [ValidationTypes.LatinCharacters]: isLatinCharacterValid,
    [ValidationTypes.MobileNumber]: isMobileNumberValid,
    [ValidationTypes.Email]: isEmailValid,
    [ValidationTypes.Number]: isNumberValid,
};

const errorMessages = {
    [ValidationTypes.LatinCharacters]: 'Please use latin characters!',
    [ValidationTypes.MobileNumber]: 'The mobile number is incorrect!',
    [ValidationTypes.Email]: 'The email is incorrect!',
    [ValidationTypes.Number]: 'Please use numbers only!',
};
const TextFieldWithValidation = ({name, validation, defaultValue = '', onChange, ...props}: Props) => {
    const [error, setError] = useState<Error>({hasError: false, errorMessage: ''})


    useEffect(() => {
        if (defaultValue) handleSetValue(defaultValue);
    }, [defaultValue]);

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        handleSetValue(value);
    };

    const handleSetValue = (value: string): void => {
        const hasError = !validations[validation](value);
        const errorMessage = hasError ? errorMessages[validation] : '';
        setError({hasError, errorMessage})
        onChange(name, hasError ? '' : value);
    };

    return (
        <TextField
            helperText={error.hasError ? error.errorMessage : ''}
            error={error.hasError}
            onChange={handleChangeInput}
            {...props}
        />
    );
};

export default TextFieldWithValidation;
