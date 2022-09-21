<template>
  <header class="header">
    <label for="">
      Type character name here:
      <input 
        type="text"
        v-model="characterName" 

      />
      <button
        class="searchbutton"
        @click="searchCharacter()"
      >
      Search
      </button>
    </label>
  </header>

  <main 
    class="main"
    v-if="Object.entries(characterData).length > 0"
  >
    <section class="characterCard">
      <div class="nameImage">
        <h1 class="characterName">{{ characterData.name }}</h1>
        <img 
          class="characterImage"
          :src="`https://api.genshin.dev/characters/${characterName}/icon`"
          :alt="characterData.name"
        >
      </div> 
      <ul class="element">
        <h2>Element:</h2>
          <span> {{ characterData.vision }}</span>
      </ul> 
      <ul class="weapon">
        <h2>Weapon:</h2>
          <span> {{ characterData.weapon }}</span>
      </ul>
    </section>
  </main>
</template>

<script>
  import { giapi } from "@/api/giapi";

  export default {
    name: "App",

    data() {
      return {
        characterData: {},
        characterName: "",
      }
    },

    methods: {
      async searchCharacter() {
        try{
          const characterToSearch = await fetch(`${giapi}/${this.characterName}`)
          const character  = await characterToSearch.json()
          this.characterData = character
          console.log(character)
          return character
        } catch (error) {
          alert('Character not found')
        }
      }
    }
  }
</script>

<style lang="scss">

</style>


