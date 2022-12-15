<template>
    <section class="statistics-card">
        <div class="stats">
                <!--make a v-for list of the stats-->
            <div class="stat" v-for="stat in this.statistics" :key="stat.name">
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
    name: 'StatisticsCard',
    props: {
        statistics: {
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
.statistics-card {
    width: 25%;
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
    height: 13%;
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