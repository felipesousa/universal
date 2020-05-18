---
title: "Using relative paths with TypeScript"
date: "2020-03-20"
category: posts
lang: en
---

Given the amount of functionality that we see receiving within the programming languages, we need for new ways to improve, automate, clean and create good practices so that we have an application that is better, more scalable and consistent.

In the world where modularizing and distributing code traces has become standard ([we cannot forget the famous case of the 11-line library that caused a considerable problem!](https://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/)), naturally we will have moments where we will have a chain of 'imports' either of dependence or of local import too large, which is not considerably negative, but the problem starts when we think of something common: refactor.

## Introduction

Imagine a use case where we have a simple code tree similar to this:

- _src/_
  - _config/_
    - **_constants.ts_**
  - _components/_
    - **_hello.ts_**
  - _services/_
    - **_service.ts_**
  - _screens/_
    - _home/_
      - **_home.screen.ts_**
- **_tsconfig.json_**

The file **src/screens/home/home.screen.ts** has this content:

```typescript
import Hello from '../../components/hello';
import Service from '../../services/service';
import config from '../../config/constants';

class HomeScreen ...
```

Nothing new here, but looking more closely at the **paths** of lines 1, 2 and 3, we are importing the files very manually, in case we move a file, or an entire folder to another point in the application, we will have to manually import each file, today not a problem, but imagine having a big application, with a lot of files, dependencies ... Sorting a possible refactor would be at least tiring and even worse, stressful

### and solutions?

Many solutions, from auto-imports, plugins to identify export / import, integrations for VSCode, Vim, etc. However, they are additional tools that depend on an editor to work, the idea is not just to automate, but to solve the problem of writing or knowing exactly the exact path to a file.

To solve this problem, we are just going to add 2 properties within our **tsconfig.json** file:

```json
"moduleResolution": "node",
"baseUrl": "./src/"
```

The **moduleResolution** property is how we will define the import strategy, where in this case, the possible values are: **node** or **classic**, this being the default value. When with **node** value imports will follow the **base/relative** model, a model commonly known when we are importing something that exists inside the **node_modules** folder, where we do not need to define the **node_modules/module**, but only the name of the module, this base being the directory you define within the **baseUrl** property, which defines the folder where the imports will get.

In our case, the value of **baseUrl** has been configured to define our **src/** folder, so any import you do within the application must take care that you will be referencing from the **./src/** folder and not more within the real path of the file you are editing. Let's look at the same example of the **home.screen.ts** code to understand it better:

```typescript
import Hello from 'components/hello';
import Service from 'services/service';
import config from 'config/constants';

class HomeScreen ...
```

For each file you import, the typescript compiler will assign the written path as the **relative** value of the real path, thus completing the model commented on before **base/relative**, where base is taken within **baseUrl** at the moment compilation. So we can only solve the import problem without having to worry if you have assigned the right file, or have not forgotten a sequence of **../** during the imports.

See you later! 🎡
