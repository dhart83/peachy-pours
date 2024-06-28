<script setup>
import HelloWorld from '@components/HelloWorld.vue'
import NavBar from '@components/NavBar.vue'
import Hero from '@components/Hero.vue'
import AboutMe from '@components/AboutMe.vue'
import Info from '@components/Info.vue'
import Occasions from '@components/Occasions.vue'
import Packages from '@components/Packages.vue'
import AddOns from '@components/AddOns.vue'
import Banner from '@components/Banner.vue'
import CocktailClasses from '@components/CocktailClasses.vue'
import Footer from '@components/Footer.vue'
</script>

<template>
    <NavBar />
    <Hero title="Hello there" />
    <AboutMe />
    <Info />
    <Occasions />
    <Packages />
    <AddOns />
    <!-- <Banner /> -->
    <CocktailClasses />
    <Footer />
</template>

<style scoped>
/* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>

