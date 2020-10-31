<template>
  <div class="preview pt-3 text-white flex flex-col relative">
    <input
      class="absolute w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-16"
      id="username"
      type="text"
      placeholder="Username"
      v-show="editing == note.id"
      @keypress.enter="$emit('editing-done')"
      @change="e => $emit('update-title', e.target.value)"
    />
    <div
      class="flex content pl-4"
      :class="{ hide: editing === note.id }"
      @dblclick="$emit('editing', note.id)"
    >
      <button
        class="close-btn absolute flex justify-center items-center focus:outline-none right-0 mt-5 mr-1 w-5 h-5"
        @click="$emit('remove-note', note.id)"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="times"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-30 -50 400 612"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          ></path>
        </svg>
      </button>
      <div
        class="bookmark color absolute flex justify-center items-center right-0 mr-1 w-4 h-4"
        :class="{ active: note.bookmark }"
        @click="$emit('toggle-bookmark', note.id)"
      ></div>
      <div class="info flex flex-col">
        <span class="date title-2">{{ note.date }}</span>
        <span class="month">{{ note.month }}</span>
      </div>
      <div class="flex flex-col justify-center pl-2 content">
        <div class="font-bold">{{ note.title }}</div>
        <p class="text-gray-500">{{ note.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editing: {
      type: [String, Number],
      required: true
    },
    note: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
