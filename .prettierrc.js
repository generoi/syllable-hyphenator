module.exports = {
    singleQuote: true,
    trailingComma: 'all',
    overrides: [
        {
            files: ['*.php'],
            options: {
                trailingComma: 'all',
                trailingCommaPHP: true,
                phpVersion: '7.0',
            },
        },
    ],
};