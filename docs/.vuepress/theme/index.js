module.exports = {
    plugins: [
        [
            '@vuepress/blog',
        {
            directories: [
                {
                    // Unique ID of current classification
                    id: 'post',
                    // Target directory
                    dirname: '_posts',
                    // Path of the `entry page` (or `list page`)
                    path: '/', 
                    layout: 'Index',  
                    itemLayout: 'Post',
                },
            ],
            frontmatters: [
                {
                    id: "tag",
                    keys: ["tag", "tags"],
                    path: "/tag/",
                    // layout: 'Tag',  defaults to `FrontmatterKey.vue`
                    scopeLayout: 'Tag',
                    frontmatter: { title: "Tag" },
                }
            ]
        }
    ],
]
}