<template>
  <div class="sidebar-item">
    <template v-if="!menu.children || menu.children.length === 0">
      <sidebar-item-link :to="resolvePath(menu.path)">
        <el-menu-item :index="resolvePath(menu.path)">
          <span v-if="menu.icon" :class="menu.icon"></span>
          <span>{{menu.label}}</span>
        </el-menu-item>
      </sidebar-item-link>
    </template>
    <template v-else>
      <sidebar-item-link v-if="menu.children.length === 1" :to="resolvePath(menu.children[0].path)">
        <el-menu-item :index="resolvePath(menu.children[0].path)">
          <span v-if="menu.children[0].icon" :class="menu.children[0].icon"></span>
          <span>{{menu.children[0].label}}</span>
        </el-menu-item>
      </sidebar-item-link>
      <el-submenu v-else ref="subMenu" :index="resolvePath(menu.path)" popper-append-to-body>
        <template slot="title">
          <span v-if="menu.icon" :class="menu.icon"></span>
          <span>{{ menu.label }}</span>
        </template>
        <sidebar-item
            v-for="(child, index) in menu.children"
            :key="index"
            :menu="child"
            :base-path="resolvePath(child.path)"/>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  import path from 'path'
  import SidebarItemLink from "./sidebar-item-link";

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
      }
    },
    methods: {
      resolvePath(routePath) {
        if (this.isExternal(routePath)) {
          return routePath
        }
        if (this.isExternal(this.basePath)) {
          return this.basePath
        }
        return path.resolve(this.basePath, routePath)
      },
      isExternal(path) {
        return /^(https?:|mailto:|tel:)/.test(path)
      }
    }
  }
</script>