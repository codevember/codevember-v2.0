<template lang="html">
  <div class="dayManager">
    <router-link :to="{name:'home'}">
      <h1>Day #{{$route.params.day}}</h1>
    </router-link>
    <div class="project-container">
      <div class="project-cards" v-for="project in projects">
        <a :href="project.url">
        <div class="project-image">
          <img class="":src="project.image" alt="">
        </div>
        <h2>{{ project.author }}  </h2>
        <h4>{{ project.title }}</h4>
        </a>
      </div>
      <div v-if="projects.length == 0 && !this.isLoading" class="no-project">
         <h2>There is no project for this day 😿</h2>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name:'projectManager',
  computed:{
    ...mapGetters({
      projects: 'getContribs',
      isLoading: 'getCallStatus'
    })
  },
  data(){
    return {

    }
  },
  mounted(){
    this.$nextTick(()=>{
       var test = this.$route
       if (!this.isLoading && this.projects.length == 0) {
          this.$store.dispatch('getContributionsOfDay', {
            year: this.$route.params.year,
            day: parseInt(this.$route.params.day)
          })
       }
    })
  }
}
 </script>

 <style lang="scss">
 @import "../styles/project";
 .project{
   display: inline-block;
   margin-left: 20px;
 }

 </style>
