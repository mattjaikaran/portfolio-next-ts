This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- NextJS w/ TypeScript
- SCSS modules
- React Hook Form
- Hygen CLI
  - Pages
  - Components
    - Component File
    - Stylesheet
    - Unit Test (coming soon)
  - Forms
- Bash

## CLI
Using [Hygen](https://www.hygen.io/) to scaffold pages, components, forms. All generators are located in `_templates` directory.

Install Hygen globally
```bash
$ npm i -g hygen
or using npx
$ npx hygen
```

### Components
Create a new component named MyComponent in `@/components/shared/MyComponent/index.tsx`
```bash
  $ hygen component new
  1. What is the component name? MyComponent
  2. What is the component type? shared
  3. Do you want to add a stylesheet? (y/N) y
  
  or using flags
  $ hygen component new --name MyComponent --type shared --hasStyles
```

Adding a stylesheet will 
1. create the stylesheet in `@/components/MyComponent/MyComponent.module.scss`
2. will import the stylesheet into MyComponent and include it in the parent div

### Pages
To create a new page named MyPage in `pages/my-page.ts`
```
  $ hygen page new
  1. What is the page title? MyPage
  2. What is the page description? this is my description
  
  or
  $ hygen page new --title MyPage --desc this is my description
```

### Forms
Create a new form named MyForm in `@/components/forms/utils/MyForm/index.tsx`
```bash
  $ hygen form new
  1. What is the form name? MyForm
  2. What is the form type? utils
  
  or
  $ hygen form new --name MyComponent --type utils
```

# Installation

First, run the development server:

```bash
git clone URL
yarn
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.