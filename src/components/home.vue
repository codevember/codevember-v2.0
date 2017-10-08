<template lang="html">
  <div class="home">
    <calendar></calendar>
  </div>
</template>

<script>
import Calendar from '@/components/calendar'
import HeaderTitle from '@/components/header'
import FooterHome from '@/components/footer'

export default {
  name:'home',
  components:{
    HeaderTitle,
    Calendar,
    FooterHome
  }
}
</script>

<style lang="css">
</style>
