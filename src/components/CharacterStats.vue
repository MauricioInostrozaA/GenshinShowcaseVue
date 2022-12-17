<template>
    <section class="stats-card">
        <div class="stats">
            <div class="stat" v-for="stat in this.stats" :key="stat.name">
                <div class="stat-name">
                    <span>{{stat.name}}</span>
                </div>
                <div class="stat-value">
                    <span>{{stat.value}}</span> 
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CharacterStats',
    props: {
    stats: {
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
.stats-card {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid orange;
}
.stats {
    width: 100%;
    height: 89%;
    display: block;
    border: 1px solid red;
}
.stat {
    width: 100%;
    height: 8%;
    display: flex;
    align-items: center;
    justify-content: top;
    border: 1px solid red;
}
.stat-name {
    width: 50%;
    height: 100%;
    border: 1px solid green;
}
.stat-name span {
    font-size: 10px;
    color: white;
}
.stat-value {
    width: 50%;
    height: 100%;
    border: 1px solid green;
    font-size: 10px;
    color: white;
}

</style>