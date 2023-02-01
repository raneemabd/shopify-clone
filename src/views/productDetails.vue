<template>
  <v-container class="mt-10">
    <v-hover v-slot="{ isHovering, props }" open-delay="200">
      <v-card
        :elevation="isHovering ? 16 : 2"
        :class="{ 'on-hover': isHovering }"
        class="mx-auto"
        max-width="350"
        v-bind="props"
      >
        <v-img :src="product.image" height="200px" cover></v-img>
        <v-card-title>{{ product.title }}</v-card-title>
        <v-card-text>{{ product.category }}</v-card-text>
        <v-divider></v-divider>
        <v-card-text><b>Price: </b> {{ product.price }} $</v-card-text>
        <v-card-actions>
          <v-btn
            variant="tonal"
            color="#5F8D3E"
            @click="addToCart({ product })"
            >Add To <v-icon class="ml-2"> mdi-cart </v-icon>
            <v-overlay
              activator="parent"
              location-strategy="connected"
              scroll-strategy="reposition"
            >
              <v-card class="pa-2" color="primary">
                Successfuly Add! Lets Add More
              </v-card>
            </v-overlay>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn to="/likes"> <v-icon color="red"> mdi-heart </v-icon></v-btn>
          <v-btn
            size="small"
            color="surface-variant"
            variant="text"
            icon="mdi-share-variant"
          ></v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>{{ product.description }} </v-card-text>
          </div>
        </v-expand-transition>
        <v-rating
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
        ></v-rating>
      </v-card>
    </v-hover>
  </v-container>
</template>

<script>
import { mapActions } from "pinia";
import cartStore from "@/store/cart";
import axios from "axios";

export default {
  data: () => ({
    id: "",
    product: {},
  }),
  created() {
    this.id = window.location.pathname.split("/")[2];
    this.loadApiProduct();
  },
  methods: {
    ...mapActions(cartStore, ["addToCart"]),
    loadApiProduct() {
      axios.get("https://fakestoreapi.com/products/" + this.id)
        .then((product) => {
          this.product = product.data;
        });
    },
  },
};
</script>
<!-- axios.get("https://dummyjson.com/users/" + this.user.id)
.then((res) => {this.userInfo = res.data; -->
