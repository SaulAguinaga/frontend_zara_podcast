<script setup>
import { onBeforeMount, ref } from "vue";
import Details from '../components/Details.vue';
import { usePodcastDetails } from '../stores/podcastDetails';

const props = defineProps({
    id:{
        type: Number,
        required: true
    }
});

const podcastDetailsStore = usePodcastDetails()

onBeforeMount(() => {
  getPodcastDetails()
})

const loading = ref(true)
const getPodcastDetails = async () => {
    await podcastDetailsStore.fetchPodcastDetails(props.id)
    loading.value = false
}
</script>

<template>
  <Details
    :details="podcastDetailsStore"
    ></Details>
</template>

<style>

</style>
