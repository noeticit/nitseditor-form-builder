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
                        <div class="flex justify-between">
                            <h3 class="text-grey-100 mb-1 font-extrabold">#form-builder</h3>
                            <button class="inline-block px-2 py-1 rounded-lg shadow-md bg-teal-500 hover:bg-teal-400 focus:outline-none focus:shadow-outline text-white text-sm tracking-wider font-semibold" @click="showGridModal = true">Add</button>
                        </div>

                        <div class="flex items-center justify-start">
                            <div class="m-2 w-full rounded-lg shadow-lg border rounded flex flex-col justify-start items-start p-4 bg-white">
                                <div class="flex justify-between w-full border-b mb-1">
                                    <div class="px-3 py-1 justify-start text-gray-700 font-semibold"> Form </div>
                                    <div class="px-3 py-1 flex justify-end">
                                        <svg class="fill-current text-grey h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                        </svg>
                                        <svg class="fill-current text-grey h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                        </svg>
                                        <svg class="fill-current text-grey h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="w-full bg-gray-300 justify-center flex-col p-3">
                                    <component class="m-2"
                                            v-for="(item, index) in forms"
                                            :key="index"
                                            :is="item.component"
                                    >
                                    </component>
                                </div>
                                <div class="w-full bg-gray-300 justify-center flex" v-if="!forms.length">
                                    <div class="h-64 w-64 bg-gray-300">
                                        <div class="flex-col justify-start p-6">
                                            <h3 class="mb-3 mt-4 text-right text-gray-700 tracking-wider text-md font-semibold">Start building your form!</h3>
                                            <p class="mb-3 text-gray-500 text-right tracking-wider text-xs font-semibold">Select your form grid type!</p>
                                            <button class="inline-block px-2 py-1 rounded-lg shadow-md bg-teal-500 hover:bg-teal-400 focus:outline-none focus:shadow-outline text-white text-sm tracking-wider font-semibold" @click="showGridModal = true">Start Now</button>
                                        </div>
                                    </div>
                                    <div class="block h-64 w-64 bg-gray-300">
                                        <img src="/nits-assets/tailwind_images/form-builder.png" alt="Form Builder">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer-one></footer-one>
            </div>
        </div>
        <!-- Modals... -->
        <div v-if="showGridModal" class="modal opacity-1 fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

            <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">

                <div class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50" @click="showGridModal = false">
                    <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                    <span class="text-sm">(Esc)</span>
                </div>

                <!-- Add margin if you want to see some of the overlay behind the modal-->
                <div class="modal-content py-4 text-left px-6">
                    <!--Title-->
                    <div class="flex justify-between items-center pb-3">
                        <p class="text-2xl font-bold">Select your grid!</p>
                        <div class="modal-close cursor-pointer z-50">
                            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" @click="showGridModal = false">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                        </div>
                    </div>

                    <!--Body-->
                    <div class="flex-col">
                        <div class="flex" @click="addColumn('single')">
                            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z"/></svg>
                            <span class="ml-4 text-xs text-gray-500 font-semibold">1 Column</span>
                        </div>
                        <div class="flex justify-start" @click="addColumn('double')">
                            <svg class="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z"/></svg>
                            <div class="border-l-2 h-4"></div>
                            <svg class="ml-1 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z"/></svg>
                            <span class="ml-4 text-xs text-gray-500 font-semibold">2 Columns</span>
                        </div>
                        <div class="flex justify-start" @click="addColumn('triple')">
                            <svg class="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z"/></svg>
                            <div class="border-l-2 h-4"></div>
                            <svg class="ml-1 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z"/></svg>
                            <div class="border-l-2 h-4"></div>
                            <svg class="ml-1 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z"/></svg>
                            <span class="ml-4 text-xs text-gray-500 font-semibold">3 Columns</span>
                        </div>
                        <div class="flex justify-start" @click="addColumn('quad')">
                            <svg class="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z"/></svg>
                            <div class="border-l-2 h-4"></div>
                            <svg class="ml-1 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z"/></svg>
                            <div class="border-l-2 h-4"></div>
                            <svg class="ml-1 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z"/></svg>
                            <div class="border-l-2 h-4"></div>
                            <svg class="ml-1 mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z"/></svg>
                            <span class="ml-4 text-xs text-gray-500 font-semibold">4 Columns</span>
                        </div>
                    </div>

                    <!--Footer-->
                    <div class="flex justify-end pt-2">
                        <button class="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">Action</button>
                        <button class="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">Close</button>
                    </div>

                </div>
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
    import InputFile from "../Elements/Forms/Inputs/File";
    import InputDate from "../Elements/Forms/Inputs/Date";
    import SingleColumn from "../../application/FormBuilder/Grids/SingleColumn";
    import DoubleColumn from "../../application/FormBuilder/Grids/DoubleColumn";
    import TripleColumn from "../../application/FormBuilder/Grids/TripleColumn";
    import QuadColumn from "../../application/FormBuilder/Grids/QuadColumn";
    export default {
        name: "FormBuilder",
        components: {
            InputDate, InputFile, InputSelect, InputMultiSelect,
            MenuOne, TopBarOne, FooterOne, InputText, SingleColumn,
            DoubleColumn, TripleColumn, QuadColumn
        },
        data() {
            return {
                showGridModal: false,
                forms: [
                    {component: 'single-column', data:''},
                    {component: 'double-column', data:''},
                    {component: 'triple-column', data:''},
                    {component: 'quad-column', data:''},
                ]
            }
        },
        methods: {
            addColumn(type) {
                this.forms.push({component: type+'-column'});
                this.showGridModal = false;
            }
        }
    }
</script>

<style scoped>
    .modal {
        transition: opacity 0.25s ease;
    }
    body.modal-active {
        overflow-x: hidden;
        overflow-y: visible !important;
    }
</style>
