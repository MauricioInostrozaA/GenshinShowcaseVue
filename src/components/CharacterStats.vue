<template>
    <section class="stats-section">
        <div v-if="userDataFetched === true" Class="stats-card">
            <div class="stat">
                <div Class="stat-name">
                    <span>Max HP:</span>
                    <p></p>
                    <span>ATK:</span>
                    <p></p>
                    <span>DEF:</span>
                    <p></p>
                    <span>Elemental Mastery:</span>
                    <p></p>
                    <span>Crit Rate:</span>
                    <p></p>
                    <span>Crit DMG:</span>
                    <p></p>
                    <span>Energy Recharge:</span>
                    <p></p>
                    <span>Cryo DMG:</span>
                    <p></p>
                </div>
                <div Class="stat-value" >
                    <span> {{ CItoObject[0].stats.maxHp.value }} </span>
                    <p> </p>
                    <!--<span v-if="userDataFetched === true"> {{userData.charactersInfo[0].stats.atk.value}} </span>-->
                    <span> {{ CItoObject[0].stats.atk.value }} </span>
                    <p> </p>
                    <span> {{ CItoObject[0].stats.def.value }} </span>
                    <p> </p>
                    <span> {{ CItoObject[0].stats.elementalMastery.value }} </span>
                    <p></p>
                    <span> {{ CItoObject[0].stats.critRate.value }} </span>
                    <p></p>
                    <span> {{ CItoObject[0].stats.critDamage.value * 100}} </span>
                    <p></p>
                    <span> {{ CItoObject[0].stats.energyRecharge.value }} </span>
                    <p></p>
                    <span> {{ CItoObject[0].stats.cryoDamageBonus.value }} </span>
                    <p></p>
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
.stats-card {
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