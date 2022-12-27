<template>
    <section class="stats-section">
        <div v-if="userDataFetched === true" class="stats-table">
            <div class="hp-row">
                <img class="max-hp-svg" src="@/assets/svg/FIGHT_PROP_HP.svg" alt="max hp svg" />
                <div class="stat">
                    <span>Max HP</span>
                    <span class="sep"></span>
                    <span> {{ Math.round(CItoObject[0].stats.maxHp.value) }} </span>
                </div>
            </div>
            <div class="atk-row">
                <img class="atk-svg" src="@/assets/svg/FIGHT_PROP_ATTACK.svg" alt="atk svg" />
                <div class="stat">
                    <span>ATK</span>
                    <span class="sep"></span>
                    <span> {{ Math.round(CItoObject[0].stats.atk.value) }} </span>
                </div>
            </div>
            <div class="def-row">
                <img class="def-svg" src="@/assets/svg/FIGHT_PROP_DEFENSE.svg" alt="def svg" />
                <div class="stat">
                    <span>DEF</span>
                    <span class="sep"></span>
                    <span> {{ Math.round(CItoObject[0].stats.def.value) }} </span>
                </div>
            </div>   
            <div class="em-row">
                <img class="em-svg" src="@/assets/svg/FIGHT_PROP_ELEMENT_MASTERY.svg" alt="em svg" />
                <div class="stat">
                    <span>Elemental Mastery</span>
                    <span class="sep"></span>
                    <span> {{ Math.round(CItoObject[0].stats.elementalMastery.value) }} </span>
                </div>
            </div>     
            <div class="cr-row">
                <img class="cr-svg" src="@/assets/svg/FIGHT_PROP_CRITICAL.svg" alt="cr svg" />
                <div class="stat">
                    <span>CRIT Rate</span>
                    <span class="sep"></span>
                    <span> {{ (CItoObject[0].stats.critRate.value * 100).toFixed(1) }}%</span>
                </div>
            </div>     
            <div class="cd-row">
                <img class="cd-svg" src="@/assets/svg/FIGHT_PROP_CRITICAL_HURT.svg" alt="cd svg" />
                <div class="stat">
                    <span>CRIT DMG</span>
                    <span class="sep"></span>
                    <span> {{ (CItoObject[0].stats.critDamage.value * 100).toFixed(1) }}%</span>
                </div>
            </div> 
            <div class="er-row">
                <img class="er-svg" src="@/assets/svg/FIGHT_PROP_CHARGE_EFFICIENCY.svg" alt="er svg" />
                <div class="stat">
                    <span>Energy Recharge</span>
                    <span class="sep"></span>
                    <span> {{ (CItoObject[0].stats.energyRecharge.value * 100).toFixed(1) }}%</span>
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
.hp-row, .atk-row, .def-row, .em-row, .cr-row, .cd-row, .er-row{
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    border: 1px solid yellow;
}
.stat {
    width: 100%;
    height: 50%;
    border: 1px solid white;
    font-size: 15px;
    align-items: center;
    color: white;
    display: flex;
}
.sep {
    flex-grow: 1;
    border: 1px solid red;
}
.max-hp-svg, .atk-svg, .def-svg, .em-svg, .cr-svg, .cd-svg, .er-svg{
    width: 20px;
    height: 20px;
    fill: white;
}
</style>