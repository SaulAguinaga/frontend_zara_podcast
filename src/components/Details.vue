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
        <h2>Podcaster</h2>
        <hr>
       
        {{ props.details.podcastDetails[0] }}
        <!-- <Search></Search>
        <div class="container">
                <div class="elementPodcast" v-for="podcast in podcast">
                    <img v-bind:srcset='`${podcast["im:image"][1].label}`'>
                    <div class="podcastBox">
                        {{ podcast["id"].attributes["im:id"]}}
                        <b>{{ podcast["im:name"].label }}</b>
                        <br>
                        {{ podcast["im:artist"].label }}
                    </div>

                    {{ details }}
                </div>
        </div> -->
    </div>
    </template>


<!-- https://itunes.apple.com/lookup?id={{ podcast["id"].attributes["im:id"]}} -->
