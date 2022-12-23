<template>
    <section class="stats-section">
        <div v-if="userDataFetched === true" Class="stats-table">
            <div class="hp-row">






                <div Class="stat-value" >
                    <span> {{ CItoObject[0].stats.maxHp.value }} </span>
                    <!--<span v-if="userDataFetched === true"> {{userData.charactersInfo[0].stats.atk.value}} </span>-->
                </div> 
            </div>             
        </div>
    </section>
</template>

<script>
export default {
    name: 'CharacterStats',
    props: {
        userData: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            userDataFetched: false,
        }
    },
    computed: {
        CItoObject() {
            let obj = {};
            Object.assign(obj, this.userData.charactersInfo);
            return obj
        },
    },
    mounted() {
        this.userDataVerification();
    },
    methods: {
        userDataVerification() {
            if (this.userData) {
                this.userDataFetched = true;
            }
        }
    }
}
</script>

<style scoped>
.stats-section {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid orange;
}
.stats-table {
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
    border: 1px solid green;
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