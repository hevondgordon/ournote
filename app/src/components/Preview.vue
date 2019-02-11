<template>
  <div class="preview-container">
    <div class="row">
      <div class="col-9">
        <Search></Search>
      </div>
      <div class="col">
        <create-note></create-note>
      </div>
    </div>

    <div class="preview">
      <div
        class="note-preview"
        v-for="(Note, index) in notePreviews"
        :key="index"
        @click="selectNote(Note)"
      >
        <span class="note-preview-title">{{Note.note}}</span>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import Search from '@/components/Search.vue';
import CreateNote from '@/components/CreateNote.vue';
import { mapGetters } from 'vuex';

interface Note {
  noteId: number;
  note: string;
  timestamp: number;
}

export default Vue.extend({
  data() {
    return {
    };
  },
  methods: {
    selectNote(note: Note) {
        console.log(this.$store.getters);
    },
  },
  computed: {
      notePreviews(): Note[] {
          let preview = [];
          if (this.$store.state.searching) {
              preview = this.$store.state.searchResults;
          } else {
              preview =  this.$store.state.notes;
          }
          return preview;
      },
  },
  components: {
    Search,
    CreateNote,
  },
});
</script>
<style>
div.preview-container {
  height: 95%;
  border-right: 1px solid lightgrey;
}
div.preview {
  height: 90%;
  padding: 8px;
  overflow: scroll;
}
div.note-preview {
  border-bottom: 1px solid lightgrey;
  height: 10%;
  margin-top: 10px;
  padding-left: 10px;
  cursor: pointer;
}
span.note-preview-title {
  font-family: "Cabin", sans-serif;
  font-weight: bold;
}
</style>


