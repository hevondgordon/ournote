<template>
    <div class="sidebar">
        <div class="row col-sm-12 col-lg-12 col-md-12" v-for="(row, index) in rows" :key=index>
            <div class="col-sm-4 col-md-4 col-lg-4 icon">
                <img :src="require(`@/assets/${row.icon}`)" alt="x">
            </div>
            <div class="offset-md-1 offset-lg-1 offset-sm-1 col-sm-6 col-md-6 col-lg-6 title">{{row.title}}</div>
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
});
</script>
<style scoped>
div.row{
    top: 40px;
    padding-bottom:20px;
   font-family: 'Montserrat', sans-serif;
   cursor: pointer;
}
div.sidebar{
    height: 100%;
    width: 125px;
    background-color:#2e3235;
}
div.icon, div.title{
    color: white;

}
div.icon img{
    width:20px;
    height: 20px;
}

</style>


