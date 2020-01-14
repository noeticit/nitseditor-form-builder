<template>
    <div class="w-full bg-white">
        <div class="flex justify-between w-full border-b mb-1">
            <div class="px-3 py-1 text-gray-700 font-semibold">
                <div class="flex">
                    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z"/></svg>
                    <span class="ml-4 text-xs text-gray-500 font-semibold">Single Column</span>
                </div>
            </div>
            <div class="px-3 py-1 text-gray-700 font-semibold">
                <div class="flex">
                    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" @click="showFieldModal = true"><path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/></svg>
                    <svg class="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 0 1 2 2v4h4V2H8v4zM2 8v10h10V8H2zm4 4v-2h2v2h2v2H8v2H6v-2H4v-2h2z"/></svg>
                    <svg class="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/></svg>
                </div>
            </div>
        </div>
        <div class="flex-col p-6 w-full justify-start" v-if="formData.length">
            <div class="flex-col justify-start w-full mb-1" v-for="(item, index) in formData" :key="index">
                <div class="px-3 py-1 text-gray-700 border-b font-semibold">
                    <div class="flex">
                        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 0 1 2 2v4h4V2H8v4zM2 8v10h10V8H2zm4 4v-2h2v2h2v2H8v2H6v-2H4v-2h2z"/></svg>
                        <svg class="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/></svg>
                        <span class="ml-4 text-xs text-gray-500 font-semibold">{{ item.type }}</span>
                    </div>
                </div>
                <component class="h-24 w-24"
                           :is="item.type"
                           v-bind="item.data"
                >
                </component>
            </div>
        </div>
        <div class="flex w-full" :class="grid === 'triple' || grid === 'quad' ? 'justify-between' : 'justify-center'">
            <div :class="grid === 'single' ? 'h-48 w-48' : grid === 'double' ? 'h-40 w-40' : grid === 'triple' ? 'h-32 w-32': grid === 'quad' ? 'h-24 w-24': ''">
                <div class="flex-col justify-start p-6" :class="grid==='quad' ? 'w-full': ''">
                    <h3 class="text-right text-gray-700 tracking-wider text-md font-semibold" :class="grid === 'triple' || grid === 'quad' ? 'mb-1 text-sm' : 'mb-3 mt-4'">Add your fields!</h3>
                    <p v-if="grid !== 'quad' && grid !== 'triple'" class="mb-3 text-gray-500 text-right tracking-wider text-xs font-semibold">Select your field and it's type!</p>
                    <button class="inline-block w-full px-2 py-1 rounded-lg shadow-md bg-teal-500 hover:bg-teal-400 focus:outline-none focus:shadow-outline text-white text-sm tracking-wider font-semibold" @click="showFieldModal = true">Add Now</button>
                </div>
            </div>
            <div class="block" :class="grid === 'single' ? 'h-48 w-48' : grid === 'double' ? 'h-48 w-48' : grid === 'triple' ? 'h-40 w-40': grid === 'quad' ? 'h-32 w-32': ''">
                <img src="/nits-assets/tailwind_images/adding-form.png" alt="Form Builder">
            </div>
        </div>
        <!-- Field Modal -->
        <div v-if="showFieldModal" class="modal opacity-1 fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

            <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

                <div class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50" @click="showFieldModal = false">
                    <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                    <span class="text-sm">(Esc)</span>
                </div>

                <!-- Add margin if you want to see some of the overlay behind the modal-->
                <div class="modal-content py-4 text-left px-6">
                    <!--Title-->
                    <div class="flex justify-between items-center pb-3">
                        <p class="text-2xl font-bold">Select your field!</p>
                        <div class="modal-close cursor-pointer z-50">
                            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" @click="showFieldModal = false">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                        </div>
                    </div>

                    <!--Body-->
                    <div class="flex-col">
                        <input-select
                                label="Type"
                                v-model="field_type"
                                :error="errors['field_type']"
                                placeholder="Select your field type"
                                :options="fields"
                        >
                        </input-select>

                        <input-form-builder-text
                                v-if="field_type === 'input-text'"
                                @inputListeners="getInput"
                        >
                        </input-form-builder-text>
                    </div>

                    <!--Footer-->
                    <div class="flex justify-end pt-2">
                        <button class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2" @click="showFieldModal = false">Close</button>
                        <button class="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400" @click="addForm">Add</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import inputSelect from './../../../components/Elements/Forms/Inputs/Select';
    import inputFormBuilderText from './../FormTypes/InputText';
    import inputText from './../../../components/Elements/Forms/Inputs/Text';
    export default {
        name: "SingleColumn",
        components: {
            inputSelect, inputFormBuilderText, inputText
        },
        props: {
            grid: {
                type: String,
                default: 'single'
            },
        },
        data() {
            return {
                showFieldModal: false,
                field_type: '',
                fields: [
                    {value: 'input-text', label: 'Text'},
                    {value: 'input-password', label: 'Password'},
                    {value: 'input-email', label: 'Email'},
                    {value: 'input-select', label: 'Dropdown'},
                    {value: 'input-multi-select', label: 'Multi Select'},
                    {value: 'input-file', label: 'Upload'},
                    {value: 'input-date', label: 'Date'},
                ],
                errors: {},
                formData: [],
                currentFormData: {}
            }
        },
        methods: {
            getInput(event) {
                this.currentFormData = event;
            },
            addForm() {
                this.formData.push(this.currentFormData);
                this.showFieldModal = false;
            }
        }
    }
</script>

<style scoped>

</style>