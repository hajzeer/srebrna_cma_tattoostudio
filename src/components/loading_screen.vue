<template>
  <transition name="fade">
    <div class="hero__imageOuter">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet">
        <link href='https://css.gg/loadbar-alt.css' rel='stylesheet'>
        <div v-if="show" class="hero__image">
          <img
            class="logo"
            src="../../src/assets/srebrna_cma_logo —smokewhite.png"
          />
          <i class="gg-loadbar-alt"></i>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HeroImage',

  data() {
    return {
      show: true,
    };
  },
  mounted() {
    this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
      }, 10000);
    },
  },
};
</script>

<style lang="scss" scoped>

.hero__image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;

  z-index: 9999;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  background-color: #1c1c1c;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: 50% 100%;

  &::after {
    content: '';
    background: rgba(0, 0, 0, .5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
  }

  .scroll__text{
    z-index: 2;
    text-align: center;
    color: #C2C2C2;
    font-size: 18px;
    font-family: 'Quicksand', sans-serif;
  }

  .logo{
    z-index: 2;
    width: 100%;
    height: auto;
    margin: 0;
  }
}

@media (min-width: 768px) {

  .hero__image {

    .logo {
      width: 90%;
    }
    .scroll__text {
      font-size: 25px;
    }
  }
}

@keyframes loadbaralt {
    0%,to { left: 0; right: 80% }
    25%,75% { left: 0; right: 0 }
    50% { left: 80%; right: 0 }
}
.gg-loadbar-alt,
.gg-loadbar-alt::before,
.gg-loadbar-alt::after {
    display: block;
    box-sizing: border-box;
    height: 10px;
    border-radius: 4px;
    color: #C2C2C2;
}
.gg-loadbar-alt {
    position: relative;
    transform: scale(var(--ggs,1));
    width: 200px
}
.gg-loadbar-alt::after,
.gg-loadbar-alt::before {
    background: currentColor;
    content: "";
    position: absolute
}
.gg-loadbar-alt::before {
    animation: loadbaralt 20s cubic-bezier(0,0,.58,1) infinite
}
.gg-loadbar-alt::after {
    width: 200px;
    opacity: .3
}


@media (min-width: 1024px) {

  .hero__image {

    background-position: 50% 50%;
    .logo {
      width: 35%;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
