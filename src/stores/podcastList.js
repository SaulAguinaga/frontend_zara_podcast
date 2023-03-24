import { defineStore } from 'pinia'

let podcast = new Object();

export const usePodcastList = defineStore({
    id: 'podcast',
    state: () => ({
        podcastList: []
    }),
    actions: {
        async fetchPodcast () {
            await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
            .then(res => res.json())
            .then(data => {
               
                    podcast = data.feed.entry
                    this.podcastList.push(podcast)
            })
        }
    }
})