<template>
<div class="workers">
    <div v-scrollanimation class="studio__crew">
        <h1 v-scrollanimation>NASZ ZESPÓŁ</h1>
        <img v-scrollanimation class="personal__photo" :src="photo"/>
        <h2 v-scrollanimation class="personal__name">{{name}}</h2>
        <p v-scrollanimation class="personal__description">
        {{desc}}
      </p>
      <button v-scrollanimation class="ig_button" @click="handleClick()">
          <i class="gg-instagram"></i>
      </button>
    </div>
</div>
</template>

<script>
export default {
  name: 'workers',

  props: {
    item: {
      tyle: Object,
    },
  },

  data() {
    return {
      id: this.item.id,
      name: this.item.name,
      photo: this.item.photo,
      desc: this.item.desc,
      ig_href: this.item.ig_href,
    };
  },

  methods: {
    handleClick() {
      window.open(this.item.ig_href, '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>

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
      text-align: center;
    }
    .personal__description{
      margin-top: -25px;
      font-family: 'Quicksand', sans-serif;
      font-size: 15px;
      padding: 20px;
    }

    .ig_button {
        background: transparent;
        border: transparent;
        margin: 0;
        padding: 0;
    }
  }
</style>
