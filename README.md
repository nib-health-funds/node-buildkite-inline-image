# @nib/buildkite-inline-image

Provides an easy way to output inline images into your buildkite output log from node.

Handles generating the correct ANSI control characters and buildkite inline image syntax.

Read more at the buildkite docs [here](https://buildkite.com/docs/builds/images-in-log-output).

## Usage
```javascript
var buildkiteInlineImage = require('@nib/buildkite-inline-image');

// Inline image from url
buildkiteInlineImage.inlineURLImage('https://github.com/nib-health-funds/node-buildkite-inline-image/blob/master/docs/inline_image_example.png');

// Or, from an uploaded artifact
var artifactFilePath = '/path/to/artifact.png';
buildkiteInlineImage.inlineArtifactImage(artifactFilePath);
```
The above would result in something similiar to the following output:
![Usage example output](https://github.com/nib-health-funds/node-buildkite-inline-image/blob/master/docs/inline_image_example.png)
