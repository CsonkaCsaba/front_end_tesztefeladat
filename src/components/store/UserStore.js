import { defineStore } from 'pinia'
import axios from 'axios'
import {ref} from 'vue'
import jsonData from './users.json';

let userData = jsonData;
let ini = []
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
        allSelected: false,
        userIds: [],
        modalStatus: false,
        baseUrl: window.location.origin,
        edit_id: null,
        file: '',
        oldPhotoName: null,
        noFile: false,
        message : "",
        photo: {}
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
            })
        },
        selectAll() {
            console.log('selected')
            this.userIds = [];

            if (!this.allSelected) {
                for (user in this.users) {
                    this.userIds.push(this.users[user].id);
                }
            }
        }
   
        
       
      

        // async fetchUsers(){
        //     let users = [];
        //     try {
        //            await axios.get('./users.json').then(function(response){
        //             users = response.data;
        //             console.log(users)
                   
        //             });
        //                 this.users.push(users);
        //         }
        //          catch(error){
        //             console.log(error)
        //         }
        // },
        // async fetchNewsadmin(){
        //     let news = [];
        //     try {
        //            await axios.get('api/hirekadmin').then(function(response){
        //            news = response.data;
        //             });
        //                 this.news.push(news);
        //         }
        //          catch(error){
        //             console.log(error)
        //         }
        // },

        // deleteNews(id, cim){
        //     try{
        //         let answer = confirm("Biztos benne, hogy törölni szeretné a(z) " +cim+" című hírt?");          
        //         if(answer != false){
        //         axios.delete('api/hirekadmin/'+id).then(res=>{
        //             if(res.status == 200){
        //                 let index = this.news.findIndex(news=>news.id == id);
        //                 this.news.splice(index, 1)
        //                 this.modalStatus = true;
        //                 this.message = "A hír törlése sikeres!";
        //                 showSwiper +=1
        //             }
        //             answer = false;
                    
        //             }).catch(console.error)
        //         }
        //     }catch(error){
        //         console.log(error)
        //     }

        // },

        // updateNews(id, cim, leiras, uzletId, kepId){
        //     try{
        //         this.id = id;
        //         this.edit_id = id;
        //         this.cim = cim;
        //         this.leiras = leiras;
        //         this.uzletId = uzletId;
        //         this.kepId = kepId;
                
        //         let form_data ={
        //         id : this.id,    
        //         cim : this.cim,
        //         leiras : this.leiras,
        //         uzletId: this.uzletId,
        //         }
        //         axios.put('api/hirekadmin/'+this.edit_id, form_data).then(res=>{
        //             this.message = "A hír módosítása sikeres!";
        //             this.modalStatus = true;
        //             this.showSwiper +=1;
        //         }).catch(console.error)
        //     }catch(error){
        //         console.log(error)
        //     }
        // }, 
        // onChange(e){
        //     let file;
        //     file = e.target.files[0];
        //     this.file = file;

        // },

        // createNew(cim, leiras, uzletId) {

        //     this.cim = cim;
        //     this.leiras = leiras;
        //     this.kepId = 0;
        //     this.uztletId = uzletId;

        //     const config = {
        //         headers: {
        //             'content-type':'multipart/form-data'
        //         }
        //     }
        //     let photoData = new FormData();
            // this.uzletId = 1;
            // this.cim = cim;
            // this.leiras = leiras;

            
            // formData.append('cim', this.cim);
            // formData.append('leiras', this.leiras);
            // formData.append('id', this.uzletId);

            // if(this.file != ""){
            //     photoData.append('file', this.file);
            //     axios.post('api/galeria/upload', photoData, config)
            //     .then((response) => {
            //         if(response.data.message == "Sikeres feltöltés!"){
            //             this.kepId = parseInt(response.data.last_insert_id);
            //             let form_data ={ 
            //                 cim : cim,
            //                 leiras : leiras,
            //                 uzletId : this.uztletId,
            //                 kepId: this.kepId,
            //                 }
            //                 console.log(form_data);
            //                 axios.post('api/hirekadmin/create',form_data).then(res=>{
                                //this.message = "A hír módosítása sikeres!";
                                //this.modalStatus = true;
                                //this.showSwiper +=1;
                            // }).catch(console.error)
                            
                        //this.uploadSuccessful = true;
                       //location.reload();
                       //showSwiper +=1
                //     } else {
                //         this.message = response.data.message;
                //     }
                // }).catch((error) => {
                //     console.log(error)
                //     if(error.response.status === 422){
                //         this.message = "Csak .jpg, .jpeg, .png kiterjesztésű fotók tölthetők fel!"
                //     }
                    //if(error.message == "Request failed with status code 422")
                    //this.message = "error";        
    //             });
    //         } else {
    //             this.message = "Nem választott ki fájlt a feltöltéshez!";
    //         }


    
    //         // PostService.createPost(formdata)
    //         // .then(() => {
    //         //     console.log('success');
    //         //         });
    //         },

    //     uploadPoto(e){
    //         e.preventDefault();
    //         const config = {
    //             headers: {
    //                 'content-type':'multipart/form-data'
    //             }
    //         }
            
    //         let data = new FormData();
    //         if(this.file != ""){
    //             this.noFile = false;
    //             this.message = "";
    //             data.append('file', this.file);
    //             axios.post('api/galeria/upload', data, config)
    //             .then((response) => {
    //                 if(response.data.message == "Sikeres feltöltés!"){
    //                    //location.reload();
    //                    showSwiper +=1
    //                 } else {
    //                     this.message = response.data.message;
    //                 }
    //             }).catch((error) => {
    //                 console.log(error)
    //                 if(error.response.status === 422){
    //                     this.message = "Csak .jpg, .jpeg, .png kiterjesztésű fotók tölthetők fel!"
    //                 }
    //                 //if(error.message == "Request failed with status code 422")
    //                 //this.message = "error";        
    //             });
    //         } else {
    //             this.noFile = true
    //         }
            
    //     },

    //     oldPhotoName(e){
    //         this.oldPhotoName = e
    //     },
        
    //     updateStatusChange(){
    //         this.updateSuccessful = false
    //     }, 

    //     deleteStatusChange(){
    //         this.deleteSuccessful = false
    //     },
    //     uploadStatusChange(){
    //         this.uploadSuccessful = false
    //     },
    //     receiveEmit(){
    //         this.modalStatus = false
            
    //     },
    //     modalOpen(cim, datum, leiras, kepUtvonal){
    //         this.modalStatus = true;
    //         this.modalElements = [
    //         this.modalCim = cim,
    //         this.modalDatum = datum,
    //         this.modalLeiras = leiras,
    //         this.modalKepUtvonal = kepUtvonal
    //         ];
            
    //         return modalElements;
    //     }

    },
     methods:{
       
     },
     mounted:{
        
     },
     computed:{

      }

})