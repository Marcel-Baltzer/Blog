<template>
    <Layout>
        <div class="post-title">
            <h1 class="post-title__text">
                {{ $page.frontmatter.title }} 
            </h1>
            <PostMeta :post="$page" />
        </div>

        <div class="post content-box">
            <div class="post__header">
                <v-img alt="Cover image" v-if="$page.frontmatter.cover_image" :src="$withBase($page.frontmatter.cover_image)" />
            </div>

            <!-- <div class="post__content" v-html="$page.excerpt" /> -->
            <Content class="post__content"/>

            <div class="post__footer">
                <PostTags :post="$page" />
            </div>
        </div>

        <div class="post-comments content-box">
            <!-- Add comment widgets here -->
            <Comment />
        </div>

        <Author class="post-author" />
    </Layout>
</template>

<script>
import PostMeta from '@theme/components/PostMeta'
import PostTags from '@theme/components/PostTags'
import Author from '@theme/components/Author.vue'
import { Comment } from '@vuepress/plugin-blog/lib/client/components'

export default {
    components: {
        Author,
        PostMeta,
        PostTags,
        Comment,
    },
}
</script>

<style lang="stylus">
.post-title
    padding: calc(var(--space) / 2) 0 calc(var(--space) / 2); 
    text-align: center;

.post
    &__header
        width: calc(100% + var(--space) * 2);
        margin-left: calc(var(--space) * -1);
        margin-top: calc(var(--space) * -1);
        margin-bottom: calc(var(--space) / 2);
        overflow: hidden;
        border-radius: var(--radius) var(--radius) 0 0;

        img 
            width: 100%;
    
        &:empty
            display: none;


    &__content
        h2:first-child
            margin-top: 0;
        

        p:first-of-type
            font-size: 1.2em;
            color: --v-TitleColor-base;        

        img
            width: calc(100% + var(--space) * 2);
            margin-left: calc(var(--space) * -1);
            display: block;
            max-width: none;

.post-comments
    margin-top: calc(var(--space) * 1);


.post-author
    margin-top: calc(var(--space) / 2);

</style>