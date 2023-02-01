<template>
  <v-card color="#E6E2C3" style="max-width: 800px"> 
    <v-card-text class="text-h7 font-weight-bold" style="max-height: 80px"> {{
      body
    }} 
    </v-card-text>
    <v-row
      style="display: flex; justify-content: center; align-items: center"
      class="d-flex mx-1 my-1"
    >
      <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="">
        <v-img style="border-radius: 5%" src="../../female-icon-27.png"></v-img>
      </v-col>
      <v-col cols="12" sm="12" md="8" lg="8" xl="8">
        <v-rating
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
        ></v-rating>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  props: {
    id: { type: Number, required: true },
    name: {
      required: true,
    },
    body: {
      required: true,
    },
    avatar: {
      required: true,
    },
    rating: {
      required: true,
    },
 
  },
};
</script>
<style>
h1 {
  color: #ccbfa6;
}
</style>
