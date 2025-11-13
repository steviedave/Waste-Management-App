# Waste App

This is a React application. Follow the instructions below to set up and run the app locally.

## Prerequisites

- Node.js (v16 or higher recommended)  
- Yarn package manager   

## Installing Yarn

If you don’t have Yarn installed, you can install it using npm (comes with Node.js):

 ```bash
 npm install --global yarn
```

Check installation:

```bash
yarn -v
``` 

## Installation

1. Clone the repository:  
```bash
git clone <repository-url>
cd waste-app
```

2. Install dependencies:  
```bash
yarn install
```  

Tip: 'yarn install' reads the package.json file and installs all required packages automatically.

## Running the App

Start the development server:  
```bash
yarn start
```  

- The app will run at http://localhost:3000 by default.  
- Any changes you make to the code will automatically reload the browser.  

## Building for Production

Create an optimized production build:  
```bash
yarn build
```  

- The build will be in the 'build' folder.  
- You can serve it using any static server or deploy it to a hosting service.  

## Common Commands

- Lint the code:  
```bash
yarn lint
```  

- Run tests:  
```bash
yarn test
```  

- Install a new package:  
```bash
yarn add <package-name>
```  

- Remove a package:  
```bash
yarn remove <package-name>
```  

## Notes for Beginners

- Make sure Node.js and Yarn are installed correctly by running:  
```bash
node -v
```  
```bash
yarn -v
```  

- Always run 'yarn install' after cloning to ensure all dependencies are available.  
- Use 'yarn start' during development; only use 'yarn build' when you are ready to deploy.  
- If you encounter issues like "port already in use" or missing dependencies, restart the terminal and run 'yarn install' again.  

## Getting Help

- Check the React documentation: https://reactjs.org/docs/getting-started.html  
- For Yarn issues: https://classic.yarnpkg.com/en/docs/  
- If you still have problems, check issues in the repository or ask for help on forums like Stack Overflow.
