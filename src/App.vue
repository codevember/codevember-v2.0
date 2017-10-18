<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    console.log(toDepth);
   // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    //next()
  }
}
</script>

<style lang="scss">
@import 'styles/main.scss';

</style>
