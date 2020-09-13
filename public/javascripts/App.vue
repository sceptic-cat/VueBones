<template>
    <div id="app">
<!--        <Greeting />-->
<!--        <LearnMore v-bind:showLearnMore="showLearnMore" />-->
<!--        -->
        <Navbar />

        <b-container>
            <router-view />
        </b-container>

    </div>


</template>

<script>
    import Greeting from '@components/Greeting'
    import LearnMore from '@components/LearnMore'
    import Navbar from '@components/Navbar'

    export default {
        name: 'App',
        components: {
            Greeting,
            LearnMore,
            Navbar
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
