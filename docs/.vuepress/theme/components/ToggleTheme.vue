<template>
    <v-btn icon @click.prevent="toggleTheme">
        <v-icon v-if="this.$vuetify.theme.dark" icon class="mr-1">mdi-white-balance-sunny</v-icon>
        <v-icon v-else icon color="black" class="mr-1">mdi-moon-waxing-crescent</v-icon>
    </v-btn>
</template>

<script>
export default {
    methods: {
        toggleTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark        
        }
    },
}
</script>