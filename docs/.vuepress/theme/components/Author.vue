<template>
    <div max-width="500" align="center">                    
        <v-img class="author__image" :src="$withBase('/avatar.png')">
        
        </v-img>
        <h1 class="author__site-title">.Net Dev Blog</h1>
        <p class="author__intro">I am a passionate Software Engineer, I love the phoenix project ♥ ...</p>
		
    </div>
</template>

<style lang="stylus">
.author {
	&__image {
		border-radius: 100%;
		width: 180px;
		height: 180px;
		margin-bottom: 1em;
	}
	&__intro {
		opacity: .8;
	}
	&__site-title {
		font-size: 1.5em;
	}
	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
			color: #FFF01A;
			&:hover {
				color: #002F3C;
			}
		}
	}
}
</style>