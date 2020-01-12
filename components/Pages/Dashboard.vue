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
                        <h3 class="text-grey-100 mb-1 font-extrabold">#dashboard</h3>
                        <div class="flex item-center justify-start">
                            <!-- Widget one-->
                            <div class="w-64 m-2 cursor-pointer rounded-lg shadow-lg border b-gray-400 rounded flex flex-col justify-center items-center text-center p-6 bg-white">
                                <div class="text-md font-bold flex flex-col text-gray-900"><span class="uppercase">Today</span> <span class="font-normal text-gray-700 text-sm">July 29</span></div>
                                <div class="w-32 h-32 flex items-center justify-center">
                                    <svg class="h-20" viewBox="0 0 81 73" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Desktop-HD" transform="translate(-174.000000, -308.000000)" fill-rule="nonzero">
                                                <g id="Group" transform="translate(95.000000, 222.000000)">
                                                    <g id="2" transform="translate(79.000000, 86.000000)">
                                                        <path d="M35.288454,26.4312368 C34.8062502,27.5960191 33.4711041,28.1493583 32.3063218,27.6671545 C31.1415395,27.1849507 30.5882004,25.8498046 31.0704042,24.6850223 C33.990421,17.6316069 40.8868442,12.9347826 48.6521739,12.9347826 C59.1575903,12.9347826 67.673913,21.4511053 67.673913,31.9565217 C67.673913,34.1117269 67.3144924,36.2210565 66.6187558,38.217674 C66.2039356,39.4081203 64.90261,40.0368896 63.7121636,39.6220695 C62.5217172,39.2072493 61.8929479,37.9059237 62.3077681,36.7154773 C62.8357821,35.2001886 63.1086957,33.5985422 63.1086957,31.9565217 C63.1086957,23.9724052 56.6362904,17.5 48.6521739,17.5 C42.7496023,17.5 37.5080182,21.0697924 35.288454,26.4312368 Z M71.2488471,9.35984851 C72.1402613,10.2512627 72.1402613,11.6965305 71.2488471,12.5879447 L68.020751,15.8160409 C67.1293368,16.707455 65.6840689,16.707455 64.7926548,15.8160409 C63.9012406,14.9246267 63.9012406,13.4793588 64.7926548,12.5879447 L68.020751,9.35984851 C68.9121651,8.46843437 70.357433,8.46843437 71.2488471,9.35984851 Z M48.6521739,0 C49.9128239,0 50.9347826,1.02195872 50.9347826,2.2826087 L50.9347826,6.84782609 C50.9347826,8.10847606 49.9128239,9.13043478 48.6521739,9.13043478 C47.3915239,9.13043478 46.3695652,8.10847606 46.3695652,6.84782609 L46.3695652,2.2826087 C46.3695652,1.02195872 47.3915239,0 48.6521739,0 Z M80.6086957,31.9565217 C80.6086957,33.2171717 79.5867369,34.2391304 78.326087,34.2391304 L73.7608696,34.2391304 C72.5002196,34.2391304 71.4782609,33.2171717 71.4782609,31.9565217 C71.4782609,30.6958718 72.5002196,29.673913 73.7608696,29.673913 L78.326087,29.673913 C79.5867369,29.673913 80.6086957,30.6958718 80.6086957,31.9565217 Z M26.0555007,9.35984851 C26.9469148,8.46843437 28.3921827,8.46843437 29.2835969,9.35984851 L32.511693,12.5879447 C33.4031072,13.4793588 33.4031072,14.9246267 32.511693,15.8160409 C31.6202789,16.707455 30.175011,16.707455 29.2835969,15.8160409 L26.0555007,12.5879447 C25.1640865,11.6965305 25.1640865,10.2512627 26.0555007,9.35984851 L26.0555007,9.35984851 Z" id="Shape" fill="#FECA57"></path>
                                                        <path d="M45.138293,37.2826087 C44.3551693,37.2826087 43.6267158,36.8811485 43.2084767,36.2190618 C39.4665187,30.2954152 32.9620213,26.6304348 25.826087,26.6304348 C14.4802372,26.6304348 5.2826087,35.8280633 5.2826087,47.173913 C5.2826087,58.5197628 14.4802372,67.7173913 25.826087,67.7173913 L55.5,67.7173913 C63.9043331,67.7173913 70.7173913,60.9043331 70.7173913,52.5 C70.7173913,44.0956669 63.9043331,37.2826087 55.5,37.2826087 L45.138293,37.2826087 Z M46.3580943,32.7173913 L55.5,32.7173913 C66.4256331,32.7173913 75.2826087,41.5743669 75.2826087,52.5 C75.2826087,63.4256331 66.4256331,72.2826087 55.5,72.2826087 L25.826087,72.2826087 C11.9589373,72.2826087 0.717391304,61.0410627 0.717391304,47.173913 C0.717391304,33.3067633 11.9589373,22.0652174 25.826087,22.0652174 C34.1091478,22.0652174 41.7014994,26.1099628 46.3580943,32.7173913 Z" id="Path-Copy" fill="#0ABDE3"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <p class="text-gray-700 mb-2">Partly cloud</p>
                                <div class="text-3xl font-bold text-gray-900 mb-6">32º<span class="font-normal text-gray-700 mx-1">/</span>20º</div>
                                <div class="flex justify-between w-full">
                                    <div class="flex items-center text-gray-700 px-2">
                                        <svg class="mr-2 h-4" viewBox="0 0 11 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g id="Desktop-HD" transform="translate(-120.000000, -479.000000)" fill="#60A2D7" fill-rule="nonzero">
                                                    <g id="Group" transform="translate(95.000000, 222.000000)">
                                                        <g id="Group-3" transform="translate(25.000000, 256.774194)">
                                                            <g id="028-drop" transform="translate(0.000000, 0.225806)">
                                                                <path d="M11,11.9334341 C11,15.0552582 8.53750272,17.5862069 5.5,17.5862069 C2.46249728,17.5862069 0,15.0552582 0,11.9334341 C0,7.58026159 5.5,0 5.5,0 C5.5,0 11,7.58026159 11,11.9334341 L11,11.9334341 Z" id="Path"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        100 l/m<sup>2</sup>
                                    </div>
                                    <div class="flex items-center text-gray-700 px-2">
                                        <svg class="mr-2 h-4 w-4" viewBox="0 0 12 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g id="Desktop-HD" transform="translate(-201.000000, -480.000000)" fill="#0ABDE3" fill-rule="nonzero">
                                                    <g id="Group" transform="translate(95.000000, 222.000000)">
                                                        <g id="Group-3" transform="translate(25.000000, 256.774194)">
                                                            <g id="wind" transform="translate(87.500000, 11.225806) rotate(-90.000000) translate(-87.500000, -11.225806) translate(77.000000, 5.225806)">
                                                                <g id="w25">
                                                                    <path d="M16.222113,3.9997453 C16.1020238,4.11833549 16.0351226,4.28256699 16.0372726,4.45349848 C16.0394226,4.62442997 16.1104323,4.78683812 16.2334644,4.90221395 C16.6379853,5.28943966 17.0750123,5.74649295 17.5388698,6.22999608 C17.7684767,6.47016066 18.06,6.8515674 18.2916708,7.08908699 C16.7035135,7.07321708 16.0399754,7.11553683 15.1586978,7.07639107 C14.8000983,7.05999216 14.595258,7.23032915 14.595258,7.58264107 C14.595258,7.93442398 14.7443735,8.11216693 15.1034889,8.11216693 C15.9563882,8.11216693 16.7896806,8.06878918 18.3881572,8.08571708 C17.6494273,8.82722969 16.9039897,9.56168541 16.151941,10.288989 C16.0291152,10.4045196 15.9582985,10.5669407 15.9562468,10.737822 C15.9541952,10.9087034 16.0210908,11.0728624 16.1411057,11.1914577 C16.3966491,11.4436893 16.7995644,11.4483255 17.0605651,11.2020376 C18.1048894,10.2022335 19.4185504,8.91148119 20.2957002,8.02805643 C20.4143735,7.90850313 20.5072482,7.74874608 20.5072482,7.58264107 L20.5072482,7.56465517 C20.5072482,7.39273119 20.3988943,7.22927116 20.2699017,7.11236285 C19.7188452,6.6151058 19.092457,5.97501959 18.5001229,5.35662226 C18.0589126,4.89113359 17.6081986,4.43521373 17.1482801,3.98916536 C16.8847573,3.74276899 16.4802155,3.74739022 16.222113,3.9997453 L16.222113,3.9997453 Z" id="Path"></path>
                                                                    <path d="M0,7.255721 C0,7.04623824 0.165110565,6.87695925 0.369434889,6.87695925 L18.7214742,6.87695925 C18.9252826,6.87695925 19.0909091,7.04623824 19.0909091,7.255721 L19.0909091,8.08518809 C19.0909091,8.29467085 18.9257985,8.46394984 18.7214742,8.46394984 L0.369434889,8.46394984 C0.165401634,8.46394984 0,8.29437243 0,8.08518809 L0,7.255721 Z" id="Path"></path>
                                                                    <path d="M0.369434889,8.46394984 C0.165401634,8.46394984 0,8.29437243 0,8.08518809 L0,0.378761755 C0,0.169278997 0.165110565,0 0.369434889,0 L1.17847666,0 C1.38228501,0 1.54791155,0.169278997 1.54791155,0.378761755 L1.54791155,8.08518809 C1.54791155,8.29414185 1.38280098,8.46394984 1.17847666,8.46394984 L0.369434889,8.46394984 Z" id="Path"></path>
                                                                </g>
                                                                <path d="M4.108,8.53448276 C3.91028206,8.53448276 3.75,8.3634922 3.75,8.15256466 L3.75,0.381918103 C3.75,0.170689655 3.91,0 4.108,0 L4.892,0 C5.0895,0 5.25,0.170689655 5.25,0.381918103 L5.25,8.15256466 C5.25,8.3632597 5.09,8.53448276 4.892,8.53448276 L4.108,8.53448276 Z" id="Path"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        20 km/h
                                    </div>
                                </div>
                            </div>
                            <!-- Widget two-->
                            <div class="m-2 w-100 rounded-lg overflow-hidden shadow-lg bg-white min-h-64 lg:w-1/4 sm:w-1/2 md:w-1/3">
                                <p class="px-2 text-gray-600 mb-2 text-2xl font-thin px-4 pt-3">Contacts</p>
                                <div class="px-2">
                                    <svg class="absolute z-50 m-1 text-blue-400" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.71 14H15.5L20.49 19L19 20.49L14 15.5V14.71L13.73 14.43C12.59 15.41 11.11 16 9.5 16C5.90997 16 3 13.09 3 9.5C3 5.90997 5.90997 3 9.5 3C13.09 3 16 5.90997 16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14ZM5 9.5C5 11.99 7.01001 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01001 11.99 5 9.5 5C7.01001 5 5 7.01001 5 9.5Z"
                                            fill="black" fill-opacity="0.54" />
                                    </svg>
                                    <input type="text" class="pl-8 p-1 bg-gray-200 w-full rounded relative" placeholder="Search teams or members">
                                </div>
                                <div class="py-5 px-3">
                                    <div class="flex justify-between px-2 py-2">
                                        <p class="flex text-gray-700">
                                            <svg class="w-2 text-gray-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
                                                <circle cx="4" cy="4" r="3" />
                                            </svg>
                                            Tighten Co.
                                        </p>
                                        <p class="text-gray-500 font-thin">Team</p>
                                    </div>
                                    <div class="flex justify-between px-2 py-2 bg-blue-100 rounded">
                                        <p class="flex text-gray-700">
                                            <svg class="h2 w-2 text-teal-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
                                                <circle cx="4" cy="4" r="3" />
                                            </svg>
                                            Taylor Otwell
                                        </p>
                                        <p class="text-gray-500 font-thin">Member</p>
                                    </div>
                                    <div class="flex justify-between px-2 py-2">
                                        <p class="flex text-gray-700">
                                            <svg class="h2 w-2 text-gray-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
                                                <circle cx="4" cy="4" r="3" />
                                            </svg>
                                            Adam Wathan
                                        </p>
                                        <p class="text-gray-500 font-thin">Member</p>
                                    </div>
                                    <div class="flex justify-between px-2 py-2">
                                        <p class="flex text-gray-700">
                                            <svg class="h2 w-2 text-gray-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
                                                <circle cx="4" cy="4" r="3" />
                                            </svg>
                                            Ahmed Ashraf
                                        </p>
                                        <p class="text-gray-500 font-thin">Member</p>
                                    </div>
                                    <div class="flex justify-between px-2 py-2">
                                        <p class="flex text-gray-700">
                                            <svg class="h2 w-2 text-teal-500 mx-2" viewBox="0 0 8 8" fill="currentColor">
                                                <circle cx="4" cy="4" r="3" />
                                            </svg>
                                            Laracasts
                                        </p>
                                        <p class="text-gray-500 font-thin">Team</p>
                                    </div>
                                </div>
                                <div class="bg-gray-300 flex flex-row-reverse px-2 py-3">
                                    <button class="bg-blue-500 py-2 px-4 rounded text-white">Invite</button>
                                    <button class="py-2 px-4 rounded text-gray-600">Cancel</button>
                                </div>
                            </div>
                            <!-- Widget three-->
                            <div class="m-2 w-100 bg-white sm:max-w-full max-w-md rounded-lg overflow-hidden shadow-lg">
                                <div class="text-center p-6  border-b">
                                    <img class="h-24 w-24 rounded-full mx-auto" src="https://randomuser.me/api/portraits/men/24.jpg" alt="Randy Robertson" />
                                    <p class="pt-2 text-lg font-semibold">
                                        Nitish Kumar
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        nitishkumar@noeticitservices.com
                                    </p>
                                    <div class="mt-5">
                                        <a href="#" class="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700">Manage your Google Account</a>
                                    </div>
                                </div>
                                <div class="px-6 py-4">
                                    <span class="inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2 mt-2">Privacy Policy</span>
                                    <span class="inline-block rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mr-2 mt-2">Terms of Service</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex item-center justify-center">
                            <div class="bg-white m-2 rounded-lg shadow-lg p-6 h-auto justify-center">
                                <h4 class="mb-10 font-semibold text-center text-lg text-gray-800">Login to your account</h4>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Your email">
                                <input class="mt-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Your password">
                                <div class="mt-4 text-center text-gray-500 text-xs">
                                    Or sign in with:
                                </div>
                                <div class="mt-1 flex text-center items-center justify-center">
                                    <svg class="bg-teal-500 ml-2 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill="#FFF" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z"/>
                                    </svg>
                                    <svg class="bg-teal-500 ml-2 h-8 w-8"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill="#FFF" d="M1.989 5.589c0 1.494.499 2.572 1.482 3.205.806.52 1.74.598 2.226.598.118 0 .213-.006.279-.01 0 0-.154 1.004.59 1.996h-.034c-1.289 0-5.493.269-5.493 3.727 0 3.516 3.861 3.695 4.636 3.695.061 0 .097-.002.097-.002.008 0 .063.002.158.002.497 0 1.782-.062 2.975-.643 1.548-.75 2.333-2.059 2.333-3.885 0-1.764-1.196-2.814-2.069-3.582-.533-.469-.994-.873-.994-1.266 0-.4.337-.701.762-1.082.689-.615 1.339-1.492 1.339-3.15 0-1.457-.189-2.436-1.354-3.057.121-.062.551-.107.763-.137.631-.086 1.554-.184 1.554-.699V1.2H6.64c-.046.002-4.651.172-4.651 4.389zm7.424 9.013c.088 1.406-1.115 2.443-2.922 2.574-1.835.135-3.345-.691-3.433-2.096-.043-.676.254-1.336.835-1.863.589-.533 1.398-.863 2.278-.928.104-.006.207-.012.31-.012 1.699.001 2.849.999 2.932 2.325zM8.212 4.626c.451 1.588-.23 3.246-1.316 3.553a1.417 1.417 0 01-.384.052c-.994 0-1.979-1.006-2.345-2.393-.204-.776-.187-1.458.047-2.112.229-.645.643-1.078 1.163-1.225.125-.035.254-.053.385-.053 1.2 0 1.972.498 2.45 2.178zM16 8V5h-2v3h-3v2h3v3h2v-3h3V8h-3z"/>
                                    </svg>
                                    <svg class="bg-teal-500 ml-2 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill="#FFF" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm2.577 13.741a5.508 5.508 0 01-1.066.395 4.543 4.543 0 01-1.031.113c-.42 0-.791-.055-1.114-.162a2.373 2.373 0 01-.826-.459 1.651 1.651 0 01-.474-.633c-.088-.225-.132-.549-.132-.973V9.16H6.918V7.846c.359-.119.67-.289.927-.512.257-.221.464-.486.619-.797.156-.31.263-.707.322-1.185h1.307v2.35h2.18V9.16h-2.18v2.385c0 .539.028.885.085 1.037a.7.7 0 00.315.367c.204.123.437.185.697.185.466 0 .928-.154 1.388-.461v1.468h-.001z"/>
                                    </svg>
                                </div>
                                <div class="mt-4 text-center">
                                    <router-link to="/dashboard" class="inline-block px-4 py-2 rounded-lg shadow-md bg-teal-500 hover:bg-teal-400 focus:outline-none focus:shadow-outline text-white text-sm tracking-wider font-semibold">Sign in</router-link>
                                </div>
                                <div class="mt-1 text-center text-gray-500 text-xs">
                                    Don't have account? <a href="">Sign up</a>
                                </div>
                            </div>
                            <div class="bg-white m-2 rounded-lg shadow-lg p-6 h-auto justify-center">
                                <h4 class="mb-10 font-semibold text-center text-lg text-gray-800">Login to your account</h4>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Your email">
                                <input class="mt-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Your password">
                                <div class="mt-4 text-center text-gray-500 text-xs">
                                    Or sign in with:
                                </div>
                                <div class="mt-1 flex text-center items-center justify-center">
                                    <svg class="bg-teal-500 ml-2 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill="#FFF" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z"/>
                                    </svg>
                                    <svg class="bg-teal-500 ml-2 h-8 w-8"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill="#FFF" d="M1.989 5.589c0 1.494.499 2.572 1.482 3.205.806.52 1.74.598 2.226.598.118 0 .213-.006.279-.01 0 0-.154 1.004.59 1.996h-.034c-1.289 0-5.493.269-5.493 3.727 0 3.516 3.861 3.695 4.636 3.695.061 0 .097-.002.097-.002.008 0 .063.002.158.002.497 0 1.782-.062 2.975-.643 1.548-.75 2.333-2.059 2.333-3.885 0-1.764-1.196-2.814-2.069-3.582-.533-.469-.994-.873-.994-1.266 0-.4.337-.701.762-1.082.689-.615 1.339-1.492 1.339-3.15 0-1.457-.189-2.436-1.354-3.057.121-.062.551-.107.763-.137.631-.086 1.554-.184 1.554-.699V1.2H6.64c-.046.002-4.651.172-4.651 4.389zm7.424 9.013c.088 1.406-1.115 2.443-2.922 2.574-1.835.135-3.345-.691-3.433-2.096-.043-.676.254-1.336.835-1.863.589-.533 1.398-.863 2.278-.928.104-.006.207-.012.31-.012 1.699.001 2.849.999 2.932 2.325zM8.212 4.626c.451 1.588-.23 3.246-1.316 3.553a1.417 1.417 0 01-.384.052c-.994 0-1.979-1.006-2.345-2.393-.204-.776-.187-1.458.047-2.112.229-.645.643-1.078 1.163-1.225.125-.035.254-.053.385-.053 1.2 0 1.972.498 2.45 2.178zM16 8V5h-2v3h-3v2h3v3h2v-3h3V8h-3z"/>
                                    </svg>
                                    <svg class="bg-teal-500 ml-2 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill="#FFF" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm2.577 13.741a5.508 5.508 0 01-1.066.395 4.543 4.543 0 01-1.031.113c-.42 0-.791-.055-1.114-.162a2.373 2.373 0 01-.826-.459 1.651 1.651 0 01-.474-.633c-.088-.225-.132-.549-.132-.973V9.16H6.918V7.846c.359-.119.67-.289.927-.512.257-.221.464-.486.619-.797.156-.31.263-.707.322-1.185h1.307v2.35h2.18V9.16h-2.18v2.385c0 .539.028.885.085 1.037a.7.7 0 00.315.367c.204.123.437.185.697.185.466 0 .928-.154 1.388-.461v1.468h-.001z"/>
                                    </svg>
                                </div>
                                <div class="mt-4 text-center">
                                    <router-link to="/dashboard" class="inline-block px-4 py-2 rounded-lg shadow-md bg-teal-500 hover:bg-teal-400 focus:outline-none focus:shadow-outline text-white text-sm tracking-wider font-semibold">Sign in</router-link>
                                </div>
                                <div class="mt-1 text-center text-gray-500 text-xs">
                                    Don't have account? <a href="">Sign up</a>
                                </div>
                            </div>
                            <div class="bg-white m-2 rounded-lg shadow-lg p-6 h-auto justify-center">
                                <h4 class="mb-10 font-semibold text-center text-lg text-gray-800">Login to your account</h4>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Your email">
                                <input class="mt-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Your password">
                                <div class="mt-4 text-center text-gray-500 text-xs">
                                    Or sign in with:
                                </div>
                                <div class="mt-1 flex text-center items-center justify-center">
                                    <svg class="bg-teal-500 ml-2 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill="#FFF" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z"/>
                                    </svg>
                                    <svg class="bg-teal-500 ml-2 h-8 w-8"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill="#FFF" d="M1.989 5.589c0 1.494.499 2.572 1.482 3.205.806.52 1.74.598 2.226.598.118 0 .213-.006.279-.01 0 0-.154 1.004.59 1.996h-.034c-1.289 0-5.493.269-5.493 3.727 0 3.516 3.861 3.695 4.636 3.695.061 0 .097-.002.097-.002.008 0 .063.002.158.002.497 0 1.782-.062 2.975-.643 1.548-.75 2.333-2.059 2.333-3.885 0-1.764-1.196-2.814-2.069-3.582-.533-.469-.994-.873-.994-1.266 0-.4.337-.701.762-1.082.689-.615 1.339-1.492 1.339-3.15 0-1.457-.189-2.436-1.354-3.057.121-.062.551-.107.763-.137.631-.086 1.554-.184 1.554-.699V1.2H6.64c-.046.002-4.651.172-4.651 4.389zm7.424 9.013c.088 1.406-1.115 2.443-2.922 2.574-1.835.135-3.345-.691-3.433-2.096-.043-.676.254-1.336.835-1.863.589-.533 1.398-.863 2.278-.928.104-.006.207-.012.31-.012 1.699.001 2.849.999 2.932 2.325zM8.212 4.626c.451 1.588-.23 3.246-1.316 3.553a1.417 1.417 0 01-.384.052c-.994 0-1.979-1.006-2.345-2.393-.204-.776-.187-1.458.047-2.112.229-.645.643-1.078 1.163-1.225.125-.035.254-.053.385-.053 1.2 0 1.972.498 2.45 2.178zM16 8V5h-2v3h-3v2h3v3h2v-3h3V8h-3z"/>
                                    </svg>
                                    <svg class="bg-teal-500 ml-2 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill="#FFF" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm2.577 13.741a5.508 5.508 0 01-1.066.395 4.543 4.543 0 01-1.031.113c-.42 0-.791-.055-1.114-.162a2.373 2.373 0 01-.826-.459 1.651 1.651 0 01-.474-.633c-.088-.225-.132-.549-.132-.973V9.16H6.918V7.846c.359-.119.67-.289.927-.512.257-.221.464-.486.619-.797.156-.31.263-.707.322-1.185h1.307v2.35h2.18V9.16h-2.18v2.385c0 .539.028.885.085 1.037a.7.7 0 00.315.367c.204.123.437.185.697.185.466 0 .928-.154 1.388-.461v1.468h-.001z"/>
                                    </svg>
                                </div>
                                <div class="mt-4 text-center">
                                    <router-link to="/dashboard" class="inline-block px-4 py-2 rounded-lg shadow-md bg-teal-500 hover:bg-teal-400 focus:outline-none focus:shadow-outline text-white text-sm tracking-wider font-semibold">Sign in</router-link>
                                </div>
                                <div class="mt-1 text-center text-gray-500 text-xs">
                                    Don't have account? <a href="">Sign up</a>
                                </div>
                            </div>
                            <div class="bg-white m-2 rounded-lg shadow-lg p-6 h-auto justify-center">
                                <h4 class="mb-10 font-semibold text-center text-lg text-gray-800">Login to your account</h4>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Your email">
                                <input class="mt-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Your password">
                                <div class="mt-4 text-center text-gray-500 text-xs">
                                    Or sign in with:
                                </div>
                                <div class="mt-1 flex text-center items-center justify-center">
                                    <svg class="bg-teal-500 ml-2 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill="#FFF" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z"/>
                                    </svg>
                                    <svg class="bg-teal-500 ml-2 h-8 w-8"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill="#FFF" d="M1.989 5.589c0 1.494.499 2.572 1.482 3.205.806.52 1.74.598 2.226.598.118 0 .213-.006.279-.01 0 0-.154 1.004.59 1.996h-.034c-1.289 0-5.493.269-5.493 3.727 0 3.516 3.861 3.695 4.636 3.695.061 0 .097-.002.097-.002.008 0 .063.002.158.002.497 0 1.782-.062 2.975-.643 1.548-.75 2.333-2.059 2.333-3.885 0-1.764-1.196-2.814-2.069-3.582-.533-.469-.994-.873-.994-1.266 0-.4.337-.701.762-1.082.689-.615 1.339-1.492 1.339-3.15 0-1.457-.189-2.436-1.354-3.057.121-.062.551-.107.763-.137.631-.086 1.554-.184 1.554-.699V1.2H6.64c-.046.002-4.651.172-4.651 4.389zm7.424 9.013c.088 1.406-1.115 2.443-2.922 2.574-1.835.135-3.345-.691-3.433-2.096-.043-.676.254-1.336.835-1.863.589-.533 1.398-.863 2.278-.928.104-.006.207-.012.31-.012 1.699.001 2.849.999 2.932 2.325zM8.212 4.626c.451 1.588-.23 3.246-1.316 3.553a1.417 1.417 0 01-.384.052c-.994 0-1.979-1.006-2.345-2.393-.204-.776-.187-1.458.047-2.112.229-.645.643-1.078 1.163-1.225.125-.035.254-.053.385-.053 1.2 0 1.972.498 2.45 2.178zM16 8V5h-2v3h-3v2h3v3h2v-3h3V8h-3z"/>
                                    </svg>
                                    <svg class="bg-teal-500 ml-2 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill="#FFF" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm2.577 13.741a5.508 5.508 0 01-1.066.395 4.543 4.543 0 01-1.031.113c-.42 0-.791-.055-1.114-.162a2.373 2.373 0 01-.826-.459 1.651 1.651 0 01-.474-.633c-.088-.225-.132-.549-.132-.973V9.16H6.918V7.846c.359-.119.67-.289.927-.512.257-.221.464-.486.619-.797.156-.31.263-.707.322-1.185h1.307v2.35h2.18V9.16h-2.18v2.385c0 .539.028.885.085 1.037a.7.7 0 00.315.367c.204.123.437.185.697.185.466 0 .928-.154 1.388-.461v1.468h-.001z"/>
                                    </svg>
                                </div>
                                <div class="mt-4 text-center">
                                    <router-link to="/dashboard" class="inline-block px-4 py-2 rounded-lg shadow-md bg-teal-500 hover:bg-teal-400 focus:outline-none focus:shadow-outline text-white text-sm tracking-wider font-semibold">Sign in</router-link>
                                </div>
                                <div class="mt-1 text-center text-gray-500 text-xs">
                                    Don't have account? <a href="">Sign up</a>
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
    export default {
        name: "Dashboard",
        components: {
            MenuOne, TopBarOne, FooterOne
        }
    }
</script>

<style scoped>

</style>
