<template>
<div class="workers">
    <div v-scrollanimation class="studio__crew">
        <div class="personal__info1">
        <img v-scrollanimation class="personal__photo" :src="photo"/>
        <h2 v-scrollanimation class="personal__name">{{name}}</h2>
        </div>
        <div class="personal__info2">
        <p v-scrollanimation class="personal__description">
        {{desc}}
      </p>
      <button v-scrollanimation v-if="ig_href != 0" class="ig_button" @click="handleClick()">
          <i class="gg-instagram"></i>
      </button>
      </div>
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
    width: 100vw;
    margin: 0 0 50px 0;
    padding: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .personal__photo{
      margin-top: 50px;
      width: 250px;
      border-radius: 20%;
      box-shadow: 0 10px 15px -8px rgba(0,0,0, .8);
    }
    .personal__name{
      text-align: center;
      font-family: 'Quicksand', sans-serif;
      font-size: 25px;
      font-weight: 400;
    }

    .personal__info1 {
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      justify-content: center;
    }
    .personal__info2 {
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      justify-content: center;
    }
    .personal__description{
      text-align: center;
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
        width: 30px;
        height: 30px;

      .gg-instagram {
        width: 100%;
        height: 100%;

        &:after {
          width: 50%;
          height: 50%;
          top: 7px;
          left: 6.5px;
        }

        &:before {
          width: 15%;
          height: 15%;
        }
      }
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 40px;
    }

    .studio__crew {
      .personal__photo {
        width: 350px;
      }

      .personal__name {
        font-size: 30px;
      }

      .personal__description {
        width: 500px;
        font-size: 20px;
      }
    }
  }

  @media (min-width: 1024px) {
    .studio__crew {
      flex-direction: row-reverse;
      justify-content: space-around;
      margin: 0 0 150px 0;

      .personal__info1 {
        text-align: center;
        width: 100%;
      }
      .personal__info2 {
        width: 100%;
        margin-top: 50px;
      }

      .ig_button {
        background: transparent;
        border: transparent;
        margin: 0;
        padding: 0;
        width: 40px;
        height: 40px;

      .gg-instagram {
        width: 100%;
        height: 100%;

        &:after {
          width: 55%;
          height: 55%;
          top: 9px;
          left: 8.5px;
        }

        &:before {
          border-radius: 100%;
          width: 15%;
          height: 15%;
          top: 2px;
          right: 2px;
        }
      }
    }
    }
  }
</style>
