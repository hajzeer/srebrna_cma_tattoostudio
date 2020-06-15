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
        <div class="studio__info">
          <img v-scrollanimation class="studio__photo" src="..\src\assets\studio_photo.jpg"/>
      <p v-scrollanimation class="studio__description">
        Srebrna Ćma była w marzeniach jej twórcy już od 2019 roku, jednak
        dopiero w 2020 udało się je spełnić. Stała się tym samym najmłodszym
        studiem tatuażu na mapie Tarnowskich Gór. Po kilkuletnim doświadczeniu
        w branży – Rafał „Pelikan” Kowalski – postanowił stworzyć własne
        miejsce, w którym każdy doświadczy prawdziwego piękna świata tatuażu.
        Świat ten łączy ze sobą ludzi, historie, pasje i marzenia, których
        wynikiem jest lub będzie Wasz tatuaż
      </p>
        </div>
      <div class="workers">
      <h1 v-scrollanimation>NASZ ZESPÓŁ</h1>
      <Workers
        v-for="item in workers"
        :item="item"
        :key="item.id"
      />
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
import Workers from './components/Workers.vue';

import photo0 from './assets/pelikan.jpg';

export default {
  name: 'App',

  data() {
    return {
      visiblity: false,

      workers: [
        {
          id: 0,
          photo: photo0,
          name: 'Rafał "Pelikan" Kowalski',
          desc: 'Rafał „Pelikan”– założyciel Srebrnej Ćmy. Tatuator od 2015 roku. Tarnogórzanin, który ostatnie lata spędził pracując w katowickich studiach tatuażu. Najlepiej czuje się w czerni, pracując w stylu dotwork/blackwork. Jego tatuaże cechują się delikatną kreską, ale woli gdy jego prace po prostu mówią same za siebie',
          ig_href: 'https://www.instagram.com/tattoopelikan/?hl=pl',
        },
        {
          id: 0,
          photo: '#',
          name: 'Magda',
          desc: 'Magda – menadżerka studia. Wkraczająca w świat tatuażu, gotowa na wszystkie nowe wyzwania, które przyniesie je to miejsce',
          ig_href: 0,
        },
      ],
    };
  },

  components: {
    HeroImage,
    Contact,
    Workers,
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
  background-color: #E3E3E3;
  width: 100vw;
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

  .studio__info {
    width: 100%;
    margin: 0;
    padding: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .studio__description{
    text-align: center;
    font-family: 'Quicksand', sans-serif;
    font-size: 15px;
    padding: 20px;
  }

  .studio__photo{
    width: 250px;
    border-radius: 20%;
    box-shadow: 0 10px 15px -8px rgba(0,0,0, .8);
  }

  h1{
    text-align: center;
    font-family: 'Quicksand', sans-serif;
    font-size: 30px;
    font-weight: 500;
  }
}

@media (min-width: 768px) {
  .contact__button {
    top: 17em;
  }

  .container {
    header {
      top: 0;
      width: 0;
      height: 150px;
    }

    .logo {
      top: -10.5em;
      width: 175px;
    }

  .studio__info {
    margin-top: -100px;

    .studio__photo {
      width: 350px;
      margin-left: 50px;
      margin-right: 20px;
    }
    .studio__description {
      width: 600px;
      font-size: 20px;
    }
  }

  h1 {
    font-size: 40px;
  }
  }
}

@media (min-width: 1024px) {
  .container {

  .studio__info {
    margin-top: -100px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .studio__photo {
      width: 450px;
    }
    .studio__description {
      width: 500px;
      font-size: 20px;
    }
  }

  h1{
    font-size: 4em;
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
