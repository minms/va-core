<template>
  <div class="sidebar-item" :class="{'root': root}">
    <template v-if="!menu.children || menu.children.length === 0">
      <sidebar-item-link :to="realPath(menu.path)">
        <el-tooltip effect="dark" :disabled="!collapse || !root" :content="menu.label" placement="right">
          <el-menu-item :index="realPath(menu.path)">
            <span class="icon" v-if="menu.icon" :class="menu.icon"></span>
            <span class="label">{{menu.label}}</span>
          </el-menu-item>
        </el-tooltip>
      </sidebar-item-link>
    </template>
    <template v-else>
      <sidebar-item-link v-if="menu.children.length === 1" :to="realPath(menu.children[0].path)">
        <el-menu-item :index="realPath(menu.children[0].path)">
          <span class="icon" v-if="menu.children[0].icon" :class="menu.children[0].icon"></span>
          <span class="label">{{menu.children[0].label}}</span>
        </el-menu-item>
      </sidebar-item-link>
      <el-submenu v-else ref="subMenu" popper-class="fh-blue-sidebar-poper" :index="realPath(menu.path)" popper-append-to-body>
        <template slot="title">
          <span class="icon" v-if="menu.icon" :class="menu.icon"></span>
          <span class="label">{{ menu.label }}</span>
        </template>
        <sidebar-item
            v-for="(child, index) in menu.children"
            :key="index"
            :menu="child"
            :root="false"
            :base-path="realPath(child.path)"/>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  import path from 'path'
  import SidebarItemLink from "./sidebar-item-link";
  import {resolvePath} from "va-core/utils";
  import {mapState} from "vuex"

  export default {
    name: "sidebar-item",
    components: {SidebarItemLink},
    props: {
      menu: {
        type: Object,
        default: () => {
          return {}
        }
      },
      basePath: {
        type: String,
        default: ''
      },
      root: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      ...mapState({
        collapse: state => state.vaLayout.collapse
      })
    },
    methods: {
      realPath(routePath) {
        return resolvePath(routePath, this.basePath);
      }
    }
  }
</script>