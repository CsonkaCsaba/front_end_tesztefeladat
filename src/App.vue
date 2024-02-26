<script setup>

import { UserStore } from './components/store/UserStore';
import { storeToRefs } from 'pinia';
const { users, userIds, checked, showSumSelected, addNewUser, disableBtn, disableBtnAdd, editName, editEmail, message, modalStatus, approved } = storeToRefs(UserStore())
const { orderByid, getInitials, selectAll, applyStyle, selectedId, addNewUserBtn, saveNewUser, editUser, checkInputEdit, checkInputAdd, deleteUser, receiveEmit, approvedDelete} = UserStore()
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
<div class="main">
  <div class="d-flex mt-6">
      <div class="d-flex">
        <p class="usersSelected" v-show="showSumSelected"></p>
        <button type="button" class="btn deleteBtn ml-6 mb-2" @click="" v-show="showSumSelected"><i class="bi bi-trash"></i> Delete selected users</button>
      </div>
    <div class="flex-fill">
      <button type="button" class="btn btn-primary float-end mr-8 p-6 addNewUserBtn" @click="addNewUserBtn" :disabled="disableBtnAdd"><i class="bi bi-plus"></i>Add New user</button>
    </div>
  </div>
  <div class="d-flex topbar">  
      <div class="flex-fill selectAll">
      <input type="checkbox" class="type" @click="selectAll"> Users
      </div>
      <div  class="flex-fill mt-8 ml-8">
        <p>Permission</p>
      </div>
  </div>
  <div class="addNewUserForm p-2" v-if="addNewUser" id="userForm"> 
    <form class="d-inline-flex ml-8" name="Form">
    <div class="m-2">
        <label for="name" class="p-1 col text-end">Name</label>
        <input id="nameInput" type="text" class="form-control" required placeholder="Enter Name" name="nameInput" v-on:keyup="checkInputAdd"/>
      </div>
    <div class="m-2">
        <label for="email" class="p-1 col text-end">Email</label>
        <input id="email" type="email" class="form-control" required placeholder="Enter Email" name="emailInput" v-on:keyup="checkInputAdd"/>
    </div>
    <div class="m-2">
        <label for="permission" class="p-1 col text-end">Permission</label>
        <select class="form-select" id="permission" disabled name="permissionInput">
        <option value="agent">Agent</option>
        <option value="admin">Admin</option>
      </select>
    </div>
      <div class="p-4 mt-3">
        <button type="button" class="btn btn-primary m-2 addNewUserBtn" @click="saveNewUser" :disabled="disableBtn">Add</button>
        <button type="button" class="btn btn-primary m-2 cancelBtn" @click="addNewUser = false; disableBtnAdd = false">Cancel</button>
      </div>
    </form>
  </div>

  
  

<ul id="lista">
  <li v-for="user in users[0]" :key="user.id" :id="user.id">
      <div class="d-flex flex-nowrap align-items-center">
        <div class="checkbox input_field">
          <input type="checkbox" @click="selectedId(user.id)">
        </div>
        <div class="initial w-20">
          <p>{{ user.initial }}</p> 
        </div>
        <div class="username flex-grow-1">
          <p>{{ user.name }}</p>
          <p>{{ user.email }}</p>
        </div>
        <div class="permission">
          <p :class="applyStyle(user.permission)">{{ user.permission }}</p>
      </div>
      <div class="buttons flex-fill">
        <button type="button" class="btn btn-outline-secondary btn-lg m-4" @click="user.editUser = true; disableBtnAdd = true; disableBtn = true "><i class="bi bi-pencil"></i></button>
        <button type="button" class="btn btn-outline-secondary btn-lg" @click="deleteUser(user.id, user.name)"><i class="bi bi-trash"></i></button>
      </div>
      </div>

      <div class="editUserForm p-2" v-show="user.editUser" id="edituserForm"> 
        <form class="d-inline-flex ml-8" name="editForm"  @submit.prevent="editUser(user.id)">
        <div class="m-2">
            <label for="editname" class="p-1 col text-end">Name</label>
            <input id="editname" type="text" class="form-control" required placeholder="User Full Name" name="editname" v-model="editName" v-on:keyup="checkInputEdit"/>
          </div>
        <div class="m-2">
            <label for="editemail" class="p-1 col text-end">Email</label>
            <input id="editemail" type="email" class="form-control" required placeholder="user.name@gbd.hu" name="editemail" v-model="editEmail" v-on:keyup="checkInputEdit"/>
        </div>
        <div class="m-2">
          <label for="permission" class="p-1 col text-end">Permission</label>
            <select class="form-select" id="permission" disabled name="permissionInput">
            <option value="agent">Agent</option>
            <option value="admin">Admin</option>
          </select>
        </div>
          <div class="p-4 mt-3">
            <button type="submit" class="btn btn-primary m-2 addNewUserBtn" :disabled="disableBtn">Save</button>
            <button type="button" class="btn btn-primary m-2 cancelBtn" @click="user.editUser = false; disableBtnAdd = false">Cancel</button>
          </div>
        </form>
    </div>
  </li>
</ul>
</div>
<Modal v-model="modalStatus" :message="message" @modalStatus="receiveEmit" @approved="approvedDelete"></Modal>
</v-layout>
</template>

<style scoped lang="sass">
$color1: #DE40A3
$color2: #1C40A3
$color3: #31F1AC

    
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
  margin-left: 450px
  background-color: white
  width: 100%
  height: auto

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
  background-color: $color1
  p
   margin: 10%
   font-size: 25px
   font-weight: 300
   font-style: normal
   text-align: center
   padding: 6px
   
#lista
  list-style-type: none
  width: 100%
  height:auto
  margin: 10px
  li
    background-color: white
    border: none
    color: grey
    padding: 10px
    margin: 10px
    &:hover
      background-color: #f7fafc
      .buttons
        opacity: 1
    &:nth-child(even)
      .initial 
        background-color: $color2
    &:nth-child(3n+3)
      .initial
        background-color: $color3
.username
  align-items: left
  text-align: left
  margin-top: 10px
  width: 300px
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
 

.topbar
  width: 1000px
  height:auto
  margin-left: 62px
  color: grey
  font-size: 20px
  font-weight: 500 

.usersSelected
  margin-left: 138px
  color: black
  font-size: 20px
  font-weight: 500 



.permission
  width: 300px
  padding: 15px 10px 10px 50px

.buttons
    width: 300px
    padding: 15px 10px 10px 50px
    align-items: right
    text-align: right
    opacity: 0
 
.applyAdminStyle
  color:#9380be
  background-color: #efe2fe
  padding: 5px
  margin: 0 25px 0 25px
  width: 100px
  text-align: center
  border-radius: 10%
  &:first-letter 
    text-transform: uppercase

.applyAgentStyle
  color:#7265aa
  background-color: #c8e7f9
  padding: 5px
  margin: 0 25px 0 25px
  text-align: center
  width: 100px
  border-radius: 10%
  &:first-letter 
    text-transform: uppercase

.addNewUserBtn
  color: white
  background-color: #1cb0d3
  border: none
  font-weight: 300
  font-style: normal
.addNewUserForm
  background-color: #f7fafc 
  @extend .topbar
  input
    placeholder
      color: grey
.cancelBtn
  background-color: #e2e8eb
  color: grey
  border: none
.deleteBtn
  background-color: #e9eef2
  color: #afb3b6
  border: 1px solid #dadbdd
  &:hover
    background-color: #dadbdd
    border: 1px solid #dadbdd




  


</style>
