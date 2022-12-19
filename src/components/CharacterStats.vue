<template>
    <section class="stats-card">
        <div v-if="userDataFetched === true"
        class="stats">
            <div v-for="stat in statsArray"
            class="stat">
                <div Class="stat-name">
                    <span>ATK:</span>
                </div>
                <div Class="stat-value" >
                    <span> {{stat.atk.value}} </span>
                    <!--<span v-if="userDataFetched === true"> {{userData.charactersInfo[0].stats.atk.value}} </span> 
                -->
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
        userDataToObject() {
            return Object.assign(this.userData.charactersInfo);
        },
        KamisatoAyaka () {
            return this.userDataToObject.find(character => character.characterId === "10000002");
        }	
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