<template>
    <div>
        <TweetList :tweets="tweets" />
    </div>
</template>

<script>
import TweetList from "@/components/tweet-list";
import { request } from 'http';

export default {
    name: "App",
    components: {
        TweetList
    },
    data() {
        return {
            tweets: [
                // http://localhost:3000/tweets
            ]
        }
    },
    methods: {
        async fetchTweets() {
            const url = 'http://localhost:3000/tweets';
            try {
                // 1. make HTTP request
                const response = await fetch(url);
                // 2. parse to JSON
                return await response.json();
            } catch (err) {
                console.log(err);
            }
        }
    },

    async mounted() {
        console.log('app.vue is ready');
        // 3. assign to this.tweets
        this.tweets = await this.fetchTweets();
    }
}
</script>

<style>
</style>
