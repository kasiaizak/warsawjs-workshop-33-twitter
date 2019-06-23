<template>
    <div>
        <TweetList :tweets="tweets" />
    </div>
</template>

<script>
import TweetList from "@/components/tweet-list";

export default {
    name: "App",
    components: {
        TweetList
    },
    data() {
        return {
            tweets: [
                {id: "sdkahkasd", body: "fahby trener!"},
                {id: "sddeweer", body: "kolejna linika"},
                {id: "dsdsda", body: "i jeszcze jedna"}
            ]
        }
    }
}
</script>

<style>
</style>
