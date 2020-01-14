<template>
    <div class="flex items-center justify-center p-2">
        <div class="w-1/4 m-2 rounded-lg shadow-lg border rounded flex flex-col justify-start items-start p-2 bg-white">
            <single-column grid="quad"></single-column>
        </div>
        <div class="w-1/4 m-2 rounded-lg shadow-lg border rounded flex flex-col justify-start items-start p-2 bg-white">
            <single-column grid="quad"></single-column>
        </div>
        <div class="w-1/4 m-2 rounded-lg shadow-lg border rounded flex flex-col justify-start items-start p-2 bg-white">
            <single-column grid="quad"></single-column>
        </div>
        <div class="w-1/4 m-2 rounded-lg shadow-lg border rounded flex flex-col justify-start items-start p-2 bg-white">
            <single-column grid="quad"></single-column>
        </div>
    </div>
</template>

<script>
    import SingleColumn from "./SingleColumn";
    export default {
        name: "QuadColumn",
        components: {
            SingleColumn
        }
    }
</script>

<style scoped>

</style>