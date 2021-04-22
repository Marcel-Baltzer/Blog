<template>
    <v-app>
        
        <Header />

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
            Header,            
        }
    }
</script>

<style lang="stylus">

</style>