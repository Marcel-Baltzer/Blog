<template>
    <div class="author">                    
        <v-img class="author__image" :src="$withBase('/avatar.png')">
        
        </v-img>
        <h1 v-if="showTitle" class="author__site-title">
			{{ $site.title }}
		</h1>
        
		<p class="author__intro">
			I am a passionate Software Engineer, I love the phoenix project ♥ ...
		</p>

		<a :href="'https://github.com/Marcel-Baltzer'">
            <GithubIcon />			
        </a>

		<a :href="'https://twitter.com/marcelbaltzer'">
            <TwitterIcon />			
        </a>

		<a :href="'https://www.linkedin.com/in/marcel-baltzer-4a369a93/'">
            <LinkedinIcon />			
        </a>

		<a :href="$withBase('rss.xml')">
            <RssIcon />			
        </a>
		
    </div>
</template>

<script>
import {
	GithubIcon,
	TwitterIcon,
	LinkedinIcon,
	RssIcon
} from 'vue-feather-icons'

export default {
	components: {
		GithubIcon,
		TwitterIcon,
		LinkedinIcon,
		RssIcon
	},
	props: ['showTitle']
}
</script>


<style lang="stylus">
.author
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding: calc(var(--space) / 2) 0;

	&__image
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
		margin-left: auto;
		margin-right: auto;
		blur: 5;
	
	&__intro 
		opacity: .8;
	
	&__site-title 
		font-size: 1.5em;
	
	&__links
		margin-top: -.5em;
		a
			margin: 0 .5em;
		
	

</style>