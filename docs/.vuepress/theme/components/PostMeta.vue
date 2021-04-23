<template>
    <div class="post-meta">
        Posted {{          
            new Date(post.frontmatter.date.trim()).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric"
            })        
        }}.
        <template v-if="post.frontmatter.timeToRead">
            <!-- TODO: Calculate TimeToRead and use icons-->
            <strong>{{ post.frontmatter.timeToRead }} min read.</strong> 
        </template>
    </div>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style lang="stylus">
.post-meta
	font-size: .8em;
	opacity: .8;
</style>