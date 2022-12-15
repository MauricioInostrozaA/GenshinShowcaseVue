<template>
    <section class="character-equip-card">

    </section>
</template>

<script>
export default {
    name: 'CharacterEquip',
    props: {
        equipment: {
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
.character-equip-card {
    width: 30%;
    height: 100%;
    border: 1px solid yellow;
}
</style>