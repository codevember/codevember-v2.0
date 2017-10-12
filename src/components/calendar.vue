<template>
  <div class="home">
    <div class="calendar">
      <div v-on:mouseover='showPrompt = !showPrompt' v-for="day in 30"class="calendar-card">
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
      windowResizeRate: 200,
      timeoutResize :{},
      layout:[{
        columns:0,
        elements:[]
      }],
      prompts:[
        ''
      ]
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.buildLayout()
      this.addEvent(window, 'resize', () => {
        clearTimeout(this.timeoutResize)
        this.timeoutResize = setTimeout(this.buildLayout(), this.windowResizeRate)
      })
    })
  },
  methods:{
    buildLayout(){
      let tmpLayout = this.$el.querySelectorAll('.calendar-card')
      let columnsId = 0
      tmpLayout.length > 0 && this.layout[columnsId].elements.push(tmpLayout[0])
      for (var i = 1; i < tmpLayout.length; i++) {
        if(tmpLayout[i].getBoundingClientRect().top != tmpLayout[i-1].getBoundingClientRect().top){
          columnsId++
          this.layout.push({
            columns:columnsId,
            elements:[]
          })
        }
       this.layout[columnsId].elements.push(tmpLayout[i])
      }
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
