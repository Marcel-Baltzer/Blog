<template>
    <Layout>          
        <BlogTags :tags="$frontmatterKey.list"/>        
    </Layout>
</template>

<script>
    import BlogTags from '@theme/components/BlogTags.vue'        

    export default {
        components: {
            BlogTags,
        },   
    }
</script>