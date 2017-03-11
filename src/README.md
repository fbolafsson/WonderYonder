# Code style guideline

  This is just a basic guideline I followed when making this project.

  NOTE: I originally had eslint enabled in atom but at some point turned it off so there might be some atom specific lint errors that show up.

## General

  * ES6 syntax.
  * When doing imports always do them at the top of the file.
  * Imports from node_modules should be put together and when importing internal modules seperate by a newline.
    * node_modules
    * inernal modules
    * css
  * Imports can be done with src acting as a root for internal modules, no need for relative lookup (`../../../../somefile.ext`).
  * Don't use `var`, use `const` and `let`.
  * When declaring objects/arrays always put a comma on each line (less git diff output).
  * Preferably bind functions in the constructor, otherwise where they should be called.
  * Separate logic by newline (functions, after declaring variabels).
  * Use `'` instead of `"` (this obviously has exceptions but use the former whenever possible).
  * Use template strings when wrapping strings with values like so: `` { `This is some text showing some value: ${ someVariableInCode }`  }' ``.
  * Indentation = 2 whitespaces, [Tabs or Spaces analysis](https://ukupat.github.io/tabs-or-spaces/).
  * When a file becomes too large try to refactor it. Large files can become hard to manage.

## .jsx

  * When a jsx tag has more than 2 options/settings put each on a single line and close it on a separate newline.
  * When declaring the options in jsx tags (like className) use `"` instead of `'`.

## __ tests __

  * Try to test as much of the funcionality as possible, testing component specific rendering is not as important as testing reducers / pure functions.
