<template>
  <div class="app">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet">
    <link href='https://css.gg/instagram.css' rel='stylesheet'>
    <div class="wrapper">
      <HeroImage />
    </div>
      <button v-fixedposition class="contact__button" @click="toggleClick()">
        <img src="..\src\assets\kontakt button 2.png"/>
      </button>
    <div class="container">
      <transition name="fade">
        <div v-if="visiblity">
          <Contact />
        </div>
      </transition>
      <header>
      </header>
      <img class="logo" src="..\src\assets\srebrna_cma_logo —smokewhite.png"/>
      <img v-scrollanimation class="studio__photo" src="..\src\assets\studio_photo.jpg"/>
      <p v-scrollanimation class="studio__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur a urna ac quam feugiat pellentesque. Integer at fermentum nulla.
        Quisque dignissim elit at odio viverra cursus.
        Aliquam erat volutpat. Vestibulum ac massa lobortis,
        efficitur diam ut, vulputate orci. Ut ac neque libero.
        Praesent egestas sed diam non pretium. Praesent urna quam,
        tincidunt sit amet dui nec, mattis luctus nulla.
        Etiam nec eros scelerisque, tristique diam ut, iaculis tortor.
      </p>
      <div v-scrollanimation class="studio__crew">
        <h1 v-scrollanimation>NASZ ZESPÓŁ</h1>
        <img v-scrollanimation class="personal__photo" src="..\src\assets\pelikan.jpg"/>
        <h2 v-scrollanimation class="personal__name">Rafał "PELIKAN" Kowalski</h2>
        <p v-scrollanimation class="personal__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur a urna ac quam feugiat pellentesque. Integer at fermentum nulla.
        Quisque dignissim elit at odio viverra cursus.
      </p>
      <i v-scrollanimation class="gg-instagram" ></i>
      </div>
      <div class="studio__portfolio">
        <h1 v-scrollanimation>NASZE PRACE</h1>
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

.before-enter {
  opacity: 0;
  transition: all .4s .4s ease-in;
}
.enter{
  opacity: 1;
}

.before-fixed {
  opacity: 0;
  transition: all .6s 4s ease-in-out;
}
.fixed{
  opacity: 1;
}

body{
  margin: 0;
  background-color: #E3E3E3;
}
.wrapper{
  width: 100%;
  height: 100vh;
}

    .contact__button {
      align-self: flex-start;
      z-index: 999;
      width: 100px;
      top: 7em;
      right: 1em;
      border: none;
      background: transparent;
      position: fixed;

      img{
        width: 100%;
      }
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
  box-shadow: 0 0 50rem #E3E3E3;

    header{
    display: block;
    z-index: 5;
    top: 0;
    width: 0;
    height: 80px;
    border-bottom: 35px solid transparent;
    border-left: 100vw solid #353535;
  }
  .logo{
    align-self: flex-start;
    z-index: 6;
    width: 100px;
    position: relative;
    top: -6.5em;
    transform: rotate(45deg);
  }
  .studio__description{
    font-family: 'Quicksand', sans-serif;
    font-size: 15px;
    padding: 20px;
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
      padding: 20px;
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

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
