<template>
  <div class="flex-grow px-6 py-6">
    <input
      class="w-full py-2 px-3 mb-6 border text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-16"
      id="username"
      type="text"
      placeholder="Note title"
      v-model="$store.state.activeNote.title"
    />
    <textarea
      class="w-full h-full resize-none border rounded focus:outline-none focus:shadow-outline p-4"
      v-model="$store.state.activeNote.content"
    >
    </textarea>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
