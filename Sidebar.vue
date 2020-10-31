<template>
  <div class="column is-2" id="is-sidebar">
    <div class="overflow" v-click-outside="onClickOutside">
      <div class="card">
        <div class="title">
          nk
        </div>
      </div>
      <!-- <div id="new-note" :class="{'remove': remove}" v-on="remove ? { click: removeNote} : {click: addNote}"></div> -->
      <!-- <div id="new-note" :class="{'remove': focus}" @click="notes.push(notes.length+1)">+</div> -->
      <!-- <div id="new-note" :class="{'remove': focus}" @click="newNote">+</div> -->
      <!-- <div id="new-note" :class="{'remove': focus}" v-on="focus ? {'click': removeNote} : {'click': newNote}">+</div> -->
      <div id="new-note" :class="{'remove': itemToRemove}" v-on="focus ? {'click': removeNote} : {'click': newNote}">+</div>
      <!-- <div id="notes"> -->
        <!-- <div class="field" v-for="(note,i) in notes" :key="i"> -->
        <transition-group name="notes" tag="div" id="notes">
          <div class="field" v-for="(note,i) in notes" :key="note.id">
            <div class="control">
              <!-- <div class="delete" @click="notes.splice(i,1)"></div> -->
              <input type="text" class="input" @focus="action('focus', i)"
              v-model="note.title" v-show="editing === note.id" @keyup.enter="() => (editing = -1, focus = false)">
              <div class="preview" v-show="editing !== note.id" @dblclick="editing=note.id">
                <div class="delete" @click="notes.splice(i,1)"></div>
                <div class="bookmark" :class="{'color': note.bookmark}" @click="note.bookmark = !note.bookmark"></div>
                <div class="info">
                  <span class="date">{{ note.date }}</span>
                  <span class="month">{{ note.month }}</span>
                </div>
                <div class="content">
                  <div class="title">{{ note.title }}</div>
                  <p class="subtitle">{{ note.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
        <!-- <note v-for="(note,index) in notes" :key="note.id" v-bind="{note, index}"  /> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import shortid from 'shortid';
import vClickOutside from 'v-click-outside';
// import note from './subcomponent/note'

export default {
  months : ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"],
  data: () => ({
    notes: [],
    focus: false,
    activeItemIndex: null,
    editing: -1
  }),
  computed: {
    itemToRemove () {
      return this.focus && this.notes.length ? this.focus : false
    }
  },
  methods: {
    action (type='', index = 0) {
      if(type === 'focus') {
        this.focus = true
        this.activeItemIndex = index
        this.$store.commit('SET_ACTIVE_NOTE', this.notes[index])
        return
      }
      this.focus = false
    },
    newNote () {
      this.notes.push({
        id: shortid.generate(),
        title: 'My Awesome Title',
        content: 'Double click to edit',
        bookmark: false,
        date: new Date().getDate(),
        month: this.$options.months[new Date().getMonth()]
        // month: this.$options.months[new Date().getMonth()].substring(0,3)
      })
    },
    removeNote() {
      this.notes.splice(this.activeItemIndex,1)
      this.focus = false
      this.editing = -1
      this.$store.commit('SET_ACTIVE_NOTE', {})
    },
    onClickOutside() {
      this.focus = false
    }
  },
  directives: {
		clickOutside: vClickOutside.directive
	},
  components: {
    // note
  }
}
</script>

<style scoped>

#is-sidebar {
  background: #4735BF;
  background: #6441A5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #2a0845, #6441A5);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #2a0845, #6441A5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  /* height: 100vh; */
  padding-top: 2.5rem;
  padding-left: 0;
  padding-right: 0;
}

.card {
  background: inherit;
	box-shadow: none;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  font-size: 5rem;
  /* font-family: cursive; */
  color: #fff;
}
#new-note {
  text-align: center;
  font-size: 3rem;
  color: #fff;
  width: 5rem;
  margin: 0 auto;
  cursor: pointer;
  transition: all .3s;
}
#new-note.remove {
  color: #e4133d;
  font-weight: bold;
  transform: rotateZ(45deg);
}
/* #new-note:hover { */
#new-note:not(.remove):hover {
  box-shadow: 1px 1px 15px 1px #dbdbdb33;
}
.overflow {
  /* overflow-y: scroll; */
  height: 100vh;
  /* padding-left: 1rem;
  padding-right: 1rem; */
}
#notes {
  margin-top: 1rem;
}
#notes input {
  background: #F3F3FD;
  color: #8c8c93;
  height: 4rem;
  border-radius: 0;
  padding-left: 1.25rem;
  font-size: 1.5rem;
  border-color: transparent;
  box-shadow: none;
}

.preview {
  padding-left: 1.25rem;
  display: flex;
  /* justify-content: space-evenly; */
}
.preview .title {
  font-size: 1rem;
  font-family: inherit;
}

.preview .subtitle {
  font-size: .75rem;
}
.preview .subtitle,
.preview span {
  color: #ccc;
}
.preview span:first-child {
  font-size: 3rem;
}
.preview .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: .75rem;
  position: relative;
}
.preview:hover .bookmark::after,
.bookmark.color::after {
  content: '';
  color: inherit;
  position: absolute;
  top: 10px;
  right: 10px;
  border-top: 5px solid;
  border-bottom: 5px solid;
  border-left: 5px solid;
  border-right: 5px solid transparent;
  transform: rotateZ(90deg);
  cursor: pointer;
} 
.bookmark {
  color: #fff;
}
.delete {
  opacity: 0;
  position: absolute;
  right: 5px;
  top: 1.5rem;
  /* background: #ff6868; */
  transition: opacity .2s;
}
.preview:hover .delete {
  opacity: 1;
}
.color {
  color: #ffdd57;
}
.preview .info {
  display: flex;
  flex-direction: column;
}
.preview .month {
  margin: 0 auto;
}

/* Transition */
.notes {
  position: relative;
}
.field {
  transition: all 0.5s;
}

.notes-leave-active {
  position: absolute;
}
.notes-enter {
  opacity: 0;
  transform: translateY(-20px);
}
.notes-enter-to {
  transform: translateY(0);
}
.notes-leave-to {
  opacity: 0;
  /* transform: translateY(-100px); */
  transform: translateX(100%);
}
.notes-move {
  transition: all 400ms ease-in-out
}
</style>
