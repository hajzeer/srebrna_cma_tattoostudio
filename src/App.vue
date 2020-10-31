<template>
  <div class="app">
    <LoadingScreen />
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet">
    <link href='https://css.gg/instagram.css' rel='stylesheet'>
    <div class="wrapper">
      <HeroImage />
    </div>
      <button v-fixedposition class="contact__button" @click="toggleClick()">
        <img src="../src/assets/kontakt button 2.png" alt="contact button 2"/>
      </button>
    <div class="container">
      <transition name="fade">
        <div v-if="visibility">
          <Contact />
        </div>
      </transition>
      <header>
      </header>
      <img class="logo" src="../src/assets/srebrna_cma_logo —smokewhite.png" alt="logo"/>
        <div class="studio__info">
          <img
            v-scrollanimation
            class="studio__photo"
            src="../src/assets/42R.jpg"
            alt="studio photo"
          />
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
        <div class="resoults">
        <WorkImgList
          v-scrollanimation
          v-for="item in portfolio"
          :item="item"
          :key="item.id"
        />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import pelikan from './assets/01R.jpg';
import magda from './assets/17R.jpg';

import workImg1 from './assets/WorkImg/img_1.jpg';
import workImg2 from './assets/WorkImg/img_2.jpg';
import workImg3 from './assets/WorkImg/img_3.jpg';
import workImg4 from './assets/WorkImg/img_4.jpg';
import workImg5 from './assets/WorkImg/img_5.jpg';
import workImg6 from './assets/WorkImg/img_6.jpg';
import workImg7 from './assets/WorkImg/img_7.jpg';
import workImg8 from './assets/WorkImg/img_8.jpg';
import workImg9 from './assets/WorkImg/img_9.jpg';


export default {
  name: 'App',

  data() {
    return {
      visibility: false,

      workers: [
        {
          id: 0,
          photo: pelikan,
          name: 'Rafał "Pelikan" Kowalski',
          desc: 'Rafał „Pelikan”– założyciel Srebrnej Ćmy. Tatuator od 2015 roku. Tarnogórzanin, który ostatnie lata spędził pracując w katowickich studiach tatuażu. Najlepiej czuje się w czerni, pracując w stylu dotwork/blackwork. Jego tatuaże cechują się delikatną kreską, ale woli gdy jego prace po prostu mówią same za siebie',
          ig_href: 'https://www.instagram.com/tattoopelikan/?hl=pl',
        },
        {
          id: 1,
          photo: magda,
          name: 'Magda',
          desc: 'Magda – menadżerka studia. Wkraczająca w świat tatuażu, gotowa na wszystkie nowe wyzwania, które przyniesie je to miejsce',
          ig_href: 0,
        },
      ],

      portfolio: [
        {
          id: 0,
          photo: workImg1,
        },
        {
          id: 1,
          photo: workImg2,
        },
        {
          id: 2,
          photo: workImg3,
        },
        {
          id: 3,
          photo: workImg4,
        },
        {
          id: 4,
          photo: workImg5,
        },
        {
          id: 5,
          photo: workImg6,
        },
        {
          id: 6,
          photo: workImg7,
        },
        {
          id: 7,
          photo: workImg8,
        },
        {
          id: 8,
          photo: workImg9,
        },
      ],
    };
  },

  components: {
    WorkImgList: () => import('./components/WorkImgList.vue'),
    HeroImage: () => import('./components/HeroImage.vue'),
    Contact: () => import('./components/Contact.vue'),
    Workers: () => import('./components/Workers.vue'),
    LoadingScreen: () => import('./components/loading_screen.vue'),
  },
  methods: {
    toggleClick() {
      this.visibility = !this.visibility;
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
  transition: all .6s 10s ease-in-out;
}
.fixed{
  opacity: 1;
}

body{
  width: 100%;
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
  overflow: hidden;
  background-color: #353535;
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
    overflow: hidden;
    display: block;
    width: 100%;
    height: 100px;
    background: #1c1c1c;
  }
  .logo{
    align-self: flex-start;
    width: 100px;
    position: relative;
    top: -6em;
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
    color: #E3E3E3;
  }

  .studio__photo{
    width: 300px;
    box-shadow: 0 10px 15px -8px rgba(0,0,0, .8);
  }

  h1{
    text-align: center;
    font-family: 'Quicksand', sans-serif;
    font-size: 30px;
    font-weight: 500;
    color: #E3E3E3;
  }

  .resoults {
    margin-top: 1em;
    justify-items: center;
    margin-bottom: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
}

@media (min-width: 768px) {
  .contact__button {
    top: 17em;
  }

  .container {
    header {
      top: 0;
      height: 150px;
    }

    .logo {
      top: -9.5em;
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
    .resoults {
      grid-template-columns: 1fr 1fr 1fr;
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
