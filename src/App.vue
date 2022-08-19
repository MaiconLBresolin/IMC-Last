<template>
  <div id="body">
    <Card />
  </div>
</template>

<script>
import Card from '@/components/containers/Card/Card.vue'
export default {
  components: {
    Card
  }
}
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
#body {
 background: linear-gradient(#f5c447b3, #f5c54e99);
  width: 100vw;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
#app::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 45px;
    height: 45px;
    accent-color: #f7b718;
    cursor: pointer;
}
</style>