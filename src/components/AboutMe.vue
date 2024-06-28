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
    <Section>
        <div ref="content" class="grid">
            <div class="col col--left">
                <img src="@assets/about_me.webp" alt="" />
            </div>
            <div class="col col--right">
                <h1>Where Passion Fuels Our Purpose</h1>
                <p>
                    Meet Breanna, the cultivator behind Peachy Pours'
                    unforgettable mobile bartending services. With over a decade
                    of experience in the bartending industry, ranging from
                    dining, catering, sporting events, and night clubs, Breanna
                    has dedicated her career to perfecting the art of crafting
                    delicious and unique drinks for her clients. At Peachy
                    Pours, our top priority is to help you create unforgettable
                    memories with your guests, we will take care of the drinks.
                </p>
            </div>
        </div>
    </Section>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
}
img {
    border-radius: 50%;
    max-width: 500px;
}
p {
    text-align: justify;
}
.col {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
@media (max-width: 1024px) {
    .grid {
        grid-template-columns: 1fr;
    }
    .col--left {
        align-items: center;
    }
}
@media (max-width: 680px) {
    img {
        max-width: 400px;
    }
}
@media (max-width: 680px) {
    img {
        max-width: 300px;
    }
}
</style>
