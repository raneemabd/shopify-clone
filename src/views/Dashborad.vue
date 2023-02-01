<template>
  <div class="ma-12 pa-12">
    <v-row class=" d-flex flex-row justify-center align-center pb-5">
      <v-btn
        class="text-primary"
        :active="this.currentTap === 'users'"
        @click="setCurrentTap('users')"
      >
        <v-icon> mdi-account-circle</v-icon>Users
      </v-btn>
      <v-btn class="text-primary"
        :active="this.currentTap === 'products'"
        @click="setCurrentTap('products')"
      >
        <v-icon>mdi-star</v-icon>Products
      </v-btn>
    </v-row>

    <h2
      v-if="this.currentTap === 'products'"
      class="text-primary text-center py-4"
    >
      products number: {{products.length }}
    </h2>
    <table
      border="1"
      v-if="this.currentTap === 'products'"
      style="width: 100%; border-color: black"
    >
      <thead style="background-color: #f5f0ea">
        <tr>
          <th>product name</th>
          <th>price</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.title }}</td>
          <td style="padding: 0 30px">{{ product.price }}</td>
          <td
            class="d-flex"
            style="justify-content: space-evenly; background-color: #f5f0ea"
          >
            <v-btn stacked :href="'product-form/edit/' + product.id">
              <v-icon color="green"> mdi-grease-pencil </v-icon>
            </v-btn>
            <v-btn stacked @click="deleteProduct(product.id)">
              <v-icon color="red"> mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </table>

    <h2
      v-if="this.currentTap === 'users'"
      class="text-primary text-center py-4"
    >
      users number: {{ users.length }}
    </h2>
    <table border="1" v-if="this.currentTap === 'users'" style="width: 100%">
      <thead style="background-color: #f5f0ea">
        <tr>
          <th>user name</th>
          <th>email</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td class="d-flex" style="justify-content: space-evenly">
            <v-btn stacked :href="'user-form/edit/' + user.id">
              <v-icon color="green"> mdi-grease-pencil </v-icon>
            </v-btn>
            <v-btn stacked @click="deleteUser(user.id)">
              <v-icon color="red"> mdi-delete</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  
</template>

<script>
import user from "@/store/user";
import { mapActions, mapState } from "pinia";

import dashboard from "@/store/dashboard";
import {VueAxios, axios} from '@/plugins/axios'
export default {

  computed: {
    ...mapState(user, ["isLoggedIn", "user"]),
    ...mapState(dashboard, ["users", "products","currentTap"]),
  },
 
  methods: {
    ...mapActions(dashboard,["loadProducts","loadUsers","setCurrentTap"])
    // loadProducts() {
    //   axios
    //     .get("https://fakestoreapi.com/products")
    //     .then((products) => (this.products = products.data));
    // },
    // loadUsers() {
    //   axios
    //     .get("https://dummyjson.com/users")
    //     .then((users) => (this.users = users.data.users));
    // },
    // setCurrentTap(tap) {
    //   this.currentTap = tap;
    // },
    // deleteProduct(id) {
    //   axios.delete(`https://fakestoreapi.com/products/${id}`);
    // },
    // deleteUser(id) {
    //   axios.delete(`https://fakestoreapi.com/products/${id}`);
    // },
  },
};
</script>
