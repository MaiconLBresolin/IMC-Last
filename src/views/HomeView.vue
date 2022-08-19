<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Slider />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Slider from '@/components/micro/Slider/Slider.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Slider
  }
}
</script>
