module.exports = {
  git: {
    changelog:
      "npx auto-changelog --stdout --commit-limit false --unreleased --template https://raw.githubusercontent.com/release-it/release-it/master/templates/changelog-compact.hbs",
  },
  hooks: {
    "after:bump": "npx auto-changelog -p",
  },
  plugins: {
    "@release-it/conventional-changelog": {
      infile: "CHANGELOG.md",
      preset: "conventionalcommits",
    },
  },
};
