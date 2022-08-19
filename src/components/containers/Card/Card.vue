<template>
  <div class="mainCard">
    <h1>Calcule seu IMC</h1>
    <Slider />
  </div>
</template>

<script>
import Slider from '@/components/micro/Slider/Slider.vue';
export default {
    // eslint-disable-next-line
    name: "Card",
    components:{
        Slider 
    },
    methods:{
      imcSetter(){
      }
    }
}
</script>

<style scoped lang="scss">
@import './Card.scss';
</style>