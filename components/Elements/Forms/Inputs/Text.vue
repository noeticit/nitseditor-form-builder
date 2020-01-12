<template>
    <div class="flex-col justify-start w-full">
        <div class="mt-2 text-gray-700 text-sm font-normal">{{ label }}</div>
        <input
            class="mt-1 appearance-none border rounded w-full py-2 px-3 text-sm text-gray-900 leading-tight placeholder-gray-700 focus:placeholder-gray-500 focus:outline-none focus:shadow-outline"
            :class="errorDisplay ? 'border-red-500 focus:bg-white focus:border-red-500': ''"
            :type="type"
            :placeholder="placeholder" :value="value" @input="emitEvent()" ref="input"
        >
        <span v-if="hint" class="text-xs text-gray-400 font-medium">{{ hint }}</span>
        <span v-if="errorDisplay" class="text-xs text-pink-600 font-medium">{{ errorDisplay }}</span>
    </div>
</template>

<script>
    export default {
        name: "InputText",
        props: {
            label: String,
            hint: {
                type: String,
                default: () => ''
            },
            error: {
                type: Array,
                default: () => []
            },
            type: {
                type: String,
                default: 'text'
            },
            placeholder: String,
            value: String,
        },
        methods: {
            emitEvent() {
                this.$emit('input', this.$refs.input.value)
            }
        },
        computed: {
            errorDisplay() {
                if(this.error.length)
                    return this.error.join(', ');
                else
                    return '';
            }
        }
    }
</script>

<style scoped>

</style>
