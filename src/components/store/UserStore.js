import { defineStore } from 'pinia'
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
        checked : false,
        allSelected: false,
        showSumSelected: false,
        selectedIds: [],
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
        deleteId : null,
        paginationLength : null,
        page: 1,
        start: 0,
        end: 6,
        }
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
            inputs = document.querySelectorAll('.input_field input'),
            selectedIds = this.selectedIds,
            allSelected = this.allSelected;

        inputs.forEach(input => {
            if(allSelect.checked){
                input.checked = true
                input.classList.add("checked")
                this.showSumSelected = true
                allSelected = true
                this.paginationLength = Math.ceil(this.users[0].length/6)            
            }
            else{
                input.checked = false
                input.classList.remove("checked")
                this.showSumSelected = false
                allSelected = false
                selectedIds.pop()
            }
        })

        if( allSelected === true){
            selectedIds.pop()
            this.users[0].forEach(function(element, index) {
                selectedIds.push(parseInt(index)+1);
            })
        }

        this.selectedCount()
        
    }, 
        
    selectedId(id){
        let inputs = document.querySelectorAll('.input_field input');
        let idArrayLength = this.selectedIds.length
        let intId = parseInt(id)
        let idArray = this.selectedIds

        if(idArrayLength === 0){
            this.selectedIds.push(intId);

         }else {
            const found = idArray.includes(intId)
            if(found === false){
                this.selectedIds.push(intId);
            }else{
                const index = idArray.indexOf(intId)
                this.selectedIds.splice(index, 1)
            }
        }

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
        this.selectedCount(id)
    },

    selectedCount(id){
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
        this.users[0].push(data)
        let lastElement = this.users[0][this.users[0].length - 1];
        let lastInitial = lastElement.name.trim().split(' ');
        let lastNameFirstPartChar = lastInitial[0].charAt(0).toUpperCase()
        let lastNamesSecondPartChar = lastInitial[1].charAt(0).toUpperCase()

        this.users[0].forEach(function(element) {
            if(element.id == lastId){

                element.initial = lastNameFirstPartChar + lastNamesSecondPartChar
            }
        })
        this.disableBtnAdd = false
        this.addNewUser = false
        this.paginationLength = Math.ceil(this.users[0].length/6)
    }, 
    
    editUser(id){
        this.disableBtn = true;
        this.disableBtnAdd = false;
        let editData = {
            editName: this.editName,
            editEmail: this.editEmail
          }
           this.users[0].forEach(function(element) {
                if(element.id === id){
                element.name = editData.editName
                element.email = editData.editEmail

                let updateInitial = editData.editName.trim().split(' ');
                let updateInitialFirstPartChar = updateInitial[0].charAt(0).toUpperCase()
                let updateInitialSecondPartChar = updateInitial[1].charAt(0).toUpperCase()
                element.initial = updateInitialFirstPartChar + updateInitialSecondPartChar
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
            let index = this.users[0].find(users=>users.id == this.deleteId);
            this.users[0].splice(index.id-1, 1)
            this.deleteId = null
            
            }
        if(this.selectedIds !== null){
            this.users[0] = this.users[0].filter((el)=>  !this.selectedIds.includes(el.id))
            this.showSumSelected = false
            this.selectedIds.length = 0
            
            }
        },

    deleteSelected(){
        let checked = document.querySelectorAll('.checked');
        this.modalStatus = true
        this.message = checked.length + " Selected Users"
     },
     pagination(){
        this.paginationLength = Math.ceil(this.users[0].length/6)
        this.page = 1
     },
     updatePage(){
        if(this.page == 1){
            this.start = 0
            this.end = 6
        }
        if(this.page == 2){
            this.start = 6
            this.end = 12
        }
     }
    }
})
