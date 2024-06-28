<script setup>
defineProps({
    id: String,
    required: false
})
</script>

<template>
    <div :id="id" class="section">
        <div class="container">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.section {
    padding: 10rem 0;
}

.container {
    max-width: 1440px;
    margin-inline: auto;
    padding-inline: 6rem;
}

/* @media (max-width: 1440px) {
    .section {
        padding: 9rem 0;
    }
    .container {
        max-width: 1180px;
    }
}

@media (max-width: 1200px) {
    .section {
        padding: 8rem 0;
    }

    .container {
        max-width: 1080px;
        padding-inline: 1rem;
    }
}

@media (max-width: 768px) {
    .section {
        padding: 6rem 0;
    }

    .container {
        padding-inline: 0.5rem;
    }
}

@media (max-width: 480px) {
    .section {
        padding: 4rem 0;
    }

    .container {
        padding-inline: 0.5rem;
    }
} */

@media (max-width: 768px) {
    .section {
        padding: 6rem 0;
    }
    .container {
        padding-inline: 3rem;
    }
}
</style>
