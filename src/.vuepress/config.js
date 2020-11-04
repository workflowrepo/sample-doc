const { nav, sidebar } = require("vuepress-bar")(
    `${__dirname}/..`,
    { maxLevel: 6 }
)

module.exports = {
    title: 'MyApp',
    description: 'MyApp Developer Documentation',
    dest: './site-build',
    themeConfig: {
        nav: [...nav],
        sidebar,
        lastUpdated: 'Last Updated',
    }
}
