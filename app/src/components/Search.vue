<template>
    <div class="search">
        <input type="text" name="search" id="search">
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {

        };
    },
});
</script>
<style>
/* ----------- Non-Retina Screens ----------- */
@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
      div.search{
            padding-bottom: 30px;
            padding-top:20px;
            padding-left:10px;
            width: 100%;
        }
        input#search {
            border-radius: 4px;
            border: 1px solid lightgray;
            height: 35px;
            width:100%;
            padding: 6px;
            font-size: 14px;
        }
}

/* ----------- Retina Screens ----------- */
@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (min-resolution: 192dpi) { 
      div.search{
            padding-bottom: 30px;
            padding-top:20px;
            padding-left:10px;
            width: 100%;
        }
        input#search {
            border-radius: 4px;
            border: 1px solid lightgray;
            height: 35px;
            width:100%;
            padding: 6px;
            font-size: 14px;
        }
}
/* ----------- iPhone 4 and 4S ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px){
      div.search{
            padding-bottom: 30px;
            padding-top:20px;
            padding-left:25px;
            width: 100%;
        }
        input#search {
            outline:none;
            border-radius: 4px;
            border: 1px solid lightgray;
            height: 35px;
            width:100%;
            padding: 6px;
            font-size: 14px;
        }
}
/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px){
      div.search{
            padding-bottom: 30px;
            padding-top:20px;
            padding-left:25px;
            width: 100%;
        }
        input#search {
            outline:none;
            border-radius: 4px;
            border: 1px solid lightgray;
            height: 35px;
            width:100%;
            padding: 6px;
            font-size: 14px;
        }
}
/* ----------- iPhone 6, 6S, 7 and 8 ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) { 
      div.search{
            padding-bottom: 30px;
            padding-top:20px;
            padding-left:25px;
            width: 100%;
        }
        input#search {
            outline:none;
            border-radius: 4px;
            border: 1px solid lightgray;
            height: 35px;
            width:100%;
            padding: 6px;
            font-size: 14px;
        }
}
/* ----------- iPhone 6+, 7+ and 8+ ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 414px) 
  and (max-device-width: 736px) { 
      div.search{
            padding-bottom: 30px;
            padding-top:20px;
            padding-left:25px;
            width: 100%;
        }
        input#search {
            outline:none;
            border-radius: 4px;
            border: 1px solid lightgray;
            height: 35px;
            width:100%;
            padding: 6px;
            font-size: 14px;
        }
}
/* ----------- iPhone X ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) { 
    div.search{
            padding-bottom: 30px;
            padding-top:20px;
            padding-left:25px;
            width: 100%;
        }
        input#search {
            outline:none;
            border-radius: 4px;
            border: 1px solid lightgray;
            height: 35px;
            width:100%;
            padding: 6px;
            font-size: 14px;
        }
}
@media screen 
  and (max-device-width: 320px) 
  and (max-device-height: 640px) {
    div.search{
            padding-bottom: 30px;
            padding-top:20px;
            padding-left:25px;
            width: 100%;
        }
        input#search {
            outline:none;
            border-radius: 4px;
            border: 1px solid lightgray;
            height: 35px;
            width:100%;
            padding: 6px;
            font-size: 14px;
        }
}

@media screen 
  and (max-device-width: 360px) 
  and (max-device-height: 640px) {
    div.search{
            padding-bottom: 30px;
            padding-top:20px;
            padding-left:25px;
            width: 100%;
        }
        input#search {
            outline:none;
            border-radius: 4px;
            border: 1px solid lightgray;
            height: 35px;
            width:100%;
            padding: 6px;
            font-size: 14px;
        }
}


</style>


