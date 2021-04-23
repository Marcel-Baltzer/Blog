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
        }
    ],
]
}