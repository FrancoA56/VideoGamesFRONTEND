export function Validate (imputs) {
    const errors = {};
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*\d).{6,10}$/;
    
    if (!imputs.user || imputs.user.length > 15) {
      errors.user = '*Username between 1 and 15 digits required';
    }
    if (!imputs.email || imputs.email.length > 35) {
      errors.email = '*Email must not be empty';
    } else if (!emailRegex.test(imputs.email)) {
      errors.email = '*Must be an email format';
    }
    if (!imputs.password) {
        errors.password = '*Password must not be empty';
    } else if (imputs.password.length < 6 || imputs.password.length > 10) {
      errors.password = '*Password between 6 and 10 digits required';
    } else if (!passwordRegex.test(imputs.password)) {
        errors.password = '*Password must have a number';
    }
    return errors;
  };