// prettier-ignore
module.exports = {
  scripts: {
    "build:readme": "../../node_modules/.bin/pkg-to-readme --template ./readmeTemplate.ejs --force && ../../node_modules/.bin/documentation readme src/** --markdown-toc=false --section API && ../../node_modules/.bin/doctoc README.md",
    "build:flow:copy-source": "../../node_modules/.bin/flow-copy-source -v src",
    "build:flow": "nps 'build:flow:copy-source dist' 'build:flow:copy-source compat/cjs'",
    "build:src:bundle": "../../node_modules/.bin/rollup -c ../../rollup.config.js",
    "build:src:clean": "rm -rfv dist compat",
    "build:src": "nps 'build:src:clean' 'build:src:bundle' 'build:flow'",
    "prepack": "nps 'build:src'",
    "version": "nps 'build:readme' && git add README.md",
  }
};
