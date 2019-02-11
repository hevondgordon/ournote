<template>
<div class="main-container row">
  <div class="col-sm-1 col-md-1 col-lg-1 fullheight sidebar">
    <Sidebar></Sidebar>
  </div>
  <div class="col-sm-3 col-md-3 col-lg-3 fullheight">
    <Preview></Preview>
  </div>
  <div class="col-sm-8 col-md-8 col-lg-8 fullheight editor">
    <Editor></Editor>
  </div>
</div>
  
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from 'vue';
import Sidebar from '@/components/Sidebar.vue';
import Preview from '@/components/Preview.vue';
import Editor from '@/components/Editor.vue';
export default Vue.extend({
  name: 'home',
  components: {
    Sidebar,
    Preview,
    Editor,
  },
});
</script>
<style>
/* ----------- iPhone 4 and 4S ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px){
      div.sidebar{
        display: none;
      }
      div.editor{
        display:none;
      }
}
/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px){
      div.sidebar{
        display: none;
      }
      div.editor{
        display:none;
      }
}
/* ----------- iPhone 6, 6S, 7 and 8 ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) { 
      div.sidebar{
        display: none;
      }
      div.editor{
        display:none;
      }
}
/* ----------- iPhone 6+, 7+ and 8+ ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) { 
      div.sidebar{
        display: none;
      }
      div.editor{
        display:none;
      }
}
/* ----------- iPhone X ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) { 
    div.sidebar{
      display: none;
    }
    div.editor{
      display:none;
    }
}
@media screen 
  and (max-device-width: 320px) 
  and (max-device-height: 640px) {
    div.sidebar{
      display: none;
    }
    div.editor{
      display:none;
    }
}

@media screen 
  and (max-device-width: 360px) 
  and (max-device-height: 640px) {
    div.sidebar{
      display: none;
    }
    div.editor{
      display:none;
    }
}

.fullheight {
  height: 100vh;
  padding-left: 0px;
  padding-right:0px;
}
div.main-container{
  /* height: 100vh; */
}
</style>

