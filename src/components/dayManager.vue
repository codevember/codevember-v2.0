<template lang="html">
  <div class="dayManager">
    <router-link :to="{name:'home'}">
      <h1>Day #{{$route.params.day}}</h1>
    </router-link>
    <div class="project-container">
      <div class="project" v-for="project in projects">
        <h2>projet</h2>
      </div>
      <div v-if="projects.length == 0" class="no-project">
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
      projects: 'getContribs'
    })
  },
  data(){
    return {

    }
  },
  mounted(){
  }
}
 </script>

 <style lang="css">
 .project{
   display: inline-block;
   margin-left: 20px;
 }

 </style>
