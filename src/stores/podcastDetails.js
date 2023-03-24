import { defineStore } from 'pinia'

let details = new Object();

export const usePodcastDetails = defineStore({
    id: 'details',
    state: () => ({
        podcastDetails: []
    }),
    actions: {
        async fetchPodcastDetails (idDetails) {
            await fetch("https://api.allorigins.win/get?url=https://itunes.apple.com/lookup?id=" + idDetails)
            .then(res => res.json())
            .then(data => {               
                details = data.contents
                this.podcastDetails.push(details)
            })
        }
    }
})