<template>
  <div class="layout-navbar">
    <navbar-hamburger v-if="hamburger" class="hamburger-container"/>
    <navbar-breadcrumb class="breadcrumb-container"/>
  </div>
</template>

<script>
  import NavbarBreadcrumb from "./navbar-breadcrumb";
  import NavbarHamburger from "./navbar-hamburger";

  export default {
    name: "navbar",
    components: {NavbarHamburger, NavbarBreadcrumb},
    props: {
      hamburger: {
        type: Boolean,
        default: true
      }
    }
  }
</script>