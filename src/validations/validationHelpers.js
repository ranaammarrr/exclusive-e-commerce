
export const required = value => (value ? undefined : 'Required');

export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const isEmail = value =>
    value && value.includes('@') ? undefined : 'Invalid email address';


export const isValidPhoneNumber = value => {
    if (value !== 'string') {
        return 'Must be a number!';
    }

    const phoneNumberDigits = value.replace(/[^0-9]/g, '');
    return phoneNumberDigits.length === 11 ? undefined : 'Invalid phone number';

};

export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);
