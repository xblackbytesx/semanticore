# Semanticore: A Semantically Awesome Component Library

Semanticore is a modern component library built with TypeScript, Vite, and the Lit library. Our goal is to create semantically awesome, easy-to-style native web components that can be seamlessly integrated into any project. By using Lit, we're able to create lightweight, efficient, and highly customizable components.

## Getting Started

To get started with Semanticore, first clone the repository:

```bash
git clone https://github.com/xblackbytesx/semanticore.git
cd semanticore
```

Next, install the necessary dependencies:

```bash
npm install
```

## Running the Development Environment

To start the development server, run the following command:

```bash
npm run dev
```

This will start the Vite development server, and you can view your components at `http://localhost:3000`.

## Building the Library

To build the library, run the following command:

```bash
npm run build
```

This command will compile your TypeScript code and build the library using Vite. The output files will be placed in the `dist` directory.

## Running Storybook

To run Storybook and view your components in an isolated environment, use the following command:

```bash
npm run storybook
```

This will start the Storybook development server at `http://localhost:6006`.

## Building Storybook

If you want to create a static version of your Storybook, run the following command:

```bash
npm run build-storybook
```

This will generate a static site in the `storybook-static` directory that can be deployed to any static hosting service.