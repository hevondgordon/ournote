<template>
  <textarea name="editor" class="editor" ref="editor" :value="currentNote"></textarea>
</template>
<script lang='ts'>
import Vue from 'vue';
import { mapGetters } from 'vuex';
export default Vue.extend({
  data() {
    return {
        currentNote: '',
    };
  },
  mounted: () => {
      const p = 1 + 1;
  },
  computed: {
    ...mapGetters(['activeNote']),
  },
});
</script>
<style>
textarea {
  resize: none;
}
/* ----------- Non-Retina Screens ----------- */
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  textarea.editor {
    height: 100%;
    width: 100%;
    border: none;
    padding: 10px;
  }
  textarea {
    outline: none;
  }
}

/* ----------- Retina Screens ----------- */
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
  textarea.editor {
    height: 100%;
    width: 100%;
    border: none;
    padding: 10px;
  }
  textarea {
    outline: none;
  }
}

@media screen and (device-width: 320px) and (device-height: 640px) {
}

@media screen and (device-width: 360px) and (device-height: 640px) {
}
</style>


