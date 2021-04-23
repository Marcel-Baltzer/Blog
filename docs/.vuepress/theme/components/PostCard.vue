<template>
    <div class="post-card content-box" :class="{'post-card--has-poster' : post.poster}">
        <div class="post-card__header">
            <v-img alt="Cover image" v-if="post.frontmatter.cover_image" class="post-card__image" :src="$withBase(post.frontmatter.cover_image)"/>
        </div>
        <div class="post-card__content">
        <h1 class="post-card__title" v-html="post.frontmatter.title" />
        <p class="post-card__description" v-html="post.frontmatter.description" />

        <PostMeta class="post-card__meta" :post="post" />
        <PostTags class="post-card__tags" :post="post" />

        <router-link :to="post.path" class="post-card__link">Link</router-link>
        </div>
    </div>
</template>

<script>
import PostMeta from '@theme/components/PostMeta'
import PostTags from '@theme/components/PostTags'

export default {
    components: {
        PostMeta,
        PostTags,
    },
    props: ['post'],
}
</script>

<style lang="stylus">
.post-card
    margin-bottom: var(--space);
    position: relative;

    &__header
        margin-left: calc(var(--space) * -1);
        margin-right: calc(var(--space) * -1);
        margin-bottom: calc(var(--space) / 2);
        margin-top: calc(var(--space) * -1);
        overflow: hidden;
        border-radius: var(--radius) var(--radius) 0 0;

        &:empty
            display: none;

    &__image
        min-width: 100%;
        width: 770;
        height: 380;
        blur: 10;

    &__title
        margin-top: 0;

    &:hover
        transform: translateY(-5px);
        box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1);

    &__tags
        z-index: 1;
        position: relative;    

    &__link
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.0;
        overflow: hidden;
        text-indent: -9999px;
        z-index: 0;
        
</style>