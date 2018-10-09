const gulp = require('gulp');
const fs = require('fs');

// Aligns the versions defined on the pom.xml with the versions defined in the platform
function alignVersionsWithPlatform(done) {
    console.log("Reading versions from ../../platform/versions.json ...");

    const versions = JSON.parse(fs.readFileSync('../../platform/versions.json', 'utf8'));
    let currentFile = fs.readFileSync('../pom.xml', 'utf8');

    Object.keys(versions.core).forEach((key) => {
        let version = versions.core[key].jsVersion;
        if (version) {
            currentFile = replaceVersion(currentFile, key, version);
        }
    });

    console.log("\nWriting \x1b[31m../pom.xml\x1b[0m file...");
    fs.writeFileSync('../pom.xml', currentFile);
    done();
}

function replaceVersion(input, artifact, version) {
    let regex = new RegExp('(<artifactId>' + artifact + '</artifactId>\\s*<version>)(.*)(</version>)');
    let matches = input.match(regex);
    if (matches && matches.length >= 3) {
        // colors reference: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
        if (matches[2] !== version) {
            console.log('\x1b[32m%s\x1b[0m changing from version \x1b[34m%s\x1b[0m to \x1b[32m%s\x1b[0m', artifact, matches[2], version);
            return input.replace(regex, '$1' + version + "$3");
        }
        console.log('\x1b[34m%s\x1b[0m already has the right version: \x1b[34m%s\x1b[0m', artifact, version);
    }
    return input;
}

exports.default = alignVersionsWithPlatform;
