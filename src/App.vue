<template>
  <div id="app">
    <router-view/>
    <loader v-if='isLoading'></loader>
  </div>
</template>

<script>
import loader from './components/loader'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components:{
    loader
  },
  computed:{
    ...mapGetters({
      isLoading: 'getCallStatus'
    })
  }
}
</script>

<style lang="scss">
@import 'styles/main.scss';

</style>
