<template>
    <section class="splash-card">
        <div class="splash-image" :style="{ 'background-image': 'url(' + this.splash.image + ')' }">
            <div class="splash-name"> {{this.characterName}} </div> 
        </div>
    </section>
</template>


<script>
export default {
    name: 'ChracterSplash',
    props: {
        characterName: {
            type: String,
            required: true
        },
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
    background-size: cover;
    background-position: center;
    border: 1px solid blue;
}


</style>