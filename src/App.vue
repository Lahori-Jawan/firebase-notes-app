<template>
  <div
    id="app"
    class="md:flex flex-col md:flex-row md:min-h-screen w-full bg-indigo"
  >
    <Sidebar />
    <NoteContent />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import NoteContent from './components/NoteContent';

export default {
  name: 'App',
  components: {
    Sidebar,
    NoteContent
  }
};
</script>

<style></style>
