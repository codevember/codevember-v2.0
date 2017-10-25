<template lang="html">
  <div class="header">
    <img :src="logo" alt="#Codevember">
  </div>
</template>

<script>
export default {
  name:'header',
  data () {
    return {
      logo: require('../assets/images/logo.png')
    }
  }
}
</script>

<style lang="scss">
  @import "../styles/header";
</style>
