<template>
    <div class="h-screen overflow-hidden flex items-center justify-center">
        <menu-one></menu-one>
        <div class="font-sans antialiased h-screen w-screen flex">
            <div class="flex-1 flex flex-col bg-gray-200 overflow-hidden">
                <top-bar-one></top-bar-one>
                <!-- Content -->
                <div class="px-6 py-4 flex-1 overflow-y-scroll">
                    <!-- A message -->
                    <div class="flex-col item-center justify-center">
                        <h3 class="text-grey-100 mb-1 font-extrabold">#forms</h3>
                        <div class="flex items-center justify-start">
                            <div class="w-1/2 m-2 rounded-lg shadow-lg border b-gray-400 rounded flex flex-col justify-start items-start p-6 bg-white">
                                <div class="border-b -m-2 mb-3 px-6 py-2 flex-none w-full justify-start text-gray-700 font-semibold"> Base Controls </div>
                                <input-text
                                    label="First name"
                                    placeholder="First name"
                                    type="text"
                                    v-model="first_name"
                                    :error="errors['first_name']"
                                >
                                </input-text>
                                <input-text
                                    label="Last name"
                                    placeholder="Last name"
                                    type="text"
                                    v-model="last_name"
                                    :error="errors['last_name']"
                                >
                                </input-text>
                                <input-select
                                    label="First name"
                                    v-model="last_name"
                                    :error="errors['first_name']"
                                    placeholder="Select first name"
                                    :options="options"
                                >
                                </input-select>
                                <input-multi-select
                                        label="First name"
                                        v-model="multiselect"
                                        :error="errors['first_name']"
                                        placeholder="Select first name"
                                        :options="options"
                                        searchable
                                        @searchQuery="searchQuery"
                                        multiple
                                >
                                </input-multi-select>
                                <input-text
                                        label="First name"
                                        placeholder="First name"
                                        type="text"
                                        v-model="first_name"
                                        :error="errors['first_name']"
                                >
                                </input-text>
                                <input-text
                                        label="Last name"
                                        placeholder="Last name"
                                        type="text"
                                        v-model="last_name"
                                        :error="errors['last_name']"
                                >
                                </input-text>
                                <div class="mt-4 text-center">
                                    <button @click="submit()" class="inline-block px-4 py-2 rounded-lg shadow-md bg-teal-500 hover:bg-teal-400 focus:outline-none focus:shadow-outline text-white text-sm tracking-wider font-semibold">Check</button>
                                </div>
                            </div>
                            <div class="w-1/2 m-2 cursor-pointer rounded-lg shadow-lg border b-gray-400 rounded flex flex-col justify-start items-start p-6 bg-white">
                                <div> General </div>
                                <div class="flex-col justify-start">
                                    <div>Label</div>
                                    <input type="text">
                                </div>
                                <div class="flex-col justify-start">
                                    <div>Label</div>
                                    <input type="text">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer-one></footer-one>
            </div>
        </div>
    </div>
</template>

<script>
    import MenuOne from "../Elements/Menus/MenuOne";
    import TopBarOne from "../Elements/TopBar/TopBarOne";
    import FooterOne from "../Elements/Footer/FooterOne";
    import InputText from '../Elements/Forms/Inputs/Text'
    import InputSelect from "../Elements/Forms/Inputs/Select";
    import InputMultiSelect from "../Elements/Forms/Inputs/MultiSelect";
    export default {
        name: "Forms",
        components: {
            InputSelect, InputMultiSelect, MenuOne, TopBarOne, FooterOne, InputText
        },
        data() {
            return {
                first_name: '',
                last_name: '',
                errors: {},
                message: '',
                multiselect: [],
                options: [
                    {value: 1, label: 'Select 1'},
                    {value: 2, label: 'Select 2'},
                    {value: 3, label: 'Select 3'},
                    {value: 4, label: 'Select 4'},
                    {value: 5, label: 'Select 5'},
                ]
            }
        },
        methods: {
            submit() {
                const postData = {
                    first_name: this.first_name,
                    last_name: this.last_name
                };
                axios.post('/laravel-api/test-apis', postData).then(response => {
                    console.log(response.data);
                }).catch((error) => {
                    if(error.response.status === 422) {
                        this.message = error.response.data.message
                        this.errors = error.response.data.errors
                    }
                    if(error.response.status === 500) {

                    }
                })
            },
            searchQuery(search) {
                console.log(search)
            }
        }
    }
</script>

<style scoped>

</style>
