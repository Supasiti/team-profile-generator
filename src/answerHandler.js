const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const { writeToFile } = require('./fileWriter');
const generateContent = require('./htmlGenerator');
 
const teamMembers = [];

const parseManager = (answer) => {
  const {name, id, email, officeNumber} = answer;
  const manager = new Manager(name, id, email, officeNumber);
  teamMembers.push(manager);
}

const parseEngineer = (answer) => {
  const {name, id, email, github} = answer;
  const engineer = new Engineer(name, id, email, github);
  teamMembers.push(engineer);
}

const parseIntern = (answer) => {
  const {name, id, email, school} = answer;
  const intern = new Intern(name, id, email, school);
  teamMembers.push(intern);
}

// handle when all the information about a team member has been collected
const handleAnswer =  (answer, role) => {
  if (role === 'manager') parseManager(answer);
  if (role === 'engineer') parseEngineer(answer);
  if (role === 'intern') parseIntern(answer);
};
// handle when the user finishes adding all their team members
const handleFinish = () => {
  console.log(`
\x1b[32mGenerating the web page....\x1b[0m`);

  const content = generateContent(teamMembers);
  writeToFile('./dist/index.html', content); // file path relative to the file that is calling it
};

module.exports = {
  handleAnswer, handleFinish
};
