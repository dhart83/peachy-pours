<script setup>
import Section from '@components/Section.vue'
</script>

<template>
    <Section id="classes">
        <h1>Cocktail Classes</h1>
        <div class="grid">
            <div class="col col--left">
                <h2>What is it?</h2>
                <p>
                    Our cocktail class is a unique experience to spice up any
                    small party! During the experience you will learn about
                    basic bar facts, we will teach you how to make 2 cocktails,
                    1 shot, and you will leave with some bar tools!
                </p>
            </div>
            <div class="col col--mid">
                <!-- <img src="@assets/" alt=""> -->
            </div>
            <div class="col dol--right">
                <h2>Pricing</h2>
            </div>
        </div>
    </Section>
</template>

<style scoped>
.grid {
    grid-template-columns: 2fr 1fr 2fr;
}

@media (max-width: 1000px) {
    .grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}
</style>
