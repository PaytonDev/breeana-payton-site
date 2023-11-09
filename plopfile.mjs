export default function (plop) {
  // create your generators here
  plop.setGenerator("component", {
    description: "Add a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile: "plop-templates/Component.module.css.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "plop-templates/Component.test.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop-templates/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.types.tsx",
        templateFile: "plop-templates/types.tsx.hbs",
      },
    ], // array of actions
  });
}
