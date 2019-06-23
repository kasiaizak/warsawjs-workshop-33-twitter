<template>
    <b-card
        :title="tweet.author.name"
        :sub-title="tweet.created_time | myDate"
        :img-src="tweet.author.avatar_url"
        :img-alt="tweet.author.name"
        img-left
        class="m-3"
    >
        <b-card-text>
            {{ tweet.body }}
        </b-card-text>
    </b-card>
</template>

<script>
import { myDate } from '@/helpers/my-date'
export default {
    name: "Tweet",
    props: {
        tweet: {
            id: String,
            body: String,
            author: Object,
            created_time: String
        }
    },
    computed: {
        created_time() {
            return myDate(this.tweet.created_time);
        }
    },
    filters: {
        myDate(value) {
            return myDate(value);
        }
    }
}
</script>

<style>

</style>
