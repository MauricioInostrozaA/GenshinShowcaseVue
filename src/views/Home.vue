<template>
    <div class="home">
      <div class="hero">
        <div class="hero-text">
            <character-card/>
        </div>
      </div>
    </div>
  </template>
  
<script>
import CharacterCard from "../components/CharacterCard.vue";


export default {
    name: "Home",
    components: {
        CharacterCard,
    },
  };
</script>
  
<style lang="scss" scoped>
  .hero {
    background-image: url("../assets/hero-bg.png");
    background-attachment: fixed;
    position: relative;
    height: 100vh;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
    .hero-text {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;
      h4 {
        text-transform: uppercase;
        font-size: 22px;
        padding-bottom: 4px;
      }
      h2 {
        font-size: 50px;
        @media (min-width: 550px) {
          font-size: 80px;
        }
      }
      hr:nth-child(2) {
        max-width: 75%;
        margin-bottom: 16px;
      }
      hr:nth-child(4) {
        height: 6px;
        background-color: #fff;
        border: none;
        max-width:75%;
        margin-top: 25px;
      }
    }
  }
</style>