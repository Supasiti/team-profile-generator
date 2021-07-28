// default
const validateDefault = (obj, name, type) => {
  if (typeof obj !== type) {
    console.error(`${name} must be of type ${type}`);
    return false;
  }
  return true;
}

// email
const validateEmail = (obj, name) => {
  if( validateDefault(obj, name, 'string')) {
    // check if it has @ sign
    if (obj.split('').includes('@')) return true;
    console.error(`${name} must be of type email`);
    return false;
  }
  return false;
}

// phone
const validatePhone = (obj, name) => {
  if( validateDefault(obj, name, 'string')) {
    const phrases = obj.split(' ');
    if (phrases.some( (phrase) => isNaN(phrase))) {
      console.error(`${name} must be a phone number`);
      return false;
    }
    return true;
  }
  return false;
}


validateType = (obj, name, type) => {
  if (type === 'email') return validateEmail(obj, name);
  if (type === 'phone') return validatePhone(obj, name);
  return validateDefault(obj, name, type);
}

module.exports = {
  validateType
}