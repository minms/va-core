import Vue from "vue"

Vue.mixin({
  methods: {
    /**
     * 权限检测
     * @param key
     * @returns {boolean}
     */
    checkAccess(key) {
      if (this.$config.permission !== true) return true;

      let roles = this.$store.state.vaAccess.roles;
      let rules = this.$store.state.vaAccess.rules;

      if (roles.includes('admin') || rules.includes('admin')) return true;

      if (typeof key === 'string') {
        if (roles.includes(key)) return true;
        return rules.includes(key);
      }

      if (typeof key === "object") {
        for (let i = 0; i < key.length; i++) {
          let item = key[i];
          if (roles.includes(item)) return true;
          if (rules.includes(item)) return true;
        }
      }

      return false;
    },
    _access(key) {
      return this.checkAccess(key);
    }
  }
});