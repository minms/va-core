<template>
  <img class="navbar-logo" :src="logo">
</template>

<script>
  export default {
    name: "navbar-logo",
    data(){
      return {
        logo: ''
      }
    },
    created(){
      this.logo = this.$config.logo || 'http://via.placeholder.com/200x80';
    }
  }
</script>