const generateCard = require('./cardGenerator');

const generateCards = (employees) => {
  return employees.map((employee) => generateCard(employee)).join('');
};

const generateContent = (employees) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>

    <!-- bootstrap -->
    <link 
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
      crossorigin="anonymous">

    <!-- style sheet -->
    <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
  </head>

  <body class="min-100-vh">
    <section class="px-4 py-5 text-center bg-danger bg-gradient text-light">
      <h1 class="display-6 fw-bold">My Team</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Quickly access information on your team.
        </p>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          ${generateCards(employees)}
        </div>
      </div>
    </section>

    <!-- bootstrap script -->
    <script 
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
      crossorigin="anonymous">
    </script>
  </body>
</html>`
}

module.exports = generateContent;