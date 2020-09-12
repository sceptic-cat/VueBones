<template>
    <div class="lds-dual-ring"></div>
</template>

<script>
    export default {
        name: "Loader"
    }
</script>

<style scoped>
    .lds-dual-ring {
        display: inline-block;
        width: 80px;
        height: 80px;
    }
    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #23a463;
        border-color: #23a463 transparent #23a463 transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
</style>
