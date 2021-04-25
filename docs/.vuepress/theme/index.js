require('dotenv').config();

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
                ],
                comment: {
                    // Which service you'd like to use
                    service: 'vssue',
                    // The owner's name of repository to store the issues and comments.
                    owner: 'Marcel-Baltzer',
                    // The name of repository to store the issues and comments.
                    repo: 'Blog-Comments',
                    // The clientId & clientSecret introduced in OAuth2 spec.
                    clientId: process.env.CLIENTID,
                    clientSecret: process.env.CLIENTSECRET,
                },
            }
        ],
        [ 
            'feed', 
            {
                canonical_base: 'https://marcelbaltzer.de',
                is_feed_page: ( page ) =>
                {
                    return page.frontmatter.published === true;                
                },
                sort: ( entries ) =>
                {
                    return entries.sort(function(a,b) 
                    { 
                        return new Date(b.frontmatter.date) - new Date(a.frontmatter.date); 
                    })
                }
            }
        ],
        [
            'vuepress-plugin-reading-time'
        ],
        [
            '@vuepress/google-analytics',
            {
              'ga': 'G-SGHMFSK4N6' // UA-00000000-0
            }
        ]
    ]
}