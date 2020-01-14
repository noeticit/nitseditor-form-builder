<template>
    <div class="w-full h-full">
        <div class="flex justify-between">
            <div class="p-1">
                <input-text
                        label="Label"
                        placeholder="Label"
                        type="text"
                        v-model="label"
                        :error="errors['label']"
                >
                </input-text>
            </div>

            <div class="p-1">
                <input-text
                        label="Placeholder"
                        placeholder="Placeholder"
                        type="text"
                        v-model="placeholder"
                        :error="errors['placeholder']"
                >
                </input-text>
            </div>
        </div>
        <div class="flex justify-between">
            <div class="p-1">
                <input-text
                        label="Field Name"
                        placeholder="Column name"
                        type="text"
                        v-model="field_name"
                        :error="errors['field_name']"
                >
                </input-text>
            </div>

            <div class="p-1">
                <input-text
                        label="Hint Text"
                        placeholder="Help text"
                        type="text"
                        v-model="hint"
                        :error="errors['hint']"
                >
                </input-text>
            </div>
        </div>
    </div>
</template>

<script>
    import inputText from './../../../components/Elements/Forms/Inputs/Text';
    export default {
        name: "InputText",
        props: {
            formData: {
                type: Object
            }
        },
        components: {
            inputText
        },
        data() {
            return {
                label: '',
                placeholder: '',
                field_name: '',
                hint: '',
                errors: {}
            }
        },
        created() {
            this.label = this.formData.label;
            this.placeholder = this.formData.placeholder;
            this.field_name = this.formData.field_name;
            this.hint = this.formData.hint;
        },
        methods: {
            emitEvent() {
                const postData = {
                    type: 'input-text',
                    data: {
                        label: this.label,
                        placeholder: this.placeholder,
                        field_name: this.field_name,
                        hint: this.hint
                    }
                };
                this.$emit('inputListeners', postData);
            }
        },
        watch: {
            label: {
                handler: 'emitEvent'
            },
            placeholder: {
                handler: 'emitEvent'
            },
            field_name: {
                handler: 'emitEvent'
            },
            hint: {
                handler: 'emitEvent'
            },
        }
    }
</script>

<style scoped>

</style>