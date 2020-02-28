<template>
  <div class="default-layout">
    <sidebar v-if="layout"/>
    <div class="layout-container" v-if="layout">
      <navbar />
      <div class="layout-main-container">
        <transition name="fade-transform" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>
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
        layout: state => state.app.layout
      })
    }
  }
</script>

<style lang="less" src="./assets/layout.less"></style>