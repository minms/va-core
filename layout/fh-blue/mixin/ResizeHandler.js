const {body} = document
const WIDTH = 1280 // refer to Bootstrap's responsive design

export default {
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  mounted() {
    const isMobile = this.$_isMobile()
    if (isMobile) {
      console.log('mounted')
      this.$store.dispatch('vaLayout/toggleSideBar', true)
    }
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width < WIDTH
    },
    $_resizeHandler() {
      console.log('$_resizeHandler')
      if (!document.hidden) {
        const isMobile = this.$_isMobile()

        this.$store.dispatch('vaLayout/toggleSideBar', isMobile)
      }
    }
  }
}
