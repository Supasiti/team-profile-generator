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

const handleAnswer =  (answer, role) => {
  if (role === 'manager') parseManager(answer);
  if (role === 'engineer') parseEngineer(answer);
  if (role === 'intern') parseIntern(answer);
};

const handleFinish = () => {
  console.log('Generating the web page!');
  // console.log(teamMembers);

  const content = generateContent(teamMembers);
  writeToFile('../dist/index.html', content);
};

module.exports = {
  handleAnswer, handleFinish
};
