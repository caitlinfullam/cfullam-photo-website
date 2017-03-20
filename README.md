# Caitlin Fullam's Photography Website

## Installation

```bash
npm install
```

## Running development

Make sure you are on the `source` branch

```bash
git branch
git checkout source
```

Now run metalsmith and an http-server in separate terminals
```bash
nodemon metalsmith.js
```
To restart metalsmith, type `rs` into the terminal window and press enter.

```bash
cd dist/
http-server
```

## Deploying

```bash
git add .
git commit -m "this is your commit message. Make it descriptive"
git subtree push --prefix dist origin gh-pages
```
