<template>
  <div class="home">
    <div class="calendar">
      <div v-on:mouseover='showPrompt = !showPrompt' v-for="day in 31"class="calendar-card">
        <router-link :to="{ name: 'day',params:{ day: day < 10 ? 0 + day.toString() : day }}">
          <div class="calendar-number">
            <h2 >
              {{ day < 10 ? 0 + day.toString() : day }}.
            </h2>
          </div>
        </router-link>
      </div>
      <div :class="{fadeIn: showPrompt}" class="prompt-container">
        <h2 class="prompt">Prompts</h2>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      showPrompt: false,
      prompts:[
        ''
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../styles/calendar";
</style>
