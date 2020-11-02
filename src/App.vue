<template>
  <div
    id="app"
    class="md:flex flex-col md:flex-row md:min-h-screen w-full bg-indigo"
  >
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar
  }
};
</script>

<style></style>
