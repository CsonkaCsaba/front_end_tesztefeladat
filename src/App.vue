<script setup>

import { UserStore } from './components/store/UserStore';
import { storeToRefs } from 'pinia';
const { users, userIds  } = storeToRefs(UserStore())
const { orderByid, getInitials, selectAll } = UserStore()
orderByid()
getInitials()




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
    <!-- <v-app-bar style="border-radius: -20px !important;" class="bar">
        <p>fdsfsdfsfdsfsd</p>
    </v-app-bar> -->

    <!-- <div class="container">
      <div class="row justify-content-md-center">
          <div class="col" v-for="user in users[0]" :key="user">
            <p>{{ user.initial }}</p><p> {{ user.name }}</p>
          </div>
      </div>
    </div> -->
<div class="main">
  <div class="d-flex topbar">
    <div class="flex-fill">
     <input type="checkbox" class="type" @click="selectAll" v-model="allSelected"> Users
    </div>
    <div  class="flex-fill">
      <p>Permission</p>
    </div>
  </div>
<ul id="lista">
  <li v-for="user in users[0]" :key="user" id="list">
      <div class="d-inline-flex">
        <div class="checkbox">
          <input type="checkbox" v-model="userIds" value="{{ user.id }}">
        </div>
        <div class="initial">
          <p>{{ user.initial }}</p> 
        </div>
        <div class="username">
          <p>{{ user.name }}</p>
          <p>{{ user.email }}</p>
        </div>
      
  
      </div>
  </li>
</ul>
</div>

      <!-- <div class="d-flex p-2 initial" v-for="user in users[0]">
        <div>
          {{ user.initial }}
        </div>
        <div>
          {{ user.name }}
        </div>
        <div>
          {{ user.email }}
        </div>
        <div>
          {{ user.permission }}
        </div> -->
            <!-- <p class="initial">{{ user.name }}{{ user.permission }}
            {{ user.email }}</p> -->
            <!-- <p  v-for="item in usersWithInitials[0]">{{ item.name }}</p> -->
    <!-- </div> -->
      <!-- <li v-for="item in usersWithInitials[0]">{{ item.name }}
      </li> -->
      
    
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

 
    <!-- </v-main> -->
  </v-layout>
</template>

<style scoped lang="sass">
$colors: #31F1AC,#1C40A3, #DE40A3
// $color2: #1C40A3
// $color3: #DE40A3
$repeat: 20

@for $i from 1 through $repeat
  .initial
    p:nth-child(#{length($colors)}n+#{$i})
    background: nth($colors, random(length($colors)))
    
html, body
  font-family: "Poppins", sans-serif
  font-weight: 300
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
  font-family: "Poppins", sans-serif 
  font-weight: 400 
  font-style: light 
  margin: 15px
  background-color: white

.bar
  border: none !important

.v-toolbar__content
  border: none !important
.initial
  color: white
  margin-right: 16px
  height: 58px
  width: 58px
  border-radius: 50%
  p
   margin: 10%
   font-size: 25px
   font-weight: 300
   font-style: normal
   text-align: center
   padding: 6px
   
  


#lista
  list-style-type: none
  width: 1000px
  height:auto
  margin: 10px
  li
    border: none
    color: grey
    padding: 10px
    margin: 10px

.username
  align-items: left
  text-align: left
  margin-top: 10px
  p:nth-child(1)
    color: black
    font-size: 20px
    font-weight: 500 
  p:nth-child(2)
    color: #D9D9D9
    font-size: 16px
    font-weight: 400 


input[type=checkbox]
  margin: 25px
  width: 24px
  height: 24px
 
// .style-one
//   background-color: $color1
//   @extend.initial
// .style-two
//   background-color: $color2
//   @extend.initial
// .style-three
//   background-color: $color3
//   @extend.initial

.topbar
  width: 1000px
  height:auto
  margin-left: 33px
  color: grey
  font-size: 20px
  font-weight: 500 

</style>
