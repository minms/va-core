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
        collapse: state => state.vaLayout.collapse
      }),
      menus() {
        let menus = this.$store.state.vaLayout.menus;
        let result = menus
        if (this.$config.permission) {
          console.log('过滤菜单权限');
          result = this.getAccessChildren(menus);
        }
        return result
      }
    },
    methods: {
      getAccessChildren(children) {
        let __r = [];
        children.forEach(item => {
          console.log('检测菜单权限: ', item.label, item.rules)
          if (item.rules && !this._access(item.rules)) return;

          let __item = {
            label: item.label,
            icon: item.icon,
            path: item.path,
            rules: item.rules
          };

          if (item.children) {
            let __children = this.getAccessChildren(item.children);
            if (__children && __children.length > 0) {
              __item.children = __children;
              __r.push(__item);
            }
          } else {
            __r.push(__item);
          }
        });

        return __r;
      }
    }
  }
</script>