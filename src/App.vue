<template>
<div class="container" v-cloak>
    <the-header></the-header>
    <the-menu ></the-menu>
    <the-catalog></the-catalog>
    <the-about></the-about>
    <the-footer></the-footer>
</div>

</template>

<script>
import TheHeader from './components/TheHeader'
import TheCatalog from './components/TheCatalog'
import TheMenu from './components/TheMenu'
import TheFooter from './components/TheFooter'
import TheAbout from './components/TheAbout'

export default {
    components: { TheHeader, TheCatalog, TheMenu, TheFooter, TheAbout}
}
</script>

<style scoped lang="scss">
    [v-cloak] {
       display: none;
    } 
</style>