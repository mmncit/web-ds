module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-create-react-app',
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
        {
            name: '@storybook/addon-storysource',
            options: {
                rule: {
                    test: /\.stories\.tsx?$/,
                    include: [path.resolve(__dirname, '../src')],
                },
                loaderOptions: {
                    injectStoryParameters: false,
                },
            },
        },
        '@storybook/addon-viewport',
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
};
