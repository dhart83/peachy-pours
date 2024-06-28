<script setup>
import Section from '@components/Section.vue'
import Card from '@components/Card.vue'
import { ref, onMounted } from 'vue'
import { childrenFadeIn } from '@/animation'

const content = ref(null)

onMounted(() => {
    childrenFadeIn(content)
})
</script>

<template>
    <Section id="services">
        <h1>Bar Service Packages</h1>
        <div ref="content" class="grid">
            <div class="col">
                <Card
                    title="Peachy Delight"
                    subTitle="Wine & Beer"
                    :items="[
                        'Bartender',
                        'Wine Key',
                        'Bottle Opener',
                        'Napkins',
                        'Straws',
                        'Recyclable Cups'
                    ]"
                    price="300"
                    buttonText="Book Now"
                    @button-click=""
                />
            </div>
            <div class="col">
                <Card
                    title="Platinum"
                    subTitle="Wine, Beer, & Liquor"
                    :items="[
                        'Bartender',
                        'Wine Key',
                        'Bottle Opener',
                        'Cocktail Tools',
                        'Napkins',
                        'Straws',
                        'Garnish',
                        '2 Specialty Cocktails',
                        'Recyclable Cups'
                    ]"
                    price="350"
                    buttonText="Book Now"
                    @button-click=""
                />
            </div>
            <div class="col">
                <Card
                    title="The Whole Package"
                    subTitle="Wine, Beer, & Liquor"
                    :items="[
                        'Bartender',
                        'Wine Key',
                        'Bottle Opener',
                        'Cocktail Tools',
                        'Napkins',
                        'Straws',
                        'Garnish',
                        'Open Bar',
                        'Recyclable Cups'
                    ]"
                    price="400"
                    buttonText="Book Now"
                    @button-click=""
                />
            </div>
        </div>
    </Section>
</template>

<style scoped>
h1 {
    text-align: center;
}
.grid {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
}
.col {
    display: flex;
}
@media (max-width: 1000px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
</style>
