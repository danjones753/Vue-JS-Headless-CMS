<script setup>
  import Footer from "./components/Footer.vue"
  import Header from "./components/Header.vue"
  import Testimonials from "./components/Testimonials.vue"
  import ContactForm from "./components/ContactForm.vue"
  import Portfolio from "./components/Portfolio.vue"
  import About from "./components/About.vue"
  import Slider from "./components/Slider.vue"
  import Hamburger from "./components/Hamburger.vue";
</script>

<template>
  <Header/>
  <Hamburger/>
  <About />
  <Slider />
  <Portfolio/>
  <Testimonials />
  <ContactForm />
  <Footer />
</template>

<style scoped></style>