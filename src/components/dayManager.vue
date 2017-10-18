<template lang="html">
  <div class="dayManager">
    <router-link :to="{name:'home'}">
      <h1>Day #{{$route.params.day}}</h1>
    </router-link>
    <div class="project-container">
      <div class="project" v-for="project in projects">
        <h2>projet</h2>
      </div>

    </div>
  </div>
</template>

<script>
import Api from '../lib/Api'
export default {
  name:'projectManager',
  data(){
    return {
      projects:[]
    }
  },
  mounted(){
    Api.getContributionsOfDay('2016', ~~this.$route.params.day).then((contribs) => {
      this.hasContribs = (contribs.length > 0)
      this.projects = contribs
    });
  }
}
 </script>

 <style lang="css">
 .project{
   display: inline-block;
   margin-left: 20px;
 }

 </style>
