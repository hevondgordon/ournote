<template>
<div class="main-container">
  <Sidebar></Sidebar>
</div>
  
</template>

<script lang="ts">
import Vue from 'vue';
import Sidebar from '@/components/Sidebar.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    Sidebar,
  },
});
</script>
<style>
div.main-container{
  height: 100vh;
}
</style>

