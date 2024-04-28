# React + Vite

## Step 1: Create a react app using vite
Commands:
-> npm create vite@latest my-project  
-> cd my-project
->npm install

## Step2: Setup Tailwind CSS
Commands
->npm install -D tailwindcss postcss autoprefixer
->npx tailwindcss init -p

### Now, make some changes in your tailwind.config.js, it should look like this 

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Now, add some code in your index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

## Step3: 
Command:
->npm run dev

Now your app will get started and you can see that changes due to tailwind

## Step4:
In this app, I have made varius components like carousel, navbar usinf Daisy ui:
To setup the daisy ui in your app, add some code into your tailwind.config.css file:

->  plugins: [require("daisyui")],


