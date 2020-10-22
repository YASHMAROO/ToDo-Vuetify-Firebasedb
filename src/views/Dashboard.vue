<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-12">
      <v-row gutter class="mb-6">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small color="grey lighten-4" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon> 
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort by title</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small color="grey lighten-4" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-face</v-icon> 
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort by person</span>
        </v-tooltip>
         
      </v-row>
      <v-card flat class="px-3" v-for="(project,index) in projects" :key="(project,index)">
        <v-row row wrap :class="`pa-6 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Due Date</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="text-right">
              <v-chip small :class="`${project.status} white--text caption my-6`">{{ project.status }}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import db from '@/fb';

export default {
  name: 'Home',
  data(){
    return{
       projects: []
    };
  },
  methods:{
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  created(){
    db.collection('projects').onSnapshot(res => {
      const changes=res.docChanges();
      changes.forEach(change => {
        if(change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id:change.doc.id
          })
        }
      })
    })
  }
}
</script>

<style scoped>
.project.complete{
  border-left:4px solid #3cd1c2;
}

.project.ongoing{
  border-left:4px solid orange;
}

.project.overdue{
  border-left:4px solid tomato;
}

.v-chip.ongoing {
    background: #fed330 !important;
}

.v-chip.complete {
    background: #26de81 !important;
}

.v-chip.overdue {
    background: #fc5c65 !important;
}
</style>
