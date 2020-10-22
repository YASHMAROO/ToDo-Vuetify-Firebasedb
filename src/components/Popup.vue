<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="success">Add new project</v-btn>
        </template>
        <v-card>
                <v-card-title primary title>Add a New Project</v-card-title>
                <v-card-text>
                    <v-form class="px-3" ref="form">
                        <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                        <v-textarea label="Info" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
                        <v-menu>
                            <template v-slot:activator="{ on }">
                                <v-text-field v-on="on" label="Due Dates" prepend-icon="mdi-caendar_range" :value="date" :rules="inputRules"></v-text-field>
                            </template>
                            <v-date-picker v-model="date"></v-date-picker>
                        </v-menu>
                        <v-btn text class="success mx-0 mt-3" @click="submit" :loading="loading">ADD PROJECT</v-btn>
                    </v-form>
                </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
// import format from 'date-fns/format';
import db from '@/fb';

export default {
    data(){
        return{
            title: '' ,
            content: '',
            date: new Date().toISOString().substr(0, 10),
            inputRules:[
                v => v.length >=3 || 'Mininmum length is 3 characters'
            ],
            loading: false,
            dialog:false
        }
    },
    methods:{
        submit(){
            if(this.$refs.form.validate())
            {
                this.loading=true;
                const project={
                    title: this.title,
                    content: this.content,
                    due: this.date,
                    person: 'The Net Ninja',
                    status: 'ongoing'
                }

                db.collection('projects').add(project).then(()=>{
                    console.log('added to db');
                    this.loading=false;
                    this.dialog=false;
                    this.$emit("projectAdded");
                })
            }
             
        }
    }
}
</script>