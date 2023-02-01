<template>
  <section style="background-color: #fcffe7" class="py-10">
    <v-container >
      <h1 class="text-h4 font-weight-bold text-center" style="color: #603e1b ; " data-aos="zoom-in" data-aos-duration="3000">
        <i >Official Sponsor</i>
      </h1>
      <v-row class="d-flex justify-space-between align-center py-10">
        <v-col cols="12" sm="12" md="12" lg="6" xl="6">
          <img
            src="../../photo_2023-01-08_07-06-35.jpg"
            style="
              width: 600px;
              height: 500px;
              border-radius: 50%;
              box-shadow: 0px 10px 10px #ceac7a;
            "
            data-aos="fade-down-right"
            data-aos-duration="3000"
          />
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="5" xl="5">
          <div id="shadow">
            <h2
              class=" "
              data-aos="fade-down-left"
              data-aos-duration="3000"
              style="color: #603e1b"
            >
              A non-profit organization that aims to provide young people with
              knowledge and experience to enter the labor market and provide
              them with the ethical standards necessary for their success .
            </h2>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <section class="py-10" style="background-color: #c8c6a7">
    <v-container class="py-5">
      <h1 class="text-center py-5" style="color: #603e1b" data-aos="zoom-in" data-aos-duration="1000">
        Our Inspiring Advisors! 
      </h1>
      <v-row
        class="d-flex flex-row fill-height justify-space-between align-center pt-10"
      >
        <v-col cols="12" sm="12" md="12" lg="6" xl="6">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              data-aos="flip-down"
              data-aos-duration="2500"
              style="box-shadow: 0px 10px 10px #603e1b"
              class="mx-auto"
              color="grey-lighten-4"
              max-width="600"
              v-bind="props"
            >
              <v-img :aspect-ratio="16 / 9" cover src="../../mr-taiseer2.jpg">
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
                    style="height: 100%"
                  >
                    Mr.Taiseer Almedani
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="5"
          xl="5"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h3 style="color: #603e1b">
            Web developer ~ (Vue.js) Developer. The MASTER Of [Html, Css & Bulma
            !]
            <v-card-text class="pb-10 text-center">
              <a
                href="https://github.com/raneemabd"
                style="text-decoration: none"
                target="_blank"
              >
                <v-btn icon color="red">
                  <v-icon size="24px"> mdi-github </v-icon>
                </v-btn>
              </a>
              <a
                href="https://www.linkedin.com/in/raneem-abdullah-9913651bb/"
                style="text-decoration: none"
                target="_blank"
              >
                <v-btn class="mx-6" icon color="red">
                  <v-icon size="24px"> mdi-linkedin </v-icon>
                </v-btn>
              </a>
              <a
                href="https://www.facebook.com/raneem.abd"
                style="text-decoration: none"
                target="_blank"
              >
                <v-btn icon color="red">
                  <v-icon size="24px"> mdi-facebook </v-icon>
                </v-btn>
              </a>
            </v-card-text>
          </h3>
        </v-col>
      </v-row>
      <v-row
        class="d-flex flex-row fill-height justify-space-between align-center pt-10"
      >
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="5"
          xl="5"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h3 style="color: #603e1b">
            Full stack developer ~ (Laravel - VueJS) Developer. <br />
            PROFESSIONAL at [Vue & Vuetify].
            <v-card-text class="pb-10 text-center">
              <a
                href="https://github.com/raneemabd"
                style="text-decoration: none"
                target="_blank"
              >
                <v-btn icon color="red">
                  <v-icon size="24px"> mdi-github </v-icon>
                </v-btn>
              </a>
              <a
                href="https://www.linkedin.com/in/raneem-abdullah-9913651bb/"
                style="text-decoration: none"
                target="_blank"
              >
                <v-btn class="mx-6" icon color="red">
                  <v-icon size="24px"> mdi-linkedin </v-icon>
                </v-btn>
              </a>
              <a
                href="https://www.facebook.com/raneem.abd"
                style="text-decoration: none"
                target="_blank"
              >
                <v-btn icon color="red">
                  <v-icon size="24px"> mdi-facebook </v-icon>
                </v-btn>
              </a>
            </v-card-text>
          </h3>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="6" xl="6">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              data-aos="flip-down"
              data-aos-duration="2500"
              style="box-shadow: 0px 10px 10px #603e1b"
              class="mx-auto"
              color="grey-lighten-4"
              max-width="600"
              v-bind="props"
            >
              <v-img :aspect-ratio="16 / 9" cover src="../../mr-roduan.jpg">
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
                    style="height: 100%"
                  >
                    Mr.Roduan Kareem Aldeen
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <section style="background-color: #fcffe7" class="py-10">
    <v-container id="owner">
      <h1 class="text-center py-10" style="color: #603e1b" data-aos="zoom-in" data-aos-duration="1000">
        Our Stars ! 
      </h1>
    </v-container>
    <v-container>
      <v-timeline>
        <v-timeline-item size="large">
          <template v-slot:opposite>
            <img
              data-aos="fade-up-left"
              data-aos-duration="1500"
              src="../../meeee.jpg"
              style="width: 200px; height: 200px; border-radius: 50%"
            />
          </template>
          <v-card
            class="elevation-2 text-primary"
            data-aos="fade-up-right"
            data-aos-duration="1500"
          >
            <a href="#owner_info" style="color: #5f8d3e; text-decoration: none">
              <v-card-title class="text-h5 text-primary">
                Raneem Abdullah</v-card-title
              >
            </a>

            <v-card-text
              >Electronices and Communication Engineer & Junior Front End
              Developer. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Tempora, quaerat.</v-card-text
            >
          </v-card>
        </v-timeline-item>
        <v-timeline-item size="large">
          <template v-slot:opposite>
            <img
              data-aos="fade-up-right"
              data-aos-duration="1500"
              src="../../noura.jpg"
              style="width=200px; height: 200px; border-radius: 50%;"
            />
          </template>
          <v-card
            class="elevation-2 text-primary"
            data-aos="fade-up-left"
            data-aos-duration="1500"
          >
            <v-card-title class="text-h5"> Nour Skirik </v-card-title>
            <v-card-text
              >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              scaevola imperdiet nec ut, sed euismod convenire principes at. Est
              et nobis iisque percipit, an vim zril disputando voluptatibus, vix
              an salutandi sententiae.</v-card-text
            >
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </section>
  <section id="video" class="py-10">
    <h1 class="text-center py-10" style="color: #8A8A8A" data-aos="zoom-in" data-aos-duration="1000">
      My Portfolio ! 
    </h1>
    <div class="container py-10">
   


    <!-- <v-container id="owner_info">
      <h1 class="text-center py-10" style="color: #603e1b">
        My Portfolio ! <v-icon color="#603E1B"> mdi-heart </v-icon>
      </h1>
      <v-carousel hide-delimiters cycle>
        <v-carousel-item>
          <video src="../../Tab-web page.mp4"></video
        ></v-carousel-item>

        <v-carousel-item>
          <video src="../../Tab-crypton.mp4"></video
        ></v-carousel-item>

        <v-carousel-item src="../../PORT.jpg"></v-carousel-item>
      </v-carousel>
    </v-container> -->
      <video src="../../univers.mp4" muted autoplay loop></video>
      <swiper style=""
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          ><img
            src="../../crop-crypton.png" /></swiper-slide
        ><swiper-slide
          ><img
            src="../../crop portfolio.png" /></swiper-slide
        ><swiper-slide><img src="../../SEO.jpg" /></swiper-slide
        ><swiper-slide><img src="../../cv.png" /></swiper-slide
        ><swiper-slide
          ><img src="../../flex-box.png" style="height: 100%" /></swiper-slide
        ><swiper-slide><img src="../../fresh.png" style="height: 100%"/></swiper-slide
        ><swiper-slide
          ><iframe src="../../Tab-web page.mp4" style="height: 100%"> </iframe
        ></swiper-slide>
        <swiper-slide
          ><iframe
            src="../../Tab-crypton.mp4"
            style="height: 100%"
            title="W3Schools Free Online Web Tutorials"
          >
          </iframe
        ></swiper-slide>
      </swiper>
    </div>
  </section>
  <footerSectionVue />
</template>

<script>
import footerSectionVue from "@/components/footerSection.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
    footerSectionVue,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>

<style>
i{
  font-family: "Brush Script MT", cursive;
  font-size: 40px;

}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
.container{
  position: relative;
}
.container video{
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
}

</style>
