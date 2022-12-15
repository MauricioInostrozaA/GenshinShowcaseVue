<template>
    <section class="splash-card">
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
    width: 55%;
    height: 100%;
    border: 1px solid purple;
}

</style>