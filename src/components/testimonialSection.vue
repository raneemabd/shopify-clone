<template>
  <section style="background-color: #b4cfa0e5" class="pb-10">
    <v-container class="py-10">
      <h1 class="font-weight-bold my-10 text-center pb-6 text-primary" data-aos="zoom-in" data-aos-duration="1000">Fashion Speaks!</h1>
      <v-row >
        <v-col cols="12" sm="12" md="12" lg="4" xl="4" v-for="testimonial in testimonials" :key="testimonial.id"   data-aos="fade-up"      data-aos-easing="linear"
     data-aos-duration="1500">
          <testimonialCard v-bind="testimonial"/>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>

<script>

import testimonialCard from "./testimonialCard.vue";

export default {

  components: {
    testimonialCard,

},
  data() {
    return {
      testimonials:[]
    }
  },
  created() {
    this.loadApiTestimonials();
  },
  methods: {
    loadApiTestimonials() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((testimonials) => {
          this.testimonials = testimonials.filter((el,idx) => idx<=5);
        });
    },

  
    
  },

};
</script>
