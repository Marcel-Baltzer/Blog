<template>
    <Layout>

        <h1 class="tag-title text-center space-bottom">
            # {{ this.$page.frontmatter.title }}
        </h1>
        <div class="posts">
            <PostCard v-for="post in this.$pagination.pages" :key="post.key" :post="post"/>
        </div>       
    </Layout>
</template>

<script>
import PostCard from '@theme/components/PostCard.vue'

export default {
    components: {
        PostCard,
    }
}
</script>