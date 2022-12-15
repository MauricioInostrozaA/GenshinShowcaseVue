<template>
    <section class="splash-card">
        <img class="splash-image" :src="this.splash.image" alt="character splash image">
    </section>
</template>

<script>
export default {
    name: 'ChracterSplash',
    props: {
        splash: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.splash-card {
    width: 40%;
    height: 100%;
    border: 1px solid purple;
}

.splash-image{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>