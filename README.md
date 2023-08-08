# this repo will use an github action

local actions:

1) create your project

npm init -y                   #create pckage.json
npm install typescript -D
npm install express
npm install @types/express -D
npx tsc --init          #Create  tsconfig

2) set rootDir as ./src, set outDir as ./dist 

for test our tsc create src/index.js
content:
console.log("my first Github action")

execute tsc

3) install expres (indes.ts)

//this is an action type Node + Express + Typescript + EsLint
console.log("hi") 
import express ,{ Request, Response} from 'express';

const app = express();
const port = 8000;

app.get("/", (req: Request, res: Response) =>{
    res.send("Hola desde Express")
})

app.listen(port,()=>{
    console.log('App escucha por http://localhost:8000');
})

4) modifiy package.json
replace "test" by "build: tsc" and run npm

5) install esLint

Step 1: Installation
First, install the required packages for ESLint, TypeScript, and this plugin:

npm
Yarn
pnpm
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript

Step 2: Configuration
Next, create a .eslintrc.cjs config file in the root of your project, and populate it with the following:

.eslintrc.cjs
/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  "rules": {
            "no-console": "warn"
   }
};

6) test your app: npx eslint src/

7) push your project to github