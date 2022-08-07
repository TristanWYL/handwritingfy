<div align="center">
  <img src="./images/logo.png" style="width: 100px;"><br>
  <img src="./images/handwritingfy.png" style="width: 250px;">
</div>

# Overview

Tired of webpages with 'perfect' typography, and pictures with all perfect lines/curves? Want to make them more realistic? Give `HandwritingFy` a try by a click.
TODO: Wording, refer to xkcd.chart

`HandwritingFy` is a small toy which eanbles to change the style of your webpage into a completely handwriting one.

TODO: screenshot

# How

```bash
# install dependencies
yarn install

# dev for the popup of chrome extension
yarn dev

# Build all
yarn build
```

# Production

## chrome extension

Currently this tool has been published as a chrome extension, and you can install it with [this link](TODO:).

Within this extension, around 20 handwriting styles can be played around.
TODO: Screenshot

## js cdn

If you want to integrate this handwriting style into your own webpage, you can put the following script tag at the end of the `body` tag of your html file. Refer to [example](example/example.html) for details.

```html
<script src="https://cdn.jsdelivr.net/gh/TristanWYL/handwritingfy@1.0.1/dist/handwritingfy.script.iife.min.js"></script>
```

# Credit

This chrome extension is inspred by [this repository](https://github.com/timqian/chart.xkcd). Credit to the author @timqian.

# Other topics

## How to publish a javascaript module

Use [jsdelivr.com](https://www.jsdelivr.com/?docs=gh) and github to host the js module.

1. [Create a github release with a **version number**](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release),
2. Then the CDNed file could be accessible at https://cdn.jsdelivr.net/gh/TristanWYL/handwritingfy@\*\*version_number\*\*/dist/handwritingfy.script.iife.min.js. **NOTE**: Replace **version number** with the release number.
