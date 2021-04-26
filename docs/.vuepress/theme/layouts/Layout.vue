<template>
    <v-app id="main" :style="{ background: $vuetify.theme.themes[theme].bgcolor }">        
        <Header :show-logo=showLogo />
        
        <v-main class="main">
            <slot/>
        </v-main> 
        
        <footer class="footer">
            <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. </span>
            <span class="footer__links">
                Created with 
                <a href="//vuepress.vuejs.org"> Vuepress </a> 
                and 
                <a href="//vuetifyjs.com"> Vuetify </a>
            </span>
        </footer>

    </v-app>
</template>

<script>
    import Header from '@theme/components/Header.vue'     

    export default {
        name: 'App',
        components: {            
            Header                     
        },
        props: {
            showLogo: { default: true }
        },
        computed:{
            theme(){
                return (this.$vuetify.theme.dark) ? 'dark' : 'light'
            }
        }
    }
</script>

<style lang="stylus">
.main
	margin: 0 auto;
	padding: 1.5vw 15px 0;

.footer
	display: flex;
	align-items: center;
	justify-content: center;
	padding: calc(var(--space) / 2);
	text-align: center;
	font-size: .8em;

	> span
		margin: 0 .35em;

	a
		color: currentColor;

</style>