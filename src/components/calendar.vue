<template>
  <div class="home">
    <div class="calendar">
      <div  v-for="day in 30" class="calendar-item" @click="routerAnim(day)">
          <div v-on:mouseover='showPrompt($event,day)'v-on:mouseleave='hidePrompt($event, day)' class="calendar-card">
            <div class="calendar-card-gradient"></div>
            <div class="calendar-card-bg"></div>
            <h2 class="calendar-card-number">
              {{ day < 10 ? 0 + day.toString() : day }}.
            </h2>
          </div>
      </div>
    </div>
    <div class="after-calendar">
      <div class="social">
        <a href="https://twitter.com/codevember_">
         <h4>tw</h4>
        </a>

      </div>
      <div class="year-selector">
        <h4 @click="updateYear(2017)" :class='{"selected-year": yearSelected == 2017}'>2017</h4>
        <h4 @click="updateYear(2016)" :class='{"selected-year": yearSelected == 2016}'>2016</h4>
      </div>
    </div>

    <div  class="prompt-container prompt" v-for="prompt in prompts" >
      <h2   >{{prompt}}</h2>
    </div>
  </div>
</template>

<script>
import { TweenMax } from 'gsap'
import { mapGetters } from 'vuex'
import prompts from '../lib/prompts.js'

export default {
  name: 'home',
  data () {
    return {
      layout:[{
        columns:0,
        elements:[]
      }],
      prompts: [],
      promptsEl:[]
    }
  },
  computed:{
    ...mapGetters({
      yearSelected: 'getYear'
    })
  },
  mounted() {
    this.definePrompts()
  },
  methods:{
    routerAnim(day){
      let formatDay = day < 10 ? 0 + day.toString() : day
      this.$store.dispatch('getContributionsOfDay', {
        year: this.yearSelected,
        day: day
      })
      this.animOut(()=>{
        this.$router.push({ name: 'day', params: { day: formatDay, year: this.yearSelected }})
      })
    },

    definePrompts () {
      this.prompts = prompts[this.yearSelected]
      this.$nextTick(() => {
        this.promptsEl = this.$el.querySelectorAll('.prompt')
      })
    },

    updateYear(year){
      this.$store.commit('updateYear', year)
      this.definePrompts()
    },

    animOut(cb){
      var loop = 0
      for (var i = 0; i < this.layout.length; i++) {
        TweenMax.staggerFromTo(this.layout[i].elements, 0.7, {opacity:1}, {opacity:0}, 0.08, ()=> {
          loop++
          if(loop == this.layout.length - 1) cb()
        });
      }
    },

    showPrompt(self, day){
      if (!this.promptsEl[day - 1]) return

      this.promptsEl[day - 1].classList.add('fadeIn')
    },

    hidePrompt(self, day){
      if (!this.promptsEl[day - 1]) return

      this.promptsEl[day - 1].classList.remove('fadeIn')
    },

    addEvent (obj, type, fn) {
      if (obj.addEventListener) {
        obj.addEventListener(type, fn, false)
      } else if (obj.attachEvent) {
        obj.attachEvent('on' + type, () => {
          return fn.call(obj, window.event)
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import "../styles/calendar";
</style>
