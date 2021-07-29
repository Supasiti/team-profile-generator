// const Manager = require('../lib/manager');
// const Engineer = require('../lib/engineer');
// const Intern = require('../lib/intern');

const roleOtherInfos = {
  manager: (manager) => 
`<li class="list-group-item">Office Number: <span>${manager.officeNumber}</span></li>`,
  engineer: (engineer) => 
`<li class="list-group-item">
  GitHub: <span><a href="https://www.github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></span>
</li>`,
  intern: (intern) => 
`<li class="list-group-item">School: <span>${intern.getSchool()}</span></li>`
}

const generateOtherInfoList = (employee) => {
  const role = employee.getRole().toLowerCase();
  if (role in roleOtherInfos) return roleOtherInfos[role](employee);
  return ''
};

const generateCard = (employee) => {
  return `<div class="col">
  <div class="card shadow-lg bg-light bg-gradient">
    
    <div class="card-header bg-primary text-center text-light">
      <h3 class="card-title my-4">${employee.getName()}</h3>
      <h4 class="card-subtitle mb-2">${employee.getRole()}</h4>
    </div>
    
    <div class="card-body mx-2 my-3">
      <ul class="list-group">
        <li class="list-group-item">
          ID: <span>${employee.getId()}</span>
        </li>
        <li class="list-group-item">
          Email: <span><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></span>
        </li>
        ${generateOtherInfoList(employee)}
      </ul>
    </div>
  </div>
</div>`
}

// const manager = new Manager('Thara', 1, 'thara@email.com', 2);
// console.log(generateCard(manager));

// const engineer = new Engineer('Thara', 1, 'thara@email.com', 'supasiti');
// console.log(generateCard(engineer));

// const intern = new Intern('Thara', 1, 'thara@email.com', 'University');
// console.log(generateCard(intern));

module.exports = generateCard