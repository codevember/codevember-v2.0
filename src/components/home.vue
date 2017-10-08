<template lang="html">
  <div class="home">
    <calendar></calendar>
  </div>
</template>

<script>
import Calendar from '@/components/calendar'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  name:'home',
  components:{
    Header,
    Calendar,
    Footer
  }
}
</script>

<style lang="css">
</style>
