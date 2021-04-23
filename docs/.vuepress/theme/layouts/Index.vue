<template>
    <Layout :show-logo="false">
        <Author />
        <label>hallo</label>

        <div>
            <PostCard v-for="post in this.$site.pages" :key="post.key" :post="post"/>
        </div>

        <label>hallo2</label>
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
