<script setup>

import { UserStore } from './components/store/UserStore';
import { storeToRefs } from 'pinia';
const { users, initials, concat, modalStatus, message, } = storeToRefs(UserStore())
const { orderByid, getInitials, GetInitial, GetUsers, RelatedInitials, arrays  } = UserStore()
orderByid()
getInitials()
arrays()




</script>

<template>
   <v-layout class="rounded rounded-md">
    <v-navigation-drawer class="leftnav d-flex align-center justify-center">
      <div class="mt-10 mb-10">
        <img src="./assets/logo_.png" alt="logo">
      </div>
      <div class="navbarlist">
        <div class="mt-6">
          <h5><strong>Messages</strong></h5>
          <ul>
            <li><a class="active"><router-link to="/">Inbox</router-link></a></li>   
            <li><a><router-link to="/">Outbound</router-link></a></li>
            <li><a><router-link to="/">Contacts</router-link></a></li>
            <li><a><router-link to="/">Statistic</router-link></a></li>
        </ul>
        </div>
        <div class="mt-10">
          <h5><strong>Tools</strong></h5>
          <ul>
            <li><a><router-link to="/">Chat editor</router-link></a></li>   
            <li><a><router-link to="/">Automation</router-link></a></li>
            <li><a><router-link to="/">Site tools</router-link></a></li>
          </ul>
        </div>
        <div class="mt-10">
          <h5><strong>Settings</strong></h5>
          <ul>
            <li><a><router-link to="/">General</router-link></a></li>   
            <li><a><router-link to="/">Account</router-link></a></li>
            <li><a><router-link to="/">Billing</router-link></a></li>
          </ul>
        </div>
          <div class="mt-16">
          <img src="./assets/acc.png" alt="logo">
          </div>
      </div>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center main" style="min-height: 300px;">

  
      <!-- <p v-for="(user, index) in users[0]"><strong>{{ user.id }} <br>{{index}}</strong>
        
       <p>{{ initial[index].id }}</p>
      
      </p>
      <p v-for="(initial, index) in initials"> {{user.index}}</p>
      <br>
      <p v-for="(initial, index) in initials"> {{initial.id }}</p> 


     <ul v-for="(user,i) in GetUsers" :key="i">
                 <li class="fav_item" v-for="(initial,j) in RelatedInitials(user['id'])" :key="j">
                   {{user['name']}}
                 </li>
           </ul> -->
      <!-- <v-table>
          <tbody>
            <tr
           
            >
              <td>{{ user.name }}<br>{{ user.email }}</td>
            </tr>
            <tr
              v-for="initial in initials"
            >
              <td>{{ initial}}</td>
            </tr>
          </tbody>
      </v-table> -->

      <!-- <ul>
        <li v-for="con in concat[0][0]">
          {{ con.name}}{{ con.name }}
            <p>{{ con[0][1] }}</p>
           -->
          <!-- <li v-for="initial in initials">
            {{ initial }}

          </li> -->
          
<!--           
        </li>
      </ul> -->
      <!-- <ul >
        <li v-for="(user, i) in users[0]" :key="i"> {{user.name}}</li>
        <li v-for="(initial) in initials" > {{initial.initial}}</li>
      </ul> -->

 
    </v-main>
  </v-layout>
</template>

<style scoped lang="sass">
html
  font-family: "Poppins", sans-serif
  font-weight: 400
  font-style: normal
.navbarlist
  font-family: "Poppins", sans-serif 
  font-weight: 400 
  font-style: light 
  margin: 15px
  ul
    list-style-type: none
  li
    margin-top: 15px
    
  h5
    text-transform: uppercase
  a
    color: grey
    pointer: none

  a:active
      color: #4a32d1



.leftnav
  background-color: #e9eff2
  border: none

.main
  p
    color: grey
  ul
      list-style-type: none

</style>
