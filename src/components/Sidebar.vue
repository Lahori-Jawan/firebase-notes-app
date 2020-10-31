<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full bg-indigo">
    <div
      class="absolute flex flex-col w-full h-full md:w-64 text-gray-700 dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 sidebar-bg"
    >
      <p class="text-white text-bold text-center mt-20 title-1">nk</p>
      <p class="text-center mt-10">
        <button
          class="rounded-lg hover:border-transparent focus:outline-none focus:shadow-lg transform text-white w-20 h-20 transition duration-500 title-1 outline-blue"
          :class="{ 'text-red-500 rotate-45': editing }"
          v-on="{ click: editing ? removeNote : addNote }"
        >
          +
        </button>
      </p>
      <div class="notes-list mt-2">
        <div
          class="preview pt-3 text-white flex justify-start relative"
          v-for="note in notes"
          :key="note.id"
        >
          <input
            class="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-16"
            id="username"
            type="text"
            placeholder="Username"
            v-show="editing == note.id"
            @keypress.enter="editing = 0"
            v-model="note.title"
          />
          <div class="flex content pl-4" @dblclick="editing = note.id">
            <button
              class="close-btn absolute flex justify-center items-center focus:outline-none right-0 mt-5 mr-1 w-5 h-5"
              @click="removeNote(note.id)"
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
              @click="note.bookmark = !note.bookmark"
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
      </div>
    </div>
  </div>
</template>

<script>
import shortid from 'shortid';
export default {
  data() {
    return {
      date: new Date(),
      editing: 0,
      notes: []
    };
  },
  methods: {
    addNote() {
      console.log('add');
      this.notes.push({
        id: shortid.generate(),
        title: 'My Awesome Title',
        content: 'Double click to edit',
        bookmark: false,
        date: this.date.getDate(),
        month: 'October'
      });
    },
    removeNote(id) {
      const noteId = id || this.editing;
      const index = this.notes.findIndex(note => note.id == noteId);
      this.notes.splice(index, 1);
      this.editing = 0;
    }
  }
};
</script>

<style></style>
