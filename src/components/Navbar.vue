<template>
    <div>
        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>Awesome you added a new project.</span>
            <v-btn text outlined color="white--text" @click="snackbar   = false">X</v-btn>
        </v-snackbar>

        <v-app-bar flat color="grey lighten-4">
            <v-app-bar-nav-icon color="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu offset-y open-on-hover transition="scale-transition">
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" outlined v-on="on">
                        <span color="white--text">Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(link,i) in links" :key="i" router :to="link.route">
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn text color="grey">
                <span>Sign out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app temporary v-model="drawer" class="indigo">
            <v-row col align="center">
                <v-col class="mt-10" align="center">
                    <v-avatar size="100">
                        <img src="/avatar-1.png">
                    </v-avatar>
                    <p class="white--text subheading mt-1">The Net Ninja</p>
                </v-col>
                <v-col class="mt-4 mb-3" align="center">
                    <Popup @projectAdded="snackbar=true"></Popup>
                </v-col>
            </v-row>
             
            <v-list v-for="(link,index) in links" :key="(link,index)">
                <v-list-item router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">
                            {{ link.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import Popup from "./Popup";

export default{
    components: {Popup},
    data:function(){
        return{
            drawer:false,
            links: [
                { icon: 'mdi-board', text: 'Dashboard', route: '/' },
                { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
                { icon: 'mdi-face', text: 'Team', route: '/team' },
            ],
            snackbar:false
        }
    }

}
</script>