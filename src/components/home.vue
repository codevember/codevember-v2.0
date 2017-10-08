<template>
  <div class="home">
    <div class="calendar">
      <div v-on:mouseover='showPrompt = !showPrompt' v-for="day in 31"class="calendar-card">
        <div class="calendar-number">
          <h2 >
            {{ day < 10 ? 0 + day.toString() : day }}.
          </h2>
        </div>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.prompt-container{
  position: absolute;
  top: 55%;
  text-align: center;
  font-size: 4em;
  opacity: 0;
  user-select: none;
  pointer-events: none;
  transition: .3s all;
  transform: translateY(-50%);
  width: 100%;
}

.calendar{
  text-align: left;
  position: relative;
  width: 80%;
  margin: auto;
}
.calendar:after{
  content:'';
  display: block;
  clear:both;
}
.calendar-card{
  width: 100px;
  height: 100px;
  display: inline-block;
  float:left;
  position: relative;
  background:radial-gradient(circle at 0 0, #00F99D 0, #00DBC7 100%);
  overflow: hidden;
}
.calendar-number{
  background: white;
  width:100px;
  height:100px;
  transition: .3s all;

}

.calendar-number > h2{
  text-align: center;
  line-height: 100px;
  transition: .3s all;
  margin:0;
}
.calendar-number:hover{
  width: 90px;
  height:90px;
  margin: 5px;
  > h2 {
    line-height: 90px;
  }
}
.fadeIn{
  top: 50%;
  opacity:0.6;
}
</style>
