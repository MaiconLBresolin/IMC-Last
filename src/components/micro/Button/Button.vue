<template>
  <button v-on:click="calcButton">Calcular</button>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: "Button",
    props:{
        calcButton: String
    }
}
</script>

<style scoped lang="scss">
@import './Button.scss';
</style>