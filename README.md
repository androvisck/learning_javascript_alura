# Cypress Advanced

Steps to Run

### NodeJS
To install NodeJS please follow this tutorial.
```
sudo apt install npm](https://www.geeksforgeeks.org/node-js/installation-of-node-js-on-linux/)
```
### Cypress
```
npm install cypress --save-dev
```
```
npx cypress open
```
### cypress.config.js 
```
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
         setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
      reporter: 'mochawesome',
      reporterOptions: {
        reportDir: 'cypress/results',
        overwrite: false,
        html: true,
        json: false,
        timestamp: "mmddyyyy_HHMMss"
    },
   
  }
});

```

### Mochawesome

```
npm install mochawesome --save-dev
```

### .env
```
DB_HOST="localhost"
DB_PORT=3306
DB_USER=root
DB_PASSWORD=suasenha
DB_DATABASE=testemed
SERVER_PORT=8080
SECRET=qualquercoisa
SECRET_KEY="qualquertextoaqui"
```

### Inside Web and Server folders
```
npm install` and `npm start
```

### To access Front-end
Open your browser and type: 
```
http://localhost:3000/
```

### To access Back-End, type:
```
http://localhost:8080/
```
### Create a .gitignore file, type:
```
.gitignore
```
