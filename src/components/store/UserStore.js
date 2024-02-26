import { defineStore } from 'pinia'
import axios from 'axios'
import {ref} from 'vue'
import jsonData from './users.json';


let userData = jsonData;
let ini = [];


export const UserStore = defineStore("UserStore",{
    state: () => {
      return {
        users: [
        ],
        initials:[     
        ],
        usersWithInitials:[
        ],
        modalElements: [
        ],
        selected: [],
        checked : false,
        allSelected: false,
        showSumSelected: false,
        addNewUser: false,
        disableBtn: false,
        disableBtnAdd: false,
        userIds: 6,
        editUser: false,
        modalStatus: false,
        edit_id: null,
        editName: null,
        editEmail: null,
        message : "",
        deleteId : null
        }
    },
    getters: {

    },
    actions: {

        orderByid(){
            try{
                userData.sort((a,b) => a.id - b.id)
                this.users.push(userData);
            } catch(error){
                console.log(error)
            }
        },
        getInitials(){
            let index = 0;
            userData.forEach(element => {
                let names = element.name.trim().split(' ')
                let namesFirstPartChar = names[0].charAt(0).toUpperCase()
                let namesSecoundPartChar = names[1].charAt(0).toUpperCase()
                let initial = { id: index, initial: namesFirstPartChar + namesSecoundPartChar}
                index +=1
                this.initials.push(initial);
                ini.push(initial);
            })
            this.users[0].forEach(function(element, index) {
                element.initial = ini[index].initial
                element.editUser = false
            })
        },
        applyStyle(value){
            if(value == 'admin'){
                return "applyAdminStyle";
            }
            if(value == 'agent'){
                return "applyAgentStyle";
            }
        },
        selectAll() {

            let allSelect = document.querySelector('.selectAll input'),
                inputs = document.querySelectorAll('.input_field input');

            inputs.forEach(input => {
                if(allSelect.checked){
                    input.checked = true
                    input.classList.add("checked")
                    this.showSumSelected = true

                }
                else{
                    input.checked = false
                    input.classList.remove("checked")
                    this.showSumSelected = false

                }
            })
            this.selectedCount()
            
        }, selectedId(){

            let inputs = document.querySelectorAll('.input_field input');
            inputs.forEach(input => {
                if(input.checked){
                    input.classList.add("checked")

                }
                else{
                    input.checked = false
                    input.classList.remove("checked")
                    this.showSumSelected = false
                }
            })
            
            this.selectedCount()
        },

        selectedCount(){
            let checked = document.querySelectorAll('.checked'),
                quantity = document.querySelector('.usersSelected');

            if(checked.length > 0){
                this.showSumSelected = true
                quantity.innerHTML = checked.length+" users selected"
            } else {
                this.showSumSelected = false
            }
        },
        addNewUserBtn(){
            console.log('clicked')
            this.disableBtnAdd = true
            this.disableBtn = true
            this.addNewUser = true
           

        },
        checkInputAdd(){
            if(typeof(document.forms["Form"]["nameInput"] != "undefined")){
                let inputName = document.forms["Form"]["nameInput"].value,
                    inputEmail = document.forms["Form"]["emailInput"].value
                    if((inputName.length != 0 && inputEmail.length != 0) ){
                        this.disableBtn = false
                    }
            }
            
            if(document.forms["editForm"]["editname"] != "undefined"){
                let editInputName = document.forms["editForm"]["editname"].value,
                    editInputEmail = document.forms["editForm"]["editemail"].value;
                    if(editInputName.length != 0 && editInputEmail.length != 0){
                        this.disableBtn = false
                    }
            }    

            
        },
        checkInputEdit(){
            if(document.forms["editForm"]["editname"] != "undefined"){
                let editInputName = document.forms["editForm"]["editname"].value,
                    editInputEmail = document.forms["editForm"]["editemail"].value;
                    if(editInputName.length != 0 && editInputEmail.length != 0){
                        this.disableBtn = false
                    }
            }    

        },
        
        saveNewUser(){
            let inputName = document.forms["Form"]["nameInput"].value,
                inputEmail = document.forms["Form"]["emailInput"].value,
                inputPermission = document.forms["Form"]["permissionInput"].value;

            let lastId = this.userIds += 1
            let data = {
                id: lastId,
                name : inputName,
                email : inputEmail,
                permission : inputPermission
            }
            jsonData.push(data)
            let lastElement = jsonData[jsonData.length - 1];
            let lastInitial = lastElement.name.trim().split(' ');
            let lastNameFirstPartChar = lastInitial[0].charAt(0).toUpperCase()
            let lastNamesSecoundPartChar = lastInitial[1].charAt(0).toUpperCase()

            jsonData.forEach(function(element) {
                if(element.id == lastId){

                    element.initial = lastNameFirstPartChar + lastNamesSecoundPartChar
                }
            })
            this.disableBtnAdd = false
            this.addNewUser = false

    }, editUser(id){
        this.disableBtn = true;
        let editData = {
            editName: this.editName,
            editEmail: this.editEmail
          }
           this.users[0].forEach(function(element) {
                if(element.id === id){
                element.name = editData.editName
                element.email = editData.editEmail
                element.editUser = false
            }
        })

    }, 
    deleteUser(id, name)  {
        this.modalStatus = true
        this.message = name
        this.deleteId = id
       
        },

    receiveEmit(){
            this.modalStatus = false
            
        },
    approvedDelete(){
        this.modalStatus = false
        if(this.deleteId !== null) {
            this.users[0].forEach(function(element) {
                if(element.id === id){
                element.name = editData.editName
                element.email = editData.editEmail
                element.editUser = false
            }
        })

            // let index = this.users.find(x=>x.id == this.user.id);
            // console.log(index)
            //this.users.splice(index, 1)
        }
    },
    },
     methods:{
       
     },
     mounted:{
        
     },
     computed:{
        
      }

})
