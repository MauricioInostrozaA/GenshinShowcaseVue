<template>
    <section class="artifacts-card">
        <div class="artifacts">
            <div class="artifact" v-for="artifact in this.artifacts" :key="artifact.name">
                <img class="artifact-image" :src="artifact.image" alt="artifact image"> 
                <div class="artifact-name">
                    <span>{{artifact.name}}</span>
                </div>
                <div class="artifact-value">
                    <span>{{artifact.value}}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CharacterEquip',
    props: {
        artifacts: {
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
.artifacts-card {
    width: 30%;
    height: 100%;
    border: 1px solid yellow;
}
.artifact-image{
    width: 20%;
    height: 20%;
    object-fit: cover;
}
</style>
