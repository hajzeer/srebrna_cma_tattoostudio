<template>
<div>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet">
<link href='https://css.gg/close.css' rel='stylesheet'>
<link href='https://css.gg/instagram.css' rel='stylesheet'>
<link href='https://css.gg/facebook.css' rel='stylesheet'>
  <div class="contact" v-if="visible">
    <button class="close__cross" @click="toggleClick()">
      <i class="gg-close"></i>
  </button>
  <ul class="contact__list">
    <li>SREBRNA ĆMA TATTOO STUDIO</li>
    <li>
      <a href="https://goo.gl/maps/ozFcN2nJvvj3aeDP6">
        Piastowska 7, Tarnowskie Gory
        <br/>
        (Prowadź do Nas)
      </a>
    </li>
    <li>
      <a href="tel:+48-123-456-789">
        123 456 789
        <br/>
        (Zadzwoń do Nas)
      </a>
    </li>
    <li>
      <a href="mailto: mail@mail.com">
        mail@mail.com
        <br/>
        (Napisz do Nas)
      </a>
    </li>
  </ul>
  <div class="social__media">
    <i class="gg-instagram" ></i>
    <i class="gg-facebook"></i>
  </div>
    <div className="footer">
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
  data() {
    return {
      visible: true,
    };
  },

  methods: {
    toggleClick() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style lang="scss" scoped>
.close__cross {
  background: transparent;
  border: transparent;
  align-self: flex-end;
  padding: 20px;
  top: -100px;
}
.contact{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    background-color: #E3E3E3E3;
    font-family: 'Quicksand', sans-serif;
    text-align: center;

    .contact__list{
      list-style-type: none;
      padding: 0;
      ::first-line{
        font-size: 20px;
        font-weight: 500;
      }
      li {
        margin-bottom: 20px;
      a {
        text-decoration: none;
        color: #000000;
      }
    }
  }

  .social__media {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
