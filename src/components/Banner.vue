<script setup>
import Section from '@components/Section.vue'
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <Section>
        <div class="grid">
            <div class="col">{{ title }}</div>
            <div class="col">
                <button>Subscribe</button>
            </div>
        </div>
    </Section>
</template>

<style scoped>
.section {
    background-color: darkslateblue;
}
.grid {
    grid-template-columns: 1fr 1fr;
}
</style>
