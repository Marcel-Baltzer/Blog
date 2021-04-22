<template>
    <header class="header">
        <div class=".header__left"></div>
        <div class=".header__right"><ToggleTheme /></div>                           
    </header>   
</template>

<script>
    import ToggleTheme from '@theme/components/ToggleTheme.vue'    

    export default {
        components: {            
            ToggleTheme,            
        }
    }
</script>

<style lang="stylus">
.header
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 80px;
    padding: 0 calc((3.5rem)/2);
.header__left, .header__right
    display: flex;
    align-items: center;
</style>