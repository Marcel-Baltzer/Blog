<template>
    <div class="post-tags">
        <router-link class="post-tags__link" v-for="tag in post.frontmatter.tags" :key="tag" :to="'/tag/' + tag">
            <span>#</span> {{ tag }}
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style lang="stylus">
.post-tags
    margin: 1em 0 0;

    &__link
        margin-right: .7em;
        font-size: .8em;
        text-decoration: none;
        background-color: var(--v-BackgroundColor-base)!important;
        color: currentColor!important; //Todo: remove important;
        padding: .5em;
        border-radius: var(--radius);
</style>