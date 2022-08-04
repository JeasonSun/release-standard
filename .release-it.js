module.exports = {
  git: {
    changelog:
      "auto-changelog --stdout --commit-limit false --unreleased --template changeLogTemplate.hbs",
  },
  hooks: {
    "after:bump": "auto-changelog -p",
  },
};
