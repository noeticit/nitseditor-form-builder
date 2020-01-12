<template>
    <div class="h-screen w-screen bg-gray-100 flex-col">
        <div class="pt-3 pl-3">
            <img class="h-16" src="/nits-assets/logo.png" alt="NitsEditor Logo">
        </div>
        <div class="mt-4">
            <div class="flex">
                <div class="hidden md:block md:w-1/2">
                    <img src="/nits-assets/images/login_2.png" alt="Login">
                </div>
                <div class="md:w-1/2 md:max-w-lg">
                    <div class="bg-white  m-2 p-6 flex-col rounded-lg shadow-2xl justify-center">
                        <h4 class="mt-5 mb-10 text-center text-lg text-gray-800 font-semibold">Login to your account</h4>
                        <input class="shadow appearance-none border rounded w-full px-2 py-3 text-gray-700 focus:outline-none focus:shadow-outline" type="text" placeholder="Your email">
                        <input class="mt-5 shadow appearance-none border rounded w-full px-2 py-3 text-gray-700 focus:outline-none focus:shadow-outline" type="password" placeholder="Password">
                        <div class="mt-3 mb-2 justify-center text-center">
                            <svg class="h-8 bg-teal-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Facebook" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">
                                <path fill="#FFFFFF" d="M17,1H3C1.9,1,1,1.9,1,3v14c0,1.101,0.9,2,2,2h7v-7H8V9.525h2v-2.05c0-2.164,1.212-3.684,3.766-3.684  l1.803,0.002v2.605h-1.197C13.378,6.398,13,7.144,13,7.836v1.69h2.568L15,12h-2v7h4c1.1,0,2-0.899,2-2V3C19,1.9,18.1,1,17,1z"/>
                            </svg>
                        </div>
                        <a class="inline-block bg-teal-500 mt-4 px-4 py-2 rounded-lg shadow-md text-white text-sm font-semibold text-center justify-center" href="#">Sign In</a>
                        <div>Don't have account? <a href="#">Sign Up</a></div>
                    </div>
                </div>

            </div>

        </div>
        <div class="fixed bottom-0 w-full">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-center text-gray-500 text-xs font-semibold">&copy;2020 Noetic IT Services Pvt. Ltd.</p>
                </div>
                <div>
                    <a class="text-center text-gray-500 text-xs font-semibold" href="#">About Us</a>
                    <a class="text-center text-gray-500 text-xs font-semibold" href="#">Disclaimer</a>
                    <a class="text-center text-gray-500 text-xs font-semibold" href="#">Support</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginVersionTwo"
    }
</script>

<style scoped>

</style>
