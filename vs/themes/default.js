monaco.editor.defineTheme('RblxStudio-theme-dark', {
    base: 'vs-dark',
    inherit: true,
    colors: {
        "editor.background": '#161616',
    },
    rules: [
        { token: 'text', foreground: 'FFFFFF' },
        { token: 'global', foreground: '84D6F7', fontStyle: "bold" },
        { token: 'keyword', foreground: 'F86D7C', fontStyle: "bold" },
        { token: 'comment', foreground: '666666' },
        { token: 'number', foreground: 'FFC600' },
        { token: 'string', foreground: 'ADF195' },
        { token: 'Method', foreground: '84D6F7' },
]
});