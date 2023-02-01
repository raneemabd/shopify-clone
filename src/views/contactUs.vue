<template>
  <section style="background-color: #fcffe7">
    <h1 class="text-center text-primary py-10">
      You Can Message Us <v-icon>mdi-message</v-icon>
    </h1>
    <v-container style="width: 60%" class="pb-10">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-textarea
          label="Tell Us What You Want"
          auto-grow
          outlined
          rows="3"
          row-height="25"
          shaped
          required
          v-model="message"
          :rules="messageRules"
        ></v-textarea>
        <v-btn color="success" class="mr-4" @click="validate"> Validate </v-btn>
        <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
      </v-form>
    </v-container>

    <div
      style="
        width: 100%;
        height: 450px;
        justify-content: center;
      "
      class="d-flex"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.6495531501264!2d36.296340185315785!3d33.51049375353213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e732c708ea75%3A0x6869a63ff97a96!2z2KfZhNit2YTYqNmI2YbZitiMINiv2YXYtNmC2Iwg2LPZiNix2YrYpw!5e0!3m2!1sar!2s!4v1674857505866!5m2!1sar!2s"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    
    <footerSectionVue />
  </section>
</template>

<script setup>
import footerSectionVue from "@/components/footerSection.vue";
</script>
<script>
AOS.init();

export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    message: "",
    messageRules: [
      (v) => !!v || "message is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) alert("Form is valid");
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
  },
};
</script>
