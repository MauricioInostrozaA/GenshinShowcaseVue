<template>
    <div class="characterCard" >
        <button Class="float-button" @click="getData()">BUSCAR</button>
        <div class="characterInfo">
            <character-splash :splash="this.character.splash" :character-name="this.character.characterName"></character-splash>
            <character-stats v-if="userData" :userData="userData"></character-stats>
            <character-artifacts :artifacts="this.artifacts"></character-artifacts>
        </div> 
    </div>

</template>

 
<script>
import CharacterSplash from './CharacterSplash.vue';
import CharacterStats from './CharacterStats.vue';
import CharacterArtifacts from './CharacterArtifacts.vue';
import { mapGetters } from 'vuex';



export default {
    name: 'CharacterCard',
    props: {
    },
    data() {
        return {
            UID: 601735795,
            character: {
                characterName: "Kamisato Ayaka",
                splash: {
                    image: "https://enka.network/ui/UI_Gacha_AvatarImg_Ayaka.png",
                },
            },
            stats: {
                MaxHP: 2,
                ATK: 0,
                DEF: 0,
                ElementalMastery: 0,
                CritRate: 0,
                CritDMG: 0,
                EnergyRecharge: 0,
                CryoDMG: 1,
            },
            artifacts: {
                flower: {
                    name: "Blizzard Strayer",
                    image: "https://enka.network/ui/UI_RelicIcon_14001_4.png",
                },
                feather: {
                    name: "Blizzard Strayer",
                    image: "https://enka.network/ui/UI_RelicIcon_14001_4.png",
                },
                sands: {
                    name: "Blizzard Strayer",
                    image: "https://enka.network/ui/UI_RelicIcon_14001_4.png",
                },
                goblet: {
                    name: "Blizzard Strayer",
                    image: "https://enka.network/ui/UI_RelicIcon_14001_4.png",
                },
                circlet: {
                    name: "Blizzard Strayer",
                    image: "https://enka.network/ui/UI_RelicIcon_14001_4.png",
                },
            }
        }
    },
    computed: {
        ...mapGetters({
            userData: 'userData',
        })
    },
    components: {
        CharacterSplash,
        CharacterStats,
        CharacterArtifacts,
    },
    methods: {
        getData() {
            //console.log(this.UID);
            const userUID = this.UID;
            this.$store.dispatch('GET_USER_DATA', userUID);
        }
    }
}
</script>


<style scope>
.characterCard {
    max-width: 500px;
    min-width: 1200px;;
    background-image: url("https://genshindb.org/wp-content/uploads/2021/02/Kamisato-Ayaka-Namecard-Folding-Fan.png");
    box-shadow: 0 0.5em 1.4em #00000021;
    background-size: cover;
    background-position: center;
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
    /*border: 2px solid blue;*/
}
.float-button {
    position: absolute;
    top: 5vh;
    right: 5vw;
    width: 80px;
    height: 80px;
    background-color: red;
    border-radius: 50%;
    border: 2px solid black;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
    cursor: pointer;
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