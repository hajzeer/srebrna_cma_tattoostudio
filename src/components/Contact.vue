<template>
<div>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet">
<link href='https://css.gg/instagram.css' rel='stylesheet'>
<link href='https://css.gg/facebook.css' rel='stylesheet'>
  <div class="contact">
  <ul class="contact__list">
    <li>SREBRNA ĆMA<br/>TATTOO STUDIO</li>
    <li>
      <a href="https://goo.gl/maps/ozFcN2nJvvj3aeDP6">
        Piastowska 7 Tarnowskie Góry
        <br/>
        (Prowadź do Nas)
      </a>
    </li>
    <li>
      <a href="tel:+48-601-931-252">
        601 931 252
        <br/>
        (Zadzwoń do Nas)
      </a>
    </li>
    <li>
      <a href="mailto: studio@srebrnacma.pl">
        studio@srebrnacma.pl
        <br/>
        (Napisz do Nas)
      </a>
    </li>
  </ul>
  <div class="social__media">
    <button class="ig__button" @click="handleClick('https://www.instagram.com/srebrnacma/')">
      <i class="gg-instagram" ></i>
    </button>
    <button class="fb__button" @click="handleClick('https://www.facebook.com/Srebrna-%C4%86ma-Tattoo-Studio-112720617142798')">
      <i class="gg-facebook"></i>
    </button>
  </div>
    <div class="footer">
      <p class="designer">
        Polityka prywatności: <br/>
        © 2020  Designed by Grupa CODA
        for Srebrna Ćma Tattoo Studio<br/>
        All rights reserved
      </p>
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
    position: fixed;
    z-index: 98;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    background-color: #353535;
    font-family: 'Quicksand', sans-serif;
    text-align: center;

    .contact__list{
      list-style-type: none;
      padding: 0;
      color: #E3E3E3;
      ::first-line{
        font-size: 20px;
        font-weight: 500;
      }
      li {
        margin-bottom: 20px;
      a {
        text-decoration: none;
        color: #E3E3E3;
      }
    }
  }

  .social__media {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .ig__button {
    background: transparent;
    border: transparent;
    color: #E3E3E3;
  }

  .fb__button{
    background: transparent;
    border: transparent;
    color: #E3E3E3;
  }

  .footer {
    color: #E3E3E3;
  }

  @media (min-width: 768px) {
    .contact__list {
      font-size: 30px;
      ::first-line {
      font-size: 35px;
      }
    }

    .footer {
      .designer {
        margin: 50px 0 0 0;
        font-size: 20px;
      }
    }
  }
}
</style>
