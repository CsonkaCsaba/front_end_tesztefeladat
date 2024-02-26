<script setup>

import { UserStore } from './components/store/UserStore';
import { storeToRefs } from 'pinia';
const {} = storeToRefs(UserStore())
const { } = UserStore()

const props = defineProps({
    message: {
        type: String,
        required: true
      }
});

const emit = defineEmits(['modalStatus', 'approved']);
emit('modalStatus');
emit('approved');

function modalStatus() {
     emit('modalStatus');
   }
function approved() {
    emit('approved');
}


</script>

<template>
<v-dialog max-width="500">
    <v-card class="modalText">
        <v-card-text>
            <div class="text-center mt-8">
                <p>Do you want to Delete <br><b>{{ message }}</b> from the List ?</p>
            </div>
        </v-card-text>
        <v-card-actions>
            <v-row justify="center" class="d-flex flex-row ">
                <v-col cols="auto">
                    <button type="button" class="btn btn-primary deleteBtn btn-lg" @click="approved()">Delete</button>
                </v-col>
                <v-col cols="auto">
                    <button type="button" class="btn btn-secondary cancelBtn btn-lg" @click="modalStatus()">Cancel</button>
                </v-col>
            </v-row>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<style scoped lang="sass">
.modalText
    font-family: "Poppins", sans-serif 
    font-weight: 400 
    font-style: light 
    font-size: 20px
    padding: 20px

.deleteBtn
    color: white !important
.cancelBtn
  background-color: #e2e8eb
  color: grey
  border: none
  &:hover
    background-color: #dadbdd


  


</style>
