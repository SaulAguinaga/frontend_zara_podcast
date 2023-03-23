<script setup>
    import { ref } from "vue";
    
    let input = ref("");
    
    const podcasts = ["aaa", "aaa", "adasd"];
    
    function filteredList() {
        return podcasts.filter((podcast) =>
            podcast.toLowerCase().includes(input.value.toLowerCase())
        );
    }
</script>
<template>
<input type="text" v-model="input" placeholder="Filter Podcasts..." />

<div class="itemPodcast" v-for="podcast in filteredList()" :key="podcast">
    <p>{{ podcast }}</p>
</div>

<div class="itemError" v-if="input&&!filteredList().length">
    <p>No results found!</p>
</div>
</template>  