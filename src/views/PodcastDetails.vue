<script setup>
import { onBeforeMount, ref } from "vue";
import Details from '../components/Details.vue';
import { usePodcastDetails } from '../stores/podcastDetails';

const podcastDetailsStore = usePodcastDetails()

onBeforeMount(() => {
  getPodcastDetails()
})

const loading = ref(true)
const getPodcastDetails = async () => {
    await podcastDetailsStore.fetchPodcastDetails()
    loading.value = false
}
</script>

<template>
  
  <h1>HOLAAAAA</h1>
  <Details
    :details="podcastDetailsStore"
    ></Details>
</template>

<style>

</style>
