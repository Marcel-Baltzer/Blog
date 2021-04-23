<template>
    <div class="post-card content-box" :class="{'post-card--has-poster' : post.poster}">
        <div class="post-card__header">
            <v-img alt="Cover image" v-if="post.image" class="post-card__image" :src="post.image" />
        </div>
        <div class="post-card__content">
        <h2 class="post-card__title" v-html="post.title" />
        <p class="post-card__description" v-html="post.description" />

        <!-- <PostMeta class="post-card__meta" :post="post" />
        <PostTags class="post-card__tags" :post="post" /> -->

        <!-- <g-link class="post-card__link" :to="post.path">Link</g-link> -->

        <router-link :to="post.path" class="text-decoration-none">
            {{ post.title }}
        </router-link>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        post: {
            type: Object,
            default: () => {
                return {}
            },
        },
    }
}
</script>