<script setup>
import Section from '@components/Section.vue'
import { ref, onMounted } from 'vue'
import { childrenFadeIn } from '@/animation'

const content = ref(null)

onMounted(() => {
    childrenFadeIn(content)
})
</script>

<template>
    <Section class="hero">
        <div class="hero-content">
            <div>
                <div ref="content" class="col">
                    <h1>Make Every<br />Moment Count</h1>
                    <p>
                        We are glad to have you here. Explore our services
                        below, or book your event today!
                    </p>
                    <div class="btn--wrapper">
                        <a href="#footer" class="btn">Book Now</a>
                        <a href="#services" class="btn">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </Section>
</template>

<style scoped>
.hero {
    position: relative;
    background: url('@assets/hero_image.webp') no-repeat center center/cover;
    background-position: 0rem -15rem;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    max-height: 800px;
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
    z-index: 1;
    height: 100%;
    margin: 0 auto;
    color: #fff;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
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
    margin-bottom: 2em;
}
.hero-content .btn {
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
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
}

.btn {
    margin-inline: 1rem;
}

@media (max-width: 1380px) {
    .hero {
        background: url('@assets/hero_image.webp') no-repeat center center;
        /* background-position: 0rem -15rem; */
    }
}

@media (max-width: 768px) {
    /* .hero {
        text-align: center;
    } */
}
</style>
