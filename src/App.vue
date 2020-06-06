<template>
  <div class="app">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet">
    <div class="wrapper">
      <HeroImage />
    </div>
    <div class="container">
      <header>
      </header>
      <button class="contact__button" @click="toggleClick()">
        <img src="..\src\assets\kontakt button 2.png"/>
      </button>
      <transition name="slide-fade">
        <Contact v-if="visiblity" />
      </transition>
      <img class="studio__photo" src="..\src\assets\studio_photo.jpg"/>
      <p class="studio__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur a urna ac quam feugiat pellentesque. Integer at fermentum nulla.
        Quisque dignissim elit at odio viverra cursus.
        Aliquam erat volutpat. Vestibulum ac massa lobortis,
        efficitur diam ut, vulputate orci. Ut ac neque libero.
        Praesent egestas sed diam non pretium. Praesent urna quam,
        tincidunt sit amet dui nec, mattis luctus nulla.
        Etiam nec eros scelerisque, tristique diam ut, iaculis tortor.
      </p>
      <div class="studio__crew">
        <h1>NASZ ZESPÓŁ</h1>
        <img class="personal__photo" src="..\src\assets\pelikan.jpg"/>
        <h2 class="personal__name">Rafał "PELIKAN" Kowalski</h2>
        <p class="personal__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur a urna ac quam feugiat pellentesque. Integer at fermentum nulla.
        Quisque dignissim elit at odio viverra cursus.
      </p>
      </div>
      <div class="studio__portfolio">
        <h1>NASZE PRACE</h1>
      </div>
    </div>
  </div>
</template>

<script>
import HeroImage from './components/HeroImage.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',

  data() {
    return {
      visiblity: false,
    };
  },

  components: {
    HeroImage,
    Contact,
  },
  methods: {
    toggleClick() {
      this.visiblity = !this.visiblity;
    },
  },
};
</script>

<style lang="scss">
body{
  margin: 0;
  background-color: #E3E3E3;
}
.wrapper{
  width: 100%;
  height: 100vh;
}

.container{
  z-index: 3;
  background-color: #E3E3E3;
  width: 100%;
  margin: 0;
  padding: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 50em #E3E3E3;

    header{
    display: block;
    z-index: 2;
    top: 0;
    width: 0;
    height: 80px;
    border-bottom: 35px solid transparent;
    border-left: 100vw solid #353535;
  }

    .contact__button {
      align-self: flex-start;
      z-index: 5;
      width: 100px;
      position: relative;
      top: -8em;
      border: none;
      background: transparent;

      img{
        width: 100%;
      }
    }

  .studio__description{
    font-family: 'Quicksand', sans-serif;
    font-size: 15px;
    padding: 15px;
  }

  .studio__photo{
    width: 250px;
    border-radius: 20%;
    box-shadow: 0 10px 15px -8px rgba(0,0,0, .8);
  }

  .studio__crew{
    width: 100%;
    margin: 0;
    padding: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
      font-family: 'Quicksand', sans-serif;
      font-size: 30px;
      font-weight: 500;
      margin-bottom: -20px;
    }
    .personal__photo{
      margin-top: 50px;
      width: 250px;
      border-radius: 20%;
      box-shadow: 0 10px 15px -8px rgba(0,0,0, .8);
    }
    .personal__name{
      font-family: 'Quicksand', sans-serif;
      font-size: 25px;
      font-weight: 400;
      padding: 15px;
      text-align: center;
    }
    .personal__description{
      margin-top: -20px;
      font-family: 'Quicksand', sans-serif;
      font-size: 15px;
      padding: 15px;
    }
  }

  .studio__portfolio{

    h1{
      font-family: 'Quicksand', sans-serif;
      font-size: 30px;
      font-weight: 500;
    }
  }
}

.slide-fade-enter-active {
  transition: all .2s ease-in-out;
}
.slide-fade-leave-active {
  transition: all .2s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}
</style>
