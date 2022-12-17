<template>
  <div class="app">
    <Navigation/>
    <router-view />
    
    
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import CharacterCard from './components/CharacterCard.vue';

export default {
  name: "App",
  components: {
    Navigation,
    CharacterCard,
  },
  methods: {
    updateComponent() {
      this.$forceUpdate()
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway:wght@400;500&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}
.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>