<template>
    <div class="blog-tags">         
        <BlogTag v-for="tag in tags" :key="tag.name" :tag="tag" />
    </div>
</template>

<script>
    import BlogTag from '@theme/components/BlogTag.vue'        

    export default {
        components: {
            BlogTag,
        },  
        props: ["tags"]    
    }
</script>

<style lang="stylus">
.blog-tags {
    width: 66%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
}
@media screen and (max-width: 1000px) {
    .blog-tags {
        width: 90%;
    }
}
</style>