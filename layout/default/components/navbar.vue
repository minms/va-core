<template>
  <div class="layout-navbar">
    <navbar-hamburger v-if="hamburger" class="hamburger-container"/>
    <navbar-breadcrumb class="breadcrumb-container"/>
    <el-menu class="top-menus">
      <el-menu-item :index="menu.label" v-for="(menu, index) in topMenus" @click="handleClick(menu)" :key="index">
        {{ menu.label }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import NavbarBreadcrumb from "./navbar-breadcrumb";
  import NavbarHamburger from "./navbar-hamburger";
  import {mapState} from "vuex"

  export default {
    name: "navbar",
    components: {NavbarHamburger, NavbarBreadcrumb},
    props: {
      hamburger: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {}
    },
    computed: {
      ...mapState({
        topMenus: state => state.vaLayout.topMenus,
      })
    },
    methods: {
      handleClick(menu) {
        if (menu.click) menu.click();
      }
    }
  }
</script>