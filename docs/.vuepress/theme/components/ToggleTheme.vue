<template>
    <v-btn icon @click.prevent="toggleTheme" class="toogle-theme">
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

<style lang="stylus">
.toogle-theme
    background-color: transparent;
    border: 10;
    color: #444;
    // curser: pointer;
    &:hover
        opacity: .8;
    &:focus
        outline: none

</style>