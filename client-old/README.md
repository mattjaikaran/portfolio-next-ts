# Portfolio Front End

## Technologies

- [NextJS](https://nextjs.org/)
- TypeScript
- SCSS modules
- [Mantine](https://mantine.dev/)
  - [Mantine Form](https://mantine.dev/form/use-form/)
- [Hygen CLI](https://www.hygen.io/)
  - Pages
  - Components
    - Component File
    - Stylesheet
    - Unit Test (coming soon)
  - Forms
- Bash Scripting
  - `next-arch.sh` scaffolds the front end architecture

# Installation

First, run the development server:

```bash
git clone URL
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## CLI

Using Hygen to scaffold pages, components, forms. All generators are located in `_templates` directory.

Install Hygen globally

```bash
$ npm i -g hygen
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

```bash
$ hygen page new
1. What is the page title? MyPage
2. What is the page description? this is my description

or
$ hygen page new --title MyPage --desc this is my description
```

### Views

Create a new view named TestView in `@/views/dotcom/TestView/index.tsx`

```bash
  $ hygen view new
  1. What is the view name? TestView
  2. What is the view type? dotcom
  3. Do you want to add a stylesheet? (y/N) y

  or using flags
  $ hygen view new --name TestView --type dotcom --hasStyles
```

### Forms

Forms are extracted from actual components to provide a better separation of concerns.

Create a new form named MyForm in `@/components/forms/utils/MyForm/index.tsx`

```bash
$ hygen form new
1. What is the form name? MyForm
2. What is the form type? utils

or
$ hygen form new --name MyComponent --type utils
```
