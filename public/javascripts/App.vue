<template>
    <div id="app">
        <Greeting />
        <LearnMore v-bind:showLearnMore="showLearnMore" />
    </div>
</template>

<script>
    import Greeting from '@components/Greeting.vue'
    import LearnMore from "@components/LearnMore.vue";

    export default {
        name: 'App',
        components: {
            Greeting,
            LearnMore
        },
        data() {
            return {
                showLearnMore: true
            }
        }
    }
</script>

<style>
    /*#app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }*/
</style>
