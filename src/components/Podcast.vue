<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

let input = ref("");
    const props = defineProps({
        podcast: {
            type: Object,
            default: null,
            params:{
                id: ["id"]
            }
        }
    })

    function filteredList() {
        return props.podcast.filter((podcast) =>
            podcast["im:name"].label.toLowerCase().includes(input.value.toLowerCase())
            ||
            podcast["im:artist"].label.toLowerCase().includes(input.value.toLowerCase())
            );
    }

</script>
<template>
<div class="bodyPodcast">
    <RouterLink to="/"  class="button"><h1>Podcaster</h1></RouterLink>
    <hr>
    <div class="search">
    <div>{{ filteredList().length }} </div>
    <input type="text" v-model="input" placeholder="Filter Podcasts..." />
    </div>
    <div class="container">            
            <div class="elementPodcast" v-for="podcast in filteredList()" :key="podcast">
                
                <RouterLink :to="{name: 'details', params: { id: podcast['id'].attributes['im:id']}}"  class="button">
                <img v-bind:srcset='`${podcast["im:image"][1].label}`'>
                <div class="podcastBox">
                    {{podcast["id"].attributes["im:id"]}}
                    <h2>{{ podcast["im:name"].label }}</h2>
                    <h3>Author:{{ podcast["im:artist"].label }}</h3>
                    {{ podcast}}
                </div>
                </RouterLink>
                
            </div>
        </div>
</div>
</template>

<style scoped>
.bodyPodcast{
    margin-left: 20%;
    width: 60%;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
    display: flex;
    /* align-items: center; */
    flex-direction: column;
}
h1{
    display: flex;
    color: #2B79BC;
    align-items: left;
    
}
h2{
    color: black;
    font-size: 1vw;
}
h3{
    color: rgb(142, 142, 142);
    font-weight: 100;
    font-size: 0.7vw;
}
hr{
    height: fit-content;
    width: 100%;
    border: none;
    height: 0.1vw;
    background-color: #dbdbdb;
}
.search{
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
}
.search div{
    display: flex;
    align-items: center;
    text-align: center;
    width: fit-content;
    height: fit-content;
    font-size: 0.8vw;
    color: white;
    padding-right: 0.2vw;
    padding-left: 0.2vw;
    background-color: #2B79BC;
    border-radius: 0.3vw;
}
.search input{
    width: fit-content;
    border-style: solid;
    border-color: #dbdbdb;
    margin-left: 0.5vw;
    width: 10%;
    height: 1.4vw;
    border-radius: 0.5vw;
}
.button{
    text-decoration: none;
    color: black;
}

.container{
    width: 100%;
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1vw;
    grid-row-gap: 1vw;
}
.elementPodcast{
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 2%;
    margin: 2%;
}
.elementPodcast img{
    border-radius: 50%;
    width: 6vw;
    z-index: 1;
}
.podcastBox{
    box-shadow: 0vw 0vw 0.1vw 0.2vw rgb(226, 226, 226);
    border-radius: 0.2vw;
    padding-top: 25%;
    z-index: 0;
    margin-top: -3vw;
    padding-bottom: 0.3vw;
}

</style>