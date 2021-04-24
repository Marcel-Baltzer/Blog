<template>
    <div class="post-meta">
        <CalendarIcon />
        Posted {{          
            new Date(post.frontmatter.date.trim()).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric"
            })        
        }}.
        <template v-if="post.readingTime">
            <ClockIcon />
            <strong>{{ post.readingTime.text }}.</strong> 
        </template>
    </div>
</template>

<script>
import { 
    ClockIcon, 
    CalendarIcon 
} from 'vue-feather-icons'

export default {
    components: {          
        ClockIcon, 
        CalendarIcon 
        },
    props: ['post']
}
</script>

<style lang="stylus">
.post-meta
	font-size: .8em;
	opacity: .8;

	svg
		width: 17px;
		height: 17px;

</style>