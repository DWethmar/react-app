module.exports = plop => {
    plop.setPartial('projectName', require('./package.json').name);

    plop.setGenerator('react-typescript-package', {
        description: 'Create a Lerna React-component',
        // User input prompts provided as arguments to the template
        prompts: [
            {
                type: 'input',
                name: 'package',
                message: 'What is your package name?',
            },
            {
                type: 'input',
                name: 'component',
                message: 'What is your component name?',
            },
        ],
        actions: [
            // Lerna stuff
            {
                type: 'add',
                path: 'packages/{{camelCase package}}/package.json',
                templateFile: 'plop-templates/lerna/package.json.hbs',
                skipIfExists: true,
            },
            {
                type: 'add',
                path: 'packages/{{camelCase package}}/.gitignore',
                templateFile: 'plop-templates/lerna/.gitignore.hbs',
                skipIfExists: true,
            },
            {
                type: 'add',
                path: 'packages/{{camelCase package}}/README.md',
                templateFile: 'plop-templates/lerna/README.md.hbs',
                skipIfExists: true,
            },
            {
                type: 'add',
                path: 'packages/{{camelCase package}}/.env',
                templateFile: 'plop-templates/lerna/.env.hbs',
                skipIfExists: true,
            },
            // Add React components to a components.ts file in the lerna package
            {
                type: 'add',
                path: 'packages/{{camelCase package}}/components.ts',
                templateFile: 'plop-templates/lerna/components.ts.hbs',
                skipIfExists: true,
            },
            {
                type: 'append',
                path: 'packages/{{camelCase package}}/components.ts',
                pattern: `/* PLOP_INJECT_IMPORT */`,
                template: `import { {{pascalCase component}} } from './src/{{pascalCase component}}/{{pascalCase component}}';`,
            },
            {
                type: 'append',
                path: 'packages/{{camelCase package}}/components.ts',
                pattern: `/* PLOP_INJECT_EXPORT */`,
                template: `    {{pascalCase component}},`,
            },
            // React stuff
            {
                type: 'add',
                path: 'packages/{{camelCase package}}/src/{{pascalCase component}}/{{pascalCase component}}.tsx',
                templateFile: 'plop-templates/react/Component.tsx.hbs',
            },
            {
                type: 'add',
                path: 'packages/{{camelCase package}}/src/{{pascalCase component}}/{{pascalCase component}}.scss',
                templateFile: 'plop-templates/react/Component.scss.hbs',
            },
            {
                type: 'add',
                path: 'packages/{{camelCase package}}/src/{{pascalCase component}}/{{pascalCase component}}.props.ts',
                templateFile: 'plop-templates/react/Component.props.ts.hbs',
            },
            {
                type: 'add',
                path: 'packages/{{camelCase package}}/src/{{pascalCase component}}/{{pascalCase component}}.dummy.ts',
                templateFile: 'plop-templates/react/Component.dummy.ts.hbs',
            },
            {
                type: 'add',
                path: 'packages/{{camelCase package}}/src/{{pascalCase component}}/{{pascalCase component}}.test.tsx',
                templateFile: 'plop-templates/react/Component.test.tsx.hbs',
            },
            {
                type: 'add',
                path:
                    'packages/{{camelCase package}}/src/{{pascalCase component}}/{{pascalCase component}}.stories.tsx',
                templateFile: 'plop-templates/react/Component.stories.tsx.hbs',
            },
        ],
    });
};
