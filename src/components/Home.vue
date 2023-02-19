<template>
  <Navbar />
  <router-view></router-view>
</template>

<script>
  import Navbar from './Navbar.vue';
  export default {
    name: "Home",
    components: {
      Navbar,
    }
  }
</script>