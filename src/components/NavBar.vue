<script setup>
import Section from '@components/Section.vue'
defineProps({
    msg: String
})
</script>

<template>
    <Section class="navbar">
        <nav class="navbar--container">
            <a href="/">
                <div class="logo">
                    <img src="@assets/Peachy.png" alt="" />
                    <span>PEACHY POURS</span>
                </div></a
            >
            <div class="hamburger" @click="toggleMenu" v-if="isMobile">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <div>
                <ul>
                    <li><a href="#services">Bar Services</a></li>
                    <li><a href="#classes">Cocktail Classes</a></li>
                    <li><a href="#footer">Book Now</a></li>
                </ul>
            </div>
        </nav>
    </Section>
</template>

<style scoped>
.navbar {
    padding: 0.5rem 0 !important;
    box-shadow: 0px 1px 10px gray;
    font-weight: lighter;
    position: -webkit-sticky; /* For Safari */
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: #fff1f1;
}
.navbar--container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo {
    display: flex;
    align-items: center;
}
img {
    max-width: 80px;
}
span {
    font-size: 2rem;
    margin-left: 0.5rem;
}
ul {
    display: flex;
}
li {
    margin-left: 2.5rem;
}
a {
    font-weight: normal;
    font-size: 1.2rem;
}
@media (max-width: 768px) {
    .logo span {
        display: none;
    }
}
@media (max-width: 1000px) {
    ul {
        display: none;
    }
}
</style>
