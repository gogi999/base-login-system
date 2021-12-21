import validator from 'validator';
import isEmpty from 'is-empty';
import _ from 'lodash';

const validateRegisterInput = data => {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.passwordConfirm = !isEmpty(data.password2) ? data.password2 : "";
    
    if (validator.isEmpty(data.name)) {
        errors.name = 'Name field is required!';
    }
    
    if (validator.isEmpty(data.email)) {
        errors.email = 'Email is required!';
    } else if (!validator.isEmail(data.email)) {
        errors.email = 'Please fill valid email address!';
    }

    if (validator.isEmpty(data.password)) {
        errors.password = 'Password is required!';
    } else if (!validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters!';
    }

    if (validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm password field is required!';
    } else if (!validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match!';
    }

    return {
        errors,
        isValid: _.isEmpty(errors)
    };
}

export default validateRegisterInput;
