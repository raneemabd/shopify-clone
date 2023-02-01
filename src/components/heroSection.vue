<template>
  <section style="background-color: #fafafa">
    <v-container data-aos="zoom-in" data-aos-duration="1000">
      <!-- <v-row> -->
      <!-- <v-col cols="12" sm="6" md="6" lg="7" xl="4"> -->
      <v-parallax height="550" src="../../5_big.png"> </v-parallax>
      <!-- </v-col> -->
      <!-- <v-col cols="12" sm="6" md="6" lg="4" xl="3" > -->
      <div
        class="d-flex flex-column fill-height justify-center align-center py-6"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1 class="font-weight-bold mb-4 text-primary" id="font" >
          {{ $t("message.welcome") }}
        </h1>
        <!-- <div>
          <h2 class=" subtitle-1 text-primary">
            <i>{{ $t("message.proud") }}</i>
          </h2>
        </div> -->
      </div>
      <!-- </v-col> -->
      <!-- </v-row> -->
    </v-container>
  </section>
</template>
<style>
#font {
  font-family: "Brush Script MT", cursive;
  font-size: 60px;
}
</style>
<script setup>
AOS.init();
</script>
