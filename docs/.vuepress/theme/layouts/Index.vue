<template>
    <Layout :show-logo="false">
        <Author />

        <div>
            <PostCard v-for="post in $pagination.pages.filter(page => page.frontmatter.published === true)" :key="post.key" :post="post"/>
        </div>

    </Layout>
</template>

<script>
    import Author from '@theme/components/Author.vue'  
    import PostCard from '@theme/components/PostCard.vue'  

    export default {
        components: {            
            Author,   
            PostCard         
        }
    }
</script>
