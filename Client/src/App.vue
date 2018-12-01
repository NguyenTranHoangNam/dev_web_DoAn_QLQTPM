<template>
  <div id="app">
    <div id="wrapper">
      <home></home>
      <router-view ></router-view>
    </div>
  </div>
  
</template>
<script>

import Home from './components/home.vue'
export default {
  name: 'App',
  components: {
    'Home': Home
  }
}
</script>

