<template>
    <div class="sidebar">
        <div class="row">
            <div class="col-lg-12 col-md-12 logo-container">
                <img src="../assets/logo-black-and-white.png" alt="">
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 icon"  v-for="(row, index) in rows" :key=index>
                <img :src="require(`@/assets/${row.icon}`)" alt="x">
            </div>
            <!-- <div class="offset-md-1 offset-lg-1 offset-sm-1 col-sm-6 col-md-6 col-lg-6 title">{{row.title}}</div> -->
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            rows: [
                {icon: 'note.svg', title: 'Notes'},
                {icon: 'bin.svg', title: 'Trash'},
            ],
        };
    },
    components: {
    },
});
</script>
<style scoped>
@media (min-width: 992px){
    .col-lg-1 {
    flex: 0 0 8.333333%;
    max-width: 6.333333%;
    }
}

div.sidebar {
    background-color: blue;
    height: 100vh;
}
div.icon{
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
    cursor: pointer;
}
div.icon img{
    height: 25px;
    width:25px;
    margin:auto;
}
div.logo-container {
    display: flex;
    padding-top: 30px;
    padding-bottom: 30px;
}
div.logo-container img {
    margin: auto;
    height:40px;
    width:40px;
}


</style>


