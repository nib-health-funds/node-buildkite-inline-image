var ansiEscapeCharacters = {
    ESC: '\x1B',
    BEL: '\x07'
};

var buildKiteInlineImageANSICode = ']1338;';

function wrapWithAnsiEscapeCharacters(textToWrap) {
    return ansiEscapeCharacters.ESC + textToWrap + ansiEscapeCharacters.BEL;
}

function buildkiteInlineImageCode(imageUrl, altText) {

    if(!imageUrl) {
        throw new Error('Missing parameter \'url\'.');
    }

    var inlineImageCode = buildKiteInlineImageANSICode + 'url=\'' + imageUrl + '\';';

    if(altText) {
        inlineImageCode += 'alt=\'' + altText + '\'';
    }

    return inlineImageCode;
}

function inlineArtifactImage(artifactPath, altText) {
    return wrapWithAnsiEscapeCharacters(buildkiteInlineImageCode('artifact://' + artifactPath, altText));
}

function inlineURLImage(imageUrl, altText) {
    return wrapWithAnsiEscapeCharacters(buildkiteInlineImageCode(imageUrl, altText));
}

module.exports = {
    inlineArtifactImage: inlineArtifactImage,
    inlineURLImage: inlineURLImage
};
