module.exports = {
  git: {
    changelog:
      "auto-changelog --stdout --commit-limit false --unreleased --template json",
  },
  hooks: {
    "after:bump": "auto-changelog -p",
  },
  // plugins: {
  //   "@release-it/conventional-changelog": {
  //     infile: "CHANGELOG.md",
  //     preset: "conventionalcommits",
  //   },
  // },
};
