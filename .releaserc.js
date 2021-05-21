module.exports = {
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/npm',
            {
                npmPublish: false,
            },
        ],
        [
            '@semantic-release/changelog',
            {
                changelogFile: 'docs/CHANGELOG.md',
                changelogTitle: '# Changelog',
            },
        ],
        [
            '@semantic-release/git',
            {
                assets: ['package.json', 'package-lock.json', 'docs/CHANGELOG.md'],
                message: 'chore(release): ${nextRelease.version} \n\n${nextRelease.notes}',
            },
        ],
        [
            '@semantic-release/github',
            {
                assets: 'docs/CHANGELOG.md',
            },
        ],
    ],
    branches: ['master'],
};
