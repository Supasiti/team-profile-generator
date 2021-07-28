
validateType = (obj, name, type) => {
  if (typeof obj !== type) {
    console.error(`${name} must be of type ${type}`);
    return false;
  }
  return true
}

module.exports = {
  validateType
}