<template>
    <div class="create-note-container">
        <div class="create-note">
            <img  src="../assets/create-note-icon.svg" alt="">
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
});
</script>

<style scoped>
div.create-note{
    height: 40px;
    width:40px;
    border-radius: 4px;
    height: 35px;
    display: flex;
    cursor: pointer;
}
div.create-note img {
    margin: auto;
}
div.create-note-container{
    padding-bottom: 30px;
    padding-top:20px;
    padding-left:10px;
    
}
</style>

