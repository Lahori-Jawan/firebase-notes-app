<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen md:w-64">
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
      <!-- <div class="notes-list mt-2"> -->
      <transition-group name="notes" tag="div" class="notes-list mt-2">
        <Note
          class="note"
          v-for="note in notes"
          :key="note.id"
          :editing="editing"
          :note="note"
          @editing-done="editing = 0"
          @editing="id => (editing = id)"
          @update-title="title => (note.title = title)"
          @toggle-bookmark="note.bookmark = !note.bookmark"
          @remove-note="removeNote"
        />
      </transition-group>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import shortid from 'shortid';
import Note from './Note';
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
      const noteId = typeof id === 'string' ? id : this.editing;
      const index = this.notes.findIndex(note => note.id == noteId);
      this.notes.splice(index, 1);
      this.editing = 0;
    }
  },
  components: {
    Note
  }
};
</script>

<style>
/* Transition */

.note {
  transition: all 0.5s;
}

.notes-leave-active {
  position: absolute;
}

.notes-enter {
  opacity: 0;
  transform: translateX(-150px);
}

.notes-enter-to {
  transform: translateX(0);
}

.notes-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.notes-move {
  /* position: relative; */
  transition: all 400ms ease-in-out;
}
</style>
