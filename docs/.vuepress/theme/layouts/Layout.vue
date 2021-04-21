<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row>
                    <v-spacer></v-spacer>
                    <ToggleTheme />
                </v-row>

                <label>"Hello Layout"</label>
            </v-container>
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
    import ToggleTheme from '@theme/components/ToggleTheme.vue'

    export default {
        components: {            
            ToggleTheme
        }
    }
</script>