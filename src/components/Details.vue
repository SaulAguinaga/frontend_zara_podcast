<script setup>
    
const props = defineProps({
    details: {
        type: Object,
        default: null
    }
})
</script> 

<template>
    <div class="bodyPodcast">
        <RouterLink to="/"  class="button"><h1>Podcaster</h1></RouterLink>
        <hr>       
        <!-- {{ props.details.podcastDetails.attributes["im:name"] }} -->
        {{ details['trackname'].label}}
        
    </div>
    </template>

<style>
h1{
    display: flex;
    color: #2B79BC;
    align-items: left;
    
}
.button{
    text-decoration: none;
}

hr{
    height: fit-content;
    width: 100%;
    border: none;
    height: 0.1vw;
    background-color: #dbdbdb;
}
</style>