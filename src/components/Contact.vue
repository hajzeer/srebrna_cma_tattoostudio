<template>
<div>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet">
<link href='https://css.gg/instagram.css' rel='stylesheet'>
<link href='https://css.gg/facebook.css' rel='stylesheet'>
  <h1>KONTAKT</h1>
  <div class="contact" id="contact">
    <div class="contact__map">
      <button class="map__button" @click="handleClick('https://goo.gl/maps/d6FQHGyMZybWhN8t5')">
        <img class="contact__mapInner" src="../assets/mapa_www.png" alt="location map"/>
      </button>
    </div>
    <div class="contact__inner">
  <ul class="contact__list">
    <li>SREBRNA ĆMA<br/>TATTOO STUDIO</li>
    <li>
      <a href="https://goo.gl/maps/d6FQHGyMZybWhN8t5">
        Piastowska 7 Tarnowskie Góry
        <br/>
        <span>Prowadź do Nas</span>
      </a>
    </li>
    <li>
      <a href="tel:+48-501-141-250">
        501 141 250
        <br/>
        <span>Zadzwoń do Nas</span>
      </a>
    </li>
    <li>
      <a href="mailto: studio@srebrnacma.pl">
        studio@srebrnacma.pl
        <br/>
        <span>Napisz do Nas</span>
      </a>
    </li>
  </ul>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Contact',

  methods: {
    handleClick(el) {
      window.open(el, '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
.contact{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    background-color: #353535;
    font-family: 'Quicksand', sans-serif;
    text-align: center;
    .contact__inner {
      width: 100%;
    }
    .contact__list{
      list-style-type: none;
      padding: 0;
      color: #E3E3E3;
      ::first-line{
        font-size: 15px;
        font-weight: 500;
      }
      li {
        margin-bottom: 20px;
      a {
        text-decoration: none;
        color: #E3E3E3;

        span {
          text-decoration: underline;
          text-decoration-color: #C2C2C2;
        }
      }
    }
  }

  .contact__map {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;

    .map__button {

      width: 100%;
      height: auto;
      margin: 0;
      padding: 0;
      border: none;
      background: transparent;

      .contact__mapInner {

        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;
      }
    }
  }
}

@media (min-width: 786px) {
  .contact {
    flex-direction: row;

    .contact__list {
      ::first-line {
        font-size: 20px;
      }
    }
  }
}
</style>
