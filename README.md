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

## Resizing images

```bash
mogrify -path large/ -filter Triangle -define filter:support=2 -thumbnail 1800 -unsharp 0.25x0.25+8+0.065 -dither None -posterize 136 -quality 82 -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB -strip original/*
mogrify -path small/ -filter Triangle -define filter:support=2 -thumbnail 550 -unsharp 0.25x0.25+8+0.065 -dither None -posterize 136 -quality 82 -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB -strip original/*
```
