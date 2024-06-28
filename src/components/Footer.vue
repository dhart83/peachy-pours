<script setup>
import Section from '@components/Section.vue'
import { ref } from 'vue'

// Create a ref to hold the current year
const currentYear = ref(new Date().getFullYear())

// const formData = reactive({
//     name: '',
//     email: '',
//     message: ''
// })

const formData = {
    name: '',
    email: '',
    message: ''
}

// const resetForm = () => {
//     formData.name = ''
//     formData.email = ''
//     formData.message = ''
// }

const submitForm = () => {
    // // Basic validation
    // if (!formData.name || !formData.email || !formData.message) {
    //     alert('Please fill in all fields')
    //     return
    // }
    // // Simulate form submission (replace with actual API call)
    // console.log('Form submitted:', formData)
    // resetForm()
}
</script>

<template>
    <Section id="footer">
        <div class="grid">
            <div class="grid--left">
                <div class="info">
                    <h1>Stay With Us</h1>
                    <div>
                        <p>JACKSONVILLE, FLORIDA</p>
                        <p>Tel: 734.833.8688</p>
                        <p>PeachyPoursLLC@gmail.com</p>
                    </div>
                </div>
                <div class="socials">
                    <h1>Get Social</h1>
                    <div class="icon--wrapper">
                        <div class="icon">
                            <a
                                href="https://www.facebook.com/peachypoursllc"
                                target="_blank"
                            >
                                <img
                                    src="@/assets/icons/fb.svg"
                                    alt="Facebook Icon"
                                />
                            </a>
                        </div>
                        <div class="icon">
                            <a
                                href="https://www.instagram.com/peachypours_"
                                target="_blank"
                            >
                                <img
                                    src="@/assets/icons/Ig.svg"
                                    alt="Instagram Icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid--right">
                <h1>Contact Me</h1>
                <div class="contact">
                    <!-- <form @submit.prevent="submitForm"> -->
                    <form>
                        <label for="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            v-model="formData.name"
                            required
                        />

                        <label for="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            v-model="formData.email"
                            required
                        />

                        <label for="message">Message:</label>
                        <textarea
                            id="message"
                            rows="4"
                            v-model="formData.message"
                            required
                        ></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <p class="copy">
            &copy; {{ currentYear }} Peachy Pours LLC. All rights reserved.
        </p>
    </Section>
</template>

<style scoped>
.copy {
    margin-top: 6rem;
    text-align: center;
}
.section {
    background-color: #333;
    color: white;
    padding-bottom: 2rem;
}
.grid {
    grid-template-columns: 1fr 2fr;
    gap: 6rem;
}
.grid--right {
    display: flex;
    flex-direction: column;
}
.contact {
    flex: 1;
}
.socials {
    margin-top: 6rem;
}
.icon--wrapper {
    display: flex;
    margin-left: -1rem;
}
.icon {
    width: 50px;
    margin: 1rem;
}

form {
    display: flex;
    flex-direction: column;
}

label,
input,
textarea {
    margin-bottom: 10px;
}

button {
    background-color: #be5454;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
}

button:hover {
    background-color: #d896a4;
}
@media (max-width: 1000px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
</style>
