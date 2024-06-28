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
        <h1>Timeless Parties For Any Occasion</h1>
        <h1>& MUCH more!!</h1>
        <div ref="content" class="grid">
            <div class="col">
                <img src="../assets/graduation.jpg" alt="" />
                <h2>Grauations</h2>
            </div>
            <div class="col">
                <img src="@assets/wedding.webp" alt="" />
                <h2>Weddings</h2>
            </div>
            <div class="col">
                <img src="@assets/birthday.webp" alt="" />
                <h2>Birthdays</h2>
            </div>
            <div class="col">
                <img src="@assets/corporate.png" alt="" />
                <h2>Corporate Events</h2>
            </div>
            <div class="col">
                <img src="../assets/bachelorette.png" alt="" />
                <h2>Bachelorette Parties</h2>
            </div>
            <div class="col">
                <img src="@assets/retirement.png" alt="" />
                <h2>Retirement Parties</h2>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.col img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 2rem;
}
@media (max-width: 1224px) {
    /* .col img {
        width: 250px;
        height: 250px;
    } */
    .grid {
        grid-template-columns: 1fr 1fr;
    }
}
@media (max-width: 1000px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
</style>
