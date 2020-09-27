<template>
  <div class="portfolio">

      <img class="portfolio__img" :src="photos" @click="handleClick()"/>
  </div>
</template>

<script>
export default {
  name: 'WorkImgList',
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      id: this.item.id,
      photo: this.item.photo,
    };
  },
  computed: {
    photos() {
      return `${this.photo}`;
    },
  },
  methods: {
    handleClick() {
      window.open('https://www.instagram.com/srebrnacma/', '_blank');
    },
  },
};
</script>

<style scoped lang="scss">
.portfolio {
  width: 100%;
}

.portfolio__img {
  width: 150px;
  height: 150px;
  box-shadow: 0 10px 15px -8px rgba(0,0,0, .8);

}

@media (min-width: 768px) {
  .portfolio__img {
    width: 300px;
    height: 300px;
  }
}
@media (min-width: 1024px) {
  .portfolio__img {
    width: 400px;
    height: 400px;
  }
}

</style>
