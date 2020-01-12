<template>
    <div class="bg-gray-200 flex-none w-48 pb-6 hidden md:block h-full">
        <div class="text-white mb-2 px-1 justify-between">
            <img src="/nits-assets/nits-editor-logo.png" alt="NitsEditor Logo">
        </div>
        <div class="mb-8 mt-8 overflow-y-scroll">
            <div class="flex justify-center">
                <nav id="nav" class="w-48 relative">
                    <div class="px-4 text-xs text-gray-700 uppercase font-semibold">Content</div>
                    <span
                        class="absolute h-10 w-full bg-white rounded-lg shadow ease-out transition-transform transition-medium"
                        :style="{ transform: `translateY(calc(100% * ${selected}))` }"
                    ></span>
                    <ul class="relative">
                        <li>
                            <button
                                type="button"
                                @click="select(0)"
                                :aria-selected="selected === 0"
                                class="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
                            >
                                <svg
                                    :class="selected === 0 ? 'text-teal-500' : 'text-gray-500'"
                                    class="h-6 w-6 transition-all ease-out transition-medium"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 101.414 1.414L4 12.414V21a1 1 0 001 1h5a1 1 0 001-1v-6h2v6a1 1 0 001 1h5a1 1 0 001-1v-8.586l.293.293a1 1 0 001.414-1.414l-9-9zM18 10.414l-6-6-6 6V20h3v-6a1 1 0 011-1h4a1 1 0 011 1v6h3v-9.586z"
                                    />
                                </svg>
                                <span
                                    :class="selected === 0 ? 'text-teal-500' : 'text-gray-700'"
                                    class="ml-2 text-sm font-medium transition-all ease-out transition-medium"
                                >
              Home
            </span>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                @click="select(1)"
                                :aria-selected="selected === 1"
                                class="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
                            >
                                <svg
                                    :class="selected === 1 ? 'text-teal-500' : 'text-gray-500'"
                                    class="h-6 w-6 transition-all ease-out transition-medium"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M11.617 1.076a1 1 0 011.09.217l5.657 5.657a9 9 0 11-13.113.41A1 1 0 017 8.022v2.292a2 2 0 104 0V2a1 1 0 01.617-.924zM13 4.414v5.9A4 4 0 015.212 11.6 7 7 0 1016.95 8.364L13 4.414z"
                                    />
                                </svg>
                                <span
                                    :class="selected === 1 ? 'text-teal-500' : 'text-gray-700'"
                                    class="ml-2 text-sm font-medium transition-all ease-out transition-medium"
                                >
              Popular
            </span>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                @click="select(2)"
                                :aria-selected="selected === 2"
                                class="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
                            >
                                <svg
                                    :class="selected === 2 ? 'text-teal-500' : 'text-gray-500'"
                                    class="h-6 w-6 transition-all ease-out transition-medium"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12 7a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 11-2 0V8h-7a1 1 0 01-1-1z"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M20.707 7.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0L9 12.414l-5.293 5.293a1 1 0 01-1.414-1.414l6-6a1 1 0 011.414 0L13 13.586l6.293-6.293a1 1 0 011.414 0z"
                                    />
                                </svg>
                                <span
                                    :class="selected === 2 ? 'text-teal-500' : 'text-gray-700'"
                                    class="ml-2 text-sm font-medium transition-all ease-out transition-medium"
                                >
              Trending
            </span>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                @click="select(3)"
                                :aria-selected="selected === 3"
                                class="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
                            >
                                <svg
                                    :class="selected === 3 ? 'text-teal-500' : 'text-gray-500'"
                                    class="h-6 w-6 transition-all ease-out transition-medium"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7 10a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3h-8a3 3 0 01-3-3v-8zm3-1a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-8a1 1 0 00-1-1h-8z"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M3 6a3 3 0 013-3h10a1 1 0 110 2H6a1 1 0 00-1 1v10a1 1 0 11-2 0V6z"
                                    />
                                </svg>
                                <span
                                    :class="selected === 3 ? 'text-teal-600' : 'text-gray-700'"
                                    class="ml-2 text-sm font-medium transition-all ease-out transition-medium"
                                >
              Subscriptions
            </span>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                @click="select(4)"
                                :aria-selected="selected === 4"
                                class="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
                            >
                                <svg
                                    :class="selected === 4 ? 'text-teal-500' : 'text-gray-500'"
                                    class="h-6 w-6 transition-all ease-out transition-medium"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M4 5a3 3 0 013-3h10a3 3 0 013 3v16a1 1 0 01-1.447.894L12 18.618l-6.553 3.276A1 1 0 014 21V5zm3-1a1 1 0 00-1 1v14.382l5.553-2.776a1 1 0 01.894 0L18 19.382V5a1 1 0 00-1-1H7z"
                                    />
                                </svg>
                                <span
                                    :class="selected === 4 ? 'text-teal-600' : 'text-gray-700'"
                                    class="ml-2 text-sm font-medium transition-all ease-out transition-medium"
                                >
              Bookmarks
            </span>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                @click="select(5)"
                                :aria-selected="selected === 5"
                                class="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
                            >
                                <svg
                                    :class="selected === 5 ? 'text-teal-500' : 'text-gray-500'"
                                    class="h-6 w-6 transition-all ease-out transition-medium"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M13 11.586l2.536 2.535a1 1 0 11-1.415 1.415l-2.828-2.829A.997.997 0 0111 12V8a1 1 0 112 0v3.586z"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M5 1a1 1 0 011 1v1.998c3.918-2.945 9.506-2.635 13.071.93 3.905 3.906 3.905 10.238 0 14.143-3.905 3.905-10.237 3.905-14.142 0A9.972 9.972 0 012 12a1 1 0 112 0 8 8 0 101.777-5.029A1 1 0 014 6.341V2a1 1 0 011-1z"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M11.293 12.707A.997.997 0 0111 12V8a1 1 0 112 0v3.586l2.536 2.535a1 1 0 11-1.415 1.415l-2.828-2.829zM5.934 1.643A1 1 0 004 2v4.342a1 1 0 001.777.63A8 8 0 114 12v-.001a1 1 0 10-2 0c0 2.558.977 5.119 2.929 7.071 3.905 3.905 10.237 3.905 14.142 0 3.844-3.844 3.904-10.04.18-13.957A10.004 10.004 0 006 3.999V2a.998.998 0 00-.066-.357zM5 2.25z"
                                    />
                                </svg>
                                <span
                                    :class="selected === 5 ? 'text-teal-600' : 'text-gray-700'"
                                    class="ml-2 text-sm font-medium transition-all ease-out transition-medium"
                                >
              History
            </span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="mb-8 mt-8 overflow-y-scroll">
            <div class="px-4 mb-2 text-sm text-gray-700 uppercase font-bold">Content</div>
            <div class="px-4 mb-1 flex justify-start items-center">
                <div class="py-1 h-4 -m-1 mr-1 border-l-2 border-teal-600"></div>
                <svg class="ml-2 text-teal-500 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.56 8.93l6.37-2.12a1 1 0 0 1 1.26 1.26l-2.12 6.37a1 1 0 0 1-.63.63l-6.37 2.12a1 1 0 0 1-1.26-1.26l2.12-6.37a1 1 0 0 1 .63-.63zm-.22 5.73l4-1.33 1.32-4-4 1.34-1.32 4z"/>
                </svg>
                <div class="ml-3 text-center text-teal-600 text-md font-medium">Dashboard</div>
            </div>
            <div class="px-4 mb-1 text-black flex justify-start items-center">
                <svg class="ml-2 text-gray-600 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path class="heroicon-ui" d="M7 5H5v14h14V5h-2v10a1 1 0 0 1-1.45.9L12 14.11l-3.55 1.77A1 1 0 0 1 7 15V5zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm4 2v8.38l2.55-1.27a1 1 0 0 1 .9 0L15 13.38V5H9z"/>
                </svg>
                <div class="ml-2 text-center text-gray-900 text-sm font-medium">Pages</div>
            </div>
            <div class="px-4 mb-2 mt-6 text-sm text-gray-700 uppercase font-bold">Tools</div>
            <div class="px-4 mb-1 flex justify-start items-center">
                <svg class="ml-2 text-gray-600 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path class="heroicon-ui" d="M6 2h9a1 1 0 0 1 .7.3l4 4a1 1 0 0 1 .3.7v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm9 2.41V7h2.59L15 4.41zM18 9h-3a2 2 0 0 1-2-2V4H6v16h12V9zm-2 7a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm0-4a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm-5-4a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1z"/>
                </svg>
                <div class="ml-3 text-center text-gray-900 text-sm font-medium">Forms</div>
            </div>
            <div class="px-4 mb-1 text-black flex justify-start items-center">
                <svg class="ml-2 text-gray-600 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path class="heroicon-ui" d="M15.6 15.47A4.99 4.99 0 0 1 7 12a5 5 0 0 1 10 0v1.5a1.5 1.5 0 1 0 3 0V12a8 8 0 1 0-4.94 7.4 1 1 0 1 1 .77 1.84A10 10 0 1 1 22 12v1.5a3.5 3.5 0 0 1-6.4 1.97zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                <div class="ml-2 text-center text-gray-900 text-sm font-medium">Updater</div>
            </div>
            <div class="px-4 mb-1 text-black flex justify-start items-center">
                <svg class="ml-2 text-gray-600 h-4 w-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Text_document" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                            <path d="M16,1H4C3.447,1,3,1.447,3,2v16c0,0.552,0.447,1,1,1h12c0.553,0,1-0.448,1-1V2C17,1.448,16.553,1,16,1z   M15,17H5V3h10V17z M13,5H7v2h6V5z M13,13H7v2h6V13z M13,9H7v2h6V9z"/>
                        </svg>
                <div class="ml-2 text-center text-gray-900 text-sm font-medium">Import</div>
            </div>
            <div class="px-4 mb-2 mt-6 text-sm text-gray-700 uppercase font-bold">Configure</div>
            <div class="px-4 mb-1 text-black flex justify-start items-center">
                <svg class="ml-2 text-gray-600 h-4 w-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Compass" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                            <path d="M5.454,14.548c0,0,4.568-0.627,6.518-2.576s2.576-6.518,2.576-6.518S9.979,6.081,8.03,8.03  S5.454,14.548,5.454,14.548z M9.017,9.015c0.818-0.818,2.385-1.4,3.729-1.762c-0.361,1.342-0.945,2.92-1.76,3.732  c-0.543,0.545-1.426,0.545-1.969,0C8.472,10.442,8.472,9.56,9.017,9.015z M10.001,0.4C4.698,0.4,0.4,4.698,0.4,10  c0,5.303,4.298,9.601,9.601,9.601c5.301,0,9.6-4.298,9.6-9.601C19.601,4.698,15.302,0.4,10.001,0.4z M10,17.6  c-4.197,0-7.6-3.402-7.6-7.6c0-4.197,3.402-7.6,7.6-7.6c4.197,0,7.601,3.402,7.601,7.6C17.601,14.197,14.197,17.6,10,17.6z"/>
                        </svg>
                <div class="ml-3 text-center text-gray-900 text-sm font-medium">Addons</div>
            </div>
            <div class="px-4 mb-1 text-black flex justify-start items-center">
                <svg class="ml-2 text-gray-600 h-4 w-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Text_document" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                            <path d="M16,1H4C3.447,1,3,1.447,3,2v16c0,0.552,0.447,1,1,1h12c0.553,0,1-0.448,1-1V2C17,1.448,16.553,1,16,1z   M15,17H5V3h10V17z M13,5H7v2h6V5z M13,13H7v2h6V13z M13,9H7v2h6V9z"/>
                        </svg>
                <div class="ml-2 text-center text-gray-900 text-sm font-medium">Settings</div>
            </div>
            <div class="px-4 mb-1 text-black flex justify-start items-center">
                <svg class="ml-2 text-gray-600 h-4 w-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Text_document" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                            <path d="M16,1H4C3.447,1,3,1.447,3,2v16c0,0.552,0.447,1,1,1h12c0.553,0,1-0.448,1-1V2C17,1.448,16.553,1,16,1z   M15,17H5V3h10V17z M13,5H7v2h6V5z M13,13H7v2h6V13z M13,9H7v2h6V9z"/>
                        </svg>
                <div class="ml-2 text-center text-gray-900 text-sm font-medium">Users</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuOne",
        data() {
            return {
                selected: 1
            }
        },
        methods: {
            select(i) {
                this.selected = i;
            }
        }
    }
</script>

<style scoped>
    .ease-in {
        transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    }
    .ease-out {
        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    .ease-in-out {
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    .transition-fastest {
        transition-duration: 75ms;
    }
    .transition-faster {
        transition-duration: 100ms;
    }
    .transition-fast {
        transition-duration: 150ms;
    }
    .transition-medium {
        transition-duration: 200ms;
    }
    .transition-slow {
        transition-duration: 300ms;
    }
    .transition-slower {
        transition-duration: 500ms;
    }
    .transition-slowest {
        transition-duration: 700ms;
    }

    .transition-all {
        transition-property: all;
    }
    .transition-opacity {
        transition-property: opacity;
    }
    .transition-transform {
        transition-property: transform;
    }

    .focus-visible.focus-visible\:underline {
        text-decoration: underline;
    }
</style>
