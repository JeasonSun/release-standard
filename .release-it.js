const path = require('path');
const template = path.resolve(__dirname, 'changeLogTemplate.hbs');
module.exports = {
  git: {
    changelog:
      `auto-changelog --commit-limit false --unreleased --template ${template}`,
  },
  hooks: {
    "after:bump": `auto-changelog -p --template json`,
  },
  npm: {
    publishConfig: {
      registry: 'http://10.60.0.115:8989/'
    }
  }
};
