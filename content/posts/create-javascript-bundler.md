---
title: "Bundlify: Creating Your Own JS Bundler with bun.sh"
date: "2024-05-15"
legacyID: "create-javascript-bundler"
thumbnail: "📘"
description: "In the web development world, managing JavaScript efficiently can be challenging. Bundlers help by combining multiple files into one, making the code easier to manage and deploy. While tools like Webpack..."
published: true
latest: true
cover: "https://res.cloudinary.com/pritish007/image/upload/v1715774530/Personal%20Portfolio/Articles/BUNDLIFY_otew1d.png"
articleLink: "https://pritishsamal.xyz/blog"
tags:
  - JavaScript
  - Bun
  - Module
  - Bundler
---

## Introduction
In the web development world, managing JavaScript efficiently can be challenging. Bundlers help by combining multiple files into one, making the code easier to manage and deploy. While tools like Webpack and Rollup offer many features, sometimes a simpler solution is preferable. This guide will show you how to create your own simplistic JS bundler using bun.sh, covering dependency resolution, code transpilation, output generation, and detecting circular dependency, providing a straightforward approach to bundling your JavaScript projects.

## What is bun?
Bun.sh is an innovative JavaScript runtime and toolkit that aims to simplify and enhance the development experience for JavaScript developers. It provides a suite of powerful tools and features, including a bundler, package manager, test runner, all integrated into a single platform. One of the key feature of bun is the Bundler which we are going to use in our project.

**Bundler**: One of the core features of bun.sh is its bundler, which allows developers to bundle JavaScript files and their dependencies into a single, optimized output file. This simplifies the deployment process and improves performance by reducing the number of HTTP requests required to load a web page. Below is a simple example of how you can use bun.sh to bundle your JavaScript files:

```sh
# Install bun.sh globally
npm install -g bun

# Bundle your JavaScript files
bun bundle entry.js -o bundle.js
```

## Let's get started 

### Importing Required Modules

```js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execa } from 'execa';
```

(PS: make sure your `type` in package.json is set to **module** i.e. `"type": "module"`)

- `fs` module: This is used for reading and writing files.
- `path` module: This helps in handling and transforming file paths.
- `url` module: This converts `import.meta.url` to a file path, which is necessary to determine the current file's location.
- `execa` module: This is used to run external commands, in this case, to run the Bun CLI for transpiling code.


### Setting Up Paths
Converting URL to File Path:
```js
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```
These lines determine the file name and directory name of the current module.

### Helper Functions

1. _`readFile` helper function_:

```js
const readFile = (filePath) => {
  return fs.readFileSync(filePath, 'utf-8');
};
```
The above snippet reads a file synchronously and returns its content as a string.

2. _`resolveModule` path helper function_:

```js
const resolveModule = (filePath, baseDir) => {
  if (filePath.startsWith('.')) {
    return path.resolve(baseDir, filePath);
  }
  return require.resolve(filePath, { paths: [baseDir] });
};
```

Resolves the path of a module. If the path is relative _(starts with **.**)_, it resolves it relative to baseDir. Otherwise, it uses Node.js's require.resolve to find the module.

3. _transpiling code using Bun CLI_:

```js
const transpileCode = async (filePath) => {
  const { stdout } = await execa('bun', ['build', filePath, '--outfile', '/dev/stdout']);
  let filteredOutput = stdout
    .split('\n')
    .filter(line => !line.includes('stdout') && !line.match(/^\[\d+ms\]/))
    .join('\n');

  filteredOutput = filteredOutput.replace(/export\s+default\s+/g, 'module.exports = ');
  return filteredOutput;
};
```

This function runs the Bun CLI to transpile the file at filePath. It filters out unwanted Bun messages and replaces `export default` with `module.exports =` for CommonJS compatibility.

### Main bundling function:

```js
const bundleFiles = async (entryFile) => {
  let modules = {};
  let id = 0;
  let moduleStack = [];
  
  const addModule = async (filePath) => {
    if (modules[filePath]) {
      return modules[filePath].id;
    }

    if (moduleStack.includes(filePath)) {
      console.warn(`Circular dependency detected: ${moduleStack.join(' -> ')} -> ${filePath}`);
      return;
    }

    moduleStack.push(filePath);
    const moduleId = id++;
    const content = readFile(filePath);
    const dirName = path.dirname(filePath);

    const dependencies = [];
    const requireRegex = /require\(['"](.+?)['"]\)/g;
    const importRegex = /import .* from ['"](.+?)['"]/g;
    let match;

    while ((match = requireRegex.exec(content)) !== null) {
      dependencies.push(match[1]);
    }
    while ((match = importRegex.exec(content)) !== null) {
      dependencies.push(match[1]);
    }

    const resolvedDependencies = dependencies.map(dep => resolveModule(dep, dirName));
    const transpiledContent = await transpileCode(filePath);

    modules[filePath] = {
      id: moduleId,
      filePath,
      content: transpiledContent,
      dependencies: resolvedDependencies,
    };

    await Promise.all(resolvedDependencies.map(async (dep) => {
      if (moduleStack.includes(dep)) {
        console.warn(`Circular dependency detected: ${moduleStack.join(' -> ')} -> ${dep}`);
      } else {
        await addModule(dep);
      }
    }));

    moduleStack.pop();
    return moduleId;
  };

  await addModule(entryFile);

  const output = [];
  output.push(`
  (function(modules) {
    var installedModules = {};

    function require(moduleId) {
      if (installedModules[moduleId]) {
        return installedModules[moduleId].exports;
      }

      var module = installedModules[moduleId] = {
        id: moduleId,
        loaded: false,
        exports: {}
      };

      modules[moduleId].call(module.exports, module, module.exports, require);
      module.loaded = true;
      return module.exports;
    }

    return require(${modules[entryFile].id});
  })({
  `);

  Object.values(modules).forEach(module => {
    output.push(`  ${module.id}: function(module, exports, require) {`);
    output.push(module.content);
    output.push(`  },`);
  });

  output.push(`});`);
  return output.join('\n');
};
```

<!-- - Initialization: Initializes an empty modules object, a counter id, and an empty moduleStack.
- `addModule` function:
    - Checks if module already exists: if it does, returns its ID.
    - **Circular Dependency Detection**: Logs a warning if a circular dependency is detected.
    - Reads File Content: Reads the content of the file and its directory.
    - Extracts Dependencies: Uses regex to find require and import statements, resolving their paths.
    - Transpiles Code: Transpiles the code using the Bun CLI.
    - Stores Module Data: Stores module information in the modules object.
    - Recursively Adds Dependencies: Recursively processes dependencies, detecting circular dependencies.
- Builds Output: Constructs the output as a self-executing function that emulates a module system. -->


The `bundleFiles()` function is designed to take an entry JavaScript file and bundle it along with its dependencies into a single output file. This involves reading the files, resolving dependencies, transpiling the code, detecting circular dependencies, and finally constructing a bundled output.

- module storage and ID Counter:
    - modules: An object to store information about each module (file).
    - id: A counter to assign unique IDs to each module.
    - moduleStack: An array to keep track of the module processing stack for circular dependency detection.

    ```js
    let modules = {};
    let id = 0;
    let moduleStack = [];
    ```

- `addModule()` function
The core of `bundleFiles` is the `addModule` function which processes each module.

    - check for already processed module:

    ```js
    if (modules[filePath]) {
      return modules[filePath].id;
    }
    ```
    - if the module (file) has already been processed, return its ID to avoid redundant processing.
    - *Circular Dependency Detection*: If the module is already in the stack, it means there's a circular dependency. A warning is logged, and the function returns to prevent an infinite loop.

    ```js
    if (moduleStack.includes(filePath)) {
      console.warn(`Circular dependency detected: ${moduleStack.join(' -> ')} -> ${filePath}`);
      return;
    }
    ```

    - push module to stack:
    ```js
    moduleStack.push(filePath);
    ```

    - assign unique ID and read file content:
        - assign a unique ID to the module.
        - read the file content.
        - determine the directory name of the file for resolving relative paths.
    ```js
    const moduleId = id++;
    const content = readFile(filePath);
    const dirName = path.dirname(filePath);
    ```

    - extract dependencies: use regular expressions to find all require and import statements and extract their paths.

    ```js
    const dependencies = [];
    const requireRegex = /require\(['"](.+?)['"]\)/g;
    const importRegex = /import .* from ['"](.+?)['"]/g;
    let match;

    while ((match = requireRegex.exec(content)) !== null) {
      dependencies.push(match[1]);
    }
    while ((match = importRegex.exec(content)) !== null) {
      dependencies.push(match[1]);
    }
    ```

    - resolve dependencies: resolve the dependency paths relative to the current file's directory.

    ```js
    const resolvedDependencies = dependencies.map(dep => resolveModule(dep, dirName));
    ```

    - transpile the code: transpile the file content using the Bun CLI to ensure compatibility and to handle ES modules.

    ```js
    const transpiledContent = await transpileCode(filePath);
    ```

    - Store Module Information:

    ```js
    modules[filePath] = {
      id: moduleId,
      filePath,
      content: transpiledContent,
      dependencies: resolvedDependencies,
    };
    ```

     - process dependencies recursively:
        - For each resolved dependency, recursively call addModule.
        - If a circular dependency is detected during this process, log a warning.

    ```js
    await Promise.all(resolvedDependencies.map(async (dep) => {
      if (moduleStack.includes(dep)) {
        console.warn(`Circular dependency detected: ${moduleStack.join(' -> ')} -> ${dep}`);
      } else {
        await addModule(dep);
      }
    }));
    ```


    - pop module from stack:
    ```js
    moduleStack.pop();
    ```

    - Return Module ID:
    ```js
    return moduleId;
    ```

    - initial call to `addModule`: process entry file
    ```js
    await addModule(entryFile);
    ```

    - constructing the bundled output
        - create an array output to store the bundled code.
        - push the initial part of the IIFE (Immediately Invoked Function Expression) that will emulate the module system.
    ```js
    const output = [];
    output.push(`
    (function(modules) {
      var installedModules = {};

      function require(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }

        var module = installedModules[moduleId] = {
          id: moduleId,
          loaded: false,
          exports: {}
        };

        modules[moduleId].call(module.exports, module, module.exports, require);
        module.loaded = true;
        return module.exports;
      }

      return require(${modules[entryFile].id});
    })({
    `);
    ```

    - add each module to output:
    ```js
    Object.values(modules).forEach(module => {
      output.push(`  ${module.id}: function(module, exports, require) {`);
      output.push(module.content);
      output.push(`  },`);
    });
    ```

    - finalize the output:
    ```js
    output.push(`});`);
    ```

    - join and return the final output:
    ```js
    return output.join('\n');
    ```
    

_**gyst of `bundleFiles()` function:**_

- initializes storage for modules and a unique ID counter.
- defines a recursive addModule function to process each module and its dependencies.
- reads and transpiles each module, resolving dependencies and checking for circular dependencies.
- constructs a single bundled output in the form of an IIFE, emulating a module system.
- returns the final bundled code as a string.


### Entrypoint - `main()` function:

```js
const main = async () => {
  const entryFile = path.resolve(__dirname, 'target', 'index.js');
  const bundle = await bundleFiles(entryFile);
  const outputPath = path.resolve(__dirname, 'dist', 'bundle.js');

  if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  }

  fs.writeFileSync(outputPath, bundle, 'utf-8');
  console.log(`Bundle created at ${outputPath}`);
};

main();
```


- defines entry file: sets the entry file to `target/index.js`.
- bundles files: calls `bundleFiles()` with the entry file and receives the bundled code.
- ensures o/p directory exists: creates the output directory if it doesn't exist.
- writes bundle to o/p file: Writes the bundled code to `dist/bundle.js`.
- logs success message: logs the location of the created bundle.

## Conclusion
The code is a simplistic JS bundler that:

- reads and resolves dependencies from a target entry file.
- transpiles the code using the Bun CLI.
- detects circular dependencies.
- constructs a single bundled output file that emulates a module system

Here's the link to the complete code for your reference:
[github.com/CIPHERTron/bundlify](https://github.com/CIPHERTron/bundlify)