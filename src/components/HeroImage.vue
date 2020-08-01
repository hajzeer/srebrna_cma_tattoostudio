<template>
    <div class="hero__imageOuter">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet">
        <link href='https://css.gg/chevron-down.css' rel='stylesheet'>
        <div class="hero__image">
          <img
            v-scrollanimation
            class="logo"
            src="../../src/assets/srebrna_cma_logo —smokewhite.png"
          />
          <p v-scrollanimation class="scroll__text">PRZEWIŃ ABY ZOBACZYĆ WIĘCEJ</p>
          <i v-scrollanimation class="gg-chevron-down"></i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HeroImage',
};
</script>

<style lang="scss" scoped>

.hero__image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;

  z-index: -99;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  background-image: url('../assets/HeroImage.jpg');
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

  .gg-chevron-down {
    z-index: 2;
    box-sizing: border-box;
    color: #C2C2C2;
    animation: jumper 2s infinite;
  }

  .logo{
    z-index: 2;
    width: 100%;
    height: auto;
    margin: 0;
  }
}

@keyframes jumper {
  0% {
    transform: translateY(0);
  }
  50%{
    transform: translateY(15px);
  }
  100%{
    transform: translateY(0)
  }
}

@media (min-width: 768px) {

  .hero__image {

    .logo {
      width: 70%;
    }
    .scroll__text {
      font-size: 25px;
    }

    .gg-chevron-down {
      &::after {
        width: 20px;
        height: 20px;
      }
    }
  }
}

@media (min-width: 1024px) {

  .hero__image {

    background-position: 50% 50%;
    .logo {
      width: 35%;
    }
  }
}

.before-enter {
  transform: scale(1.7);
  transition: all .6s 5.5s ease-in-out;
}
.enter{
  transform: scale(1);
}
</style>
