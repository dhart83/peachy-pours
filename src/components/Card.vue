<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    buttonText: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    }
})

// onButtonClick() {
// this.$emit('button-click');
// };
</script>

<template>
    <div class="card">
        <div>
            <h2 class="card-title">{{ title }}</h2>
            <h3 class="card-subtitle">{{ subTitle }}</h3>
            <p class="card-price">${{ price }}</p>
            <ul class="card-items">
                <li v-for="item in items" :key="item">{{ item }}</li>
            </ul>
        </div>
        <button class="card-button" @click="">
            {{ buttonText }}
        </button>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 2rem;
    width: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
    /* font-size: 1.5em;
    margin-bottom: 8px; */
}

.card-subtitle {
    text-align: center;
    font-weight: bold;
}

.card-price {
    font-size: 3rem;
    color: #4caf50;
    margin-bottom: 16px;
    text-align: center;
}

.card-items {
    list-style-type: none;
    padding: 0;
    margin-bottom: 4rem;
}

.card-items li {
    margin-bottom: 0.5rem;
    padding-left: 2rem;
    position: relative;
}

.card-items li::before {
    content: '✔';
    color: #4caf50;
    position: absolute;
    left: 0;
    top: 0;
}

.card-button {
    background-color: #be5454;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.card-button:hover {
    background-color: #d896a4;
}
</style>
