const fs = require("fs");

const commitTemplate = fs.readFileSync("commit.hbs").toString();

module.exports = {
  plugins: {
    "@release-it/conventional-changelog": {
      infile: "CHANGELOG.md",
      preset: "angular",
      writerOpts: {
        commitPartial: commitTemplate,
      },
    },
  },
};
