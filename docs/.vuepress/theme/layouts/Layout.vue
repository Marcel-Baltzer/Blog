<template>
    <v-app>        
        <Header :show-logo=showLogo />
        
        <main class="main">
            <slot/>
        </main>        

        <v-footer padless>
            <v-col
            class="text-center"
            cols="12"
            >
            {{ new Date().getFullYear() }} — <strong>Marcel Baltzer</strong>
            </v-col>
        </v-footer>
    </v-app>
</template>

<script>
    import Header from '@theme/components/Header.vue'     

    export default {
        components: {            
            Header                     
        },
        props: {
            showLogo: { default: true }
        },
    }
</script>

<style lang="stylus">
.main
	margin: 0 auto;
	padding: 1.5vw 15px 0;
</style>