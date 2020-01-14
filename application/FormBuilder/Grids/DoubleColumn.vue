<template>
    <div class="flex items-center justify-between p-2">
        <div class="w-1/2 m-2 rounded-lg shadow-lg border rounded flex flex-col justify-start items-start p-2 bg-white">
            <single-column grid="double"></single-column>
        </div>
        <div class="w-1/2 m-2 rounded-lg shadow-lg border rounded flex flex-col justify-start items-start p-2 bg-white">
            <single-column grid="double"></single-column>
        </div>
    </div>
</template>

<script>
    import SingleColumn from "./SingleColumn";
    export default {
        name: "DoubleColumn",
        components: {
            SingleColumn
        }
    }
</script>

<style scoped>

</style>