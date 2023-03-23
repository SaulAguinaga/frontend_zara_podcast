import { defineStore } from 'pinia'

let details = new Object();

export const usePodcastDetails = defineStore({
    id: 'details',
    state: () => ({
        podcastDetails: []
    }),
    actions: {
        async fetchPodcastDetails () {
            await fetch('https://api.allorigins.win/get?url=https://itunes.apple.com/lookup?id=1658497449')
            .then(res => res.json())
            .then(data => {
               
                details = data.contents
                // console.log(details);
                this.podcastDetails.push(details)
            })
        }
    }
})