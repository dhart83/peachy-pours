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
            <div class="col">
                <h1>Envision, Execute, Enjoy</h1>
            </div>
            <div class="col">
                <p>
                    At Peachy Pours we are dedicated to delivering a unique and
                    memorable experience tailored to your needs. This all begins
                    with our consultation where we plan and design your catered
                    cocktail creations. The possibilities for your special
                    events are not restrained to basic cocktail service, we can
                    provide bourbon tasting, wine tasting, and much more.
                </p>
            </div>
        </div>
    </Section>
</template>

<style scoped>
.section {
    background: url('@assets/information.webp') no-repeat center center/cover;
    color: white;
}
h1 {
    margin: 0;
}
p {
    text-align: justify;
}
.grid {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
}
.col {
    display: flex;
    justify-content: center;
    align-items: center;
}
@media (max-width: 1200px) {
    .grid {
        gap: 3rem;
    }
}

@media (max-width: 768px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
</style>
