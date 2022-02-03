# flow-invalid-exported-annotation-bug

A minimal reproduction of some errors noticed with Flow in version 0.171.0 and within VS Code (using the standard VS Code Flow extension).

## Setup:
1. Ensure classic yarn (v1) is installed globally before cloning the repo
2. `yarn install` to fetch all dependencies, `yarn flow` to start the Flow server
3. Open the project in VS Code, ensure the Flow Language Support extension is installed (v1.9.2)

## Steps to reproduce
1. Open `Component.jsx` in the text editor. Notice that three Flow errors are reported in the Problems tab below
2. Then, open `helpers.js` in the text editor

## What is expected to happen
Errors of the form:
```
Cannot use property one on $ObjMap [1] in an export position. Please provide an (alternative) annotation for property
one [2]. [invalid-exported-annotation]
```
should appear highlighted on lines 15, 16, and 17 in `helpers.js`

## What happens instead
The errors actually disappear when the file is opened, and only reappear when the file is closed.
