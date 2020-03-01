<template>
  <div class="default-layout" :class="{'collapse': collapse}">
    <template v-if="layout">
      <sidebar/>
      <div class="layout-container">
        <navbar/>
        <div class="layout-main-container">
          <transition name="fade-transform" mode="out-in">
            <router-view/>
          </transition>
        </div>
      </div>
    </template>
    <router-view v-else/>
  </div>
</template>

<script>
  import Sidebar from "./components/sidebar";
  import {mapState} from "vuex"
  import Navbar from "./components/navbar";

  export default {
    name: "default",
    components: {Navbar, Sidebar},
    computed: {
      ...mapState({
        layout: state => state.vaApp.layout,
        menus: state => state.vaLayout.menus,
        collapse: state => state.vaLayout.collapse,
      }),
      hasMenus() {
        return this.menus && this.menus.length > 0;
      }
    }
  }
</script>

<style lang="less" src="./assets/layout.less"></style>