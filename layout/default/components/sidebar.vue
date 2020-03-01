<template>
  <div class="layout-sidebar">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu default-active="2"
               :default-active="activeMenu"
               :collapse="collapse"
               :collapse-transition="false">
        <navbar-item v-for="(menu, index) in menus" :key="index" :menu="menu"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
  import NavbarItem from "./sidebar-item";
  import {mapState} from "vuex"

  export default {
    name: "sidebar",
    components: {NavbarItem},
    data() {
      return {}
    },
    computed: {
      hasLogo() {
        return this.$config.logo
      },
      activeMenu() {
        const route = this.$route
        const {meta, path} = route
        // if set path, the sidebar will highlight the path you set
        if (meta.activeMenu) {
          return meta.activeMenu
        }
        return path
      },
      ...mapState({
        menus: state => state.vaLayout.menus,
        collapse: state => state.vaLayout.collapse
      })
    },
    methods: {}
  }
</script>