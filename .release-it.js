const path = require('path');
const template = path.resolve(__dirname, 'changeLogTemplate.hbs');
module.exports = {
  git: {
    changelog:
      `auto-changelog --commit-limit false --unreleased --template ${template}`,
  },
};
