const { writeFile } = require('fs'); 

// file path relative to the file that is calling it
const writeToFile = (filepath, string) => {
  writeFile(filepath, string, (err) => {
    if (err) console.error(err);
    console.log(`The file has been saved in ${filepath}`);
  });
};

module.exports = {
  writeToFile
}