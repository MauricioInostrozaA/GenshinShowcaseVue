<template>
    <div class="characterCard" >
        <button class="float-button"
        @click="getStats()">
            BUSCAR
        </button>
        <div class="characterInfo">
            <character-splash :splash="this.character.splash"></character-splash>
            <statistics-card :statistics="this.character.stats"></statistics-card>
            <character-equip :equipment="this.character.equipment"></character-equip>
        </div> 
    </div>
</template>

 
<script>
import CharacterSplash from './CharacterSplash.vue';
import StatisticsCard from './StatisticsCard.vue';
import CharacterEquip from './CharacterEquip.vue';
import { mapGetters } from 'vuex';

 export default {
    name: 'CharacterCard',
    props: {
    },
    data() {
        return {
            UID: "601735795",
            character0: {
                name: "Klee",
                splash: {
                    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/6b/Character_Klee_Thumb.png/revision/latest/scale-to-width-down/256?cb=20201116013936",
                },
                stats: {
                    HP: {
                        name: "HP",
                        value: 1234,
                    },
                    ATK: {
                        name: "ATK",
                        value: 1234,
                    },
                    DEF: {
                        name: "DEF",
                        value: 1234,
                    },
                    ELE: {
                        name: "ELE",
                        value: 1234,
                    },
                },
                equipment: {
                    sword: "10 ATK",
                }

            }
        }
    },
    computed: {
        ...mapGetters({
            currentCharacter: 'currentCharacter',
        })
    },
    components: {
        CharacterSplash,
        StatisticsCard,
        CharacterEquip,
    },
    methods: {
        getStats() {
            console.log(this.UID);
            const userID = this.UID;
            this.$store.dispatch('SEARCH_GENSHIN_DATA', userID);
        }
    }
}
</script>


<style>
.characterCard {
    max-width: 500px;
    min-width: 1200px;;
    background-image: url("../assets/cryo_bg.png");
    background-size: cover;
    background-position: center right -210px;
    background-attachment: fixed; 
    position: relative;
    height: 75vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid green;
    border-radius: 10px;
    margin:auto;
}
.characterInfo {
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid blue;
}
.float-button {
    position: absolute;
    top: 5vh;
    right: 5vw;
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 50%;
    border: 2px solid black;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
    cursor: pointer;
}

.row
.svelte-1ujofp1 {
    display: flex;
    align-items: center;
    white-space: nowrap;
}

.Card.svelte-ps463l * {
    box-sizing: border-box;
    text-size-adjust: none;
}

.StatsTable {
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 1.5em 3% 0 0;
    justify-content: space-between;
    flex-grow: 1;
    font-size: .9em;
}
</style>