<template>
   
      <v-container style="width: 60%; ">
        <h1 class="text-center text-primary py-10">Add/Edit User</h1>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="firstName" label="First Name" :rules="firstNameRules" required></v-text-field>
          <v-text-field v-model="lastName" label="lastName" :rules="lastNameRules" required></v-text-field>
          <v-text-field v-model="age" label="age" :rules="ageRules" required></v-text-field>

          <v-btn style="width:250px;height:50px;margin:0 auto;display:block" @click="submitForm" :disabled="!valid" v-if="isAdd">Add</v-btn>
          <v-btn style="width:250px;height:50px;margin:0 auto;display:block" @click="submitForm" :disabled="!valid" v-else>Edit</v-btn>
        </v-form>
      </v-container>


</template>

<script>
import user from "@/store/user";
import { mapActions, mapState } from "pinia";

import dashboard from "@/store/dashboard";
import {VueAxios, axios} from '@/plugins/axios';
export default {
  data: () => ({
    firstName: '',
    lastName: '',
    age: '',

    id:'',
    valid: false,
    isAdd: true,

    firstNameRules: [
      v => !!v || 'Title is required',
    ],
    lastNameRules: [
      v => !!v || 'Price is required',
    ],
    ageRules: [
      v => !!v || 'age is required',
    ],

  }),
  created() {

    const url =  window.location.pathname?.split('/')[2];
  

    if(url === 'add') {
      this.isAdd = true;
    } else {
      this.isAdd = false;
      this.id = window.location.pathname.split('/')[3];
      this.loadUser();
    }
  },
  methods: {
     loadUser() {
      axios.get(`https://dummyjson.com/users/${this.id}`)
        .then((user) => {
            this.firstName = user.data.firstName;
            this.lastName = user.data.lastName;
            this.age = user.data.age;
          }
        );
    },
     editProduct(id) {
      axios.put(`https://dummyjson.com/users/${id}`, {
        firstName: this.firstName,
        lastName: this.lastName, 
        age: this.age,
      });
    },
     addProduct() {
      axios.post('https://dummyjson.com/users/add', {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
      });
    },
    submitForm() {
      if(this.isAdd) {
        this.addProduct();
      } else {
        this.editProduct(this.id)
      }
    },
  },
}
</script>
