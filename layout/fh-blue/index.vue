<template>
  <div class="fh-blue-layout" :class="{'collapse': collapse}">
    <template v-if="layout">
      <sidebar/>
      <div class="layout-container">
        <navbar/>
        <el-scrollbar wrap-class="layout-main-container" :noresize="true">
          <transition name="fade-transform" mode="out-in">
            <router-view/>
          </transition>
        </el-scrollbar>
      </div>
    </template>
    <router-view v-else/>
  </div>
</template>

<script>
  import Sidebar from "./components/sidebar";
  import {mapState} from "vuex"
  import Navbar from "./components/navbar";
  import ResizeMixin from './mixin/ResizeHandler'

  export default {
    name: "default",
    components: {Navbar, Sidebar},
    mixins: [ResizeMixin],
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