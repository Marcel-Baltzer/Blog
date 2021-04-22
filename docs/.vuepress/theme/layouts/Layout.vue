<template>
    <v-app>
        
        <Header />       
        
        <v-main>
            <Author />
        </v-main>
            

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
    import Author from '@theme/components/Author.vue'   

    export default {
        components: {            
            Header,
            Author,            
        }
    }
</script>

<style lang="stylus">

</style>