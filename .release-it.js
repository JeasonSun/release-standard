const path = require('path');
const template = path.resolve(__dirname, 'changeLogTemplate.hbs');
console.log(template, '~~~~~')
module.exports = {
  git: {
    changelog:
      "auto-changelog --commit-limit false --unreleased --template ./changeLogTemplate.hbs",
  },
  hooks: {
    "after:bump": "auto-changelog -p",
  },
};
