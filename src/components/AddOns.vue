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
                <h1>Add-Ons</h1>
                <ul>
                    <li>
                        <span class="item-name">Ice</span>
                        <span class="item-price">$1/PP</span>
                    </li>
                    <li>
                        <span class="item-name">Mixers</span>
                        <span class="item-price">$3/PP</span>
                    </li>
                    <li>
                        <span class="item-name">Coolers</span>
                        <span class="item-price">$50</span>
                    </li>
                    <li>
                        <span class="item-name">Champagne Toast</span>
                        <span class="item-price">$75</span>
                    </li>
                    <li>
                        <span class="item-name">Additional Bartender</span>
                        <span class="item-price">$100</span>
                    </li>
                    <li>
                        <span class="item-name">Additional Travel</span>
                        <span class="item-price">$50</span>
                    </li>
                    <li>
                        <span class="item-name">Fruit Infused Water</span>
                        <span class="item-price">$50</span>
                    </li>
                    <li>
                        <span class="item-name">Mobile Bar</span>
                        <span class="item-price">$200</span>
                    </li>
                </ul>
                <p>
                    If you do not see something you need, reach out and we will
                    try our best to accommodate!
                </p>
            </div>
            <div class="col">
                <img src="@assets/about_me.webp" alt="" />
            </div>
        </div>
    </Section>
</template>

<style scoped>
.grid {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
}
img {
    width: 100%;
    border-radius: 10px;
}

ul {
    list-style-type: none; /* Remove default list bullets */
    padding: 0; /* Remove default padding */
}
ul li {
    display: flex; /* Use flexbox to create columns */
    justify-content: space-between; /* Distribute space between items */
    padding: 8px 0; /* Add some padding for spacing */
    border-bottom: 1px solid #ddd; /* Optional: add a separator line */
}
.item-name {
    flex: 1; /* Allow the item name to take up remaining space */
}
.item-price {
    flex: 0; /* Prevent the price from taking additional space */
    margin-left: 20px; /* Optional: add some space between name and price */
}
p {
    margin-top: 3rem;
}
@media (max-width: 1000px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
</style>
