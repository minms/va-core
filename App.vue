<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "App",
    created() {
      if (document.getElementById("loader-wrapper")) {
        document.getElementById("loader-wrapper").remove();
      }
      if(process.env.NODE_ENV !== 'development'){
        window.console.log = () => {
        
        }
      }
    }
  }
</script>