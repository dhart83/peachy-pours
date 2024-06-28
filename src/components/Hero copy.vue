<script setup>
import Section from '@components/Section.vue'
import { ref, onMounted } from 'vue'

// Create a ref for controlling animation
const animateHeading = ref(false)
const animatedParagraph = ref(false)
const animatedButtons = ref(false)

onMounted(() => {
    // Delay adding the class to ensure styles are applied after initial render
    setTimeout(() => {
        animateHeading.value = true
    }, 100)

    setTimeout(() => {
        animatedParagraph.value = true
    }, 200)

    setTimeout(() => {
        animatedButtons.value = true
    }, 300)
})
defineProps({
    title: String
})
</script>

<template>
    <!-- <section class="section">
        <div class="background">
            <img class="image" src="../assets/hero_image.webp" alt="" />
            <div class="overlay"></div>
        </div>
    </section> -->
    <Section class="hero">
        <div class="hero-content">
            <div class="grid">
                <div class="col">
                    <h1
                        :class="{
                            'slide-up-fade-in': animateHeading
                        }"
                    >
                        Make Every<br />Moment Count
                    </h1>
                    <p
                        :class="{
                            'slide-up-fade-in': animatedParagraph
                        }"
                    >
                        We are glad to have you here. Explore our services
                        below, or book your event today!
                    </p>
                    <div
                        class="btn--wrapper"
                        :class="{
                            'slide-up-fade-in': animatedButtons
                        }"
                    >
                        <a href="#more" class="btn">Book Now</a>
                        <a href="#services" class="btn">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </Section>
</template>

<style scoped>
p {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 1s ease, transform 1s ease;
}
h1 {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 1s ease, transform 1s ease;
}
.slide-up-fade-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

/* .slide-up-fade-in-active {
    opacity: 1;
    transform: translateY(0);
} */

.hero {
    position: relative;
    /* height: 100vh; */
    background: url('@assets/hero_image.webp') no-repeat center center/cover;
    background-position: 0rem -15rem;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    max-height: 800px;
    /* line-height: 1; */
}
.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
}
.hero-content {
    /* position: relative; */
    z-index: 1; /* Ensure content is above the overlay */

    height: 100%;
    margin: 0 auto;
    /* padding: 20px; */
    color: #fff;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}

.grid {
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr;
}

.col {
    display: flex;
    flex-direction: column;
}

.hero-content h1 {
    font-size: 6em;
    margin-bottom: 0.2em;
}
.hero-content p {
    /* font-size: 1.5em; */
    margin-bottom: 2em;
}
.hero-content .btn {
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    /* background-color: #007bff; */
    background-color: #d89696;
    background-color: #be5454;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
}
.hero-content .btn:hover {
    background-color: #d896a4;
}

.btn--wrapper {
    margin-left: -1rem;
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 1s ease, transform 1s ease;
}

.btn {
    margin-inline: 1rem;
}

/* .section {
    position: relative;
    background-color: red;
}
.background {
    position: absolute;
    height: 200px;
    width: 100%;
    overflow: hidden;
    background-color: blue;
}
.image {
    object-position: 0rem -15rem;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}
.overlay {
    background-color: black;
    width: 100%;
    height: 100%;
} */
</style>
