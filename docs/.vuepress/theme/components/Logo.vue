<template>
	<router-link class="logo" to="/">
        <span class="logo__text">
            &larr; {{ $site.title }}
        </span>
	</router-link>
</template>

<style lang="stylus">
.logo
	text-decoration: none;
	color: var(--v-bodycolor-base)!important;
	font-size: .9em;

	&__image
		vertical-align: middle;
		border-radius: 99px;
		height: 40px;
		width: 40px;
		margin-right: .5em;
</style>