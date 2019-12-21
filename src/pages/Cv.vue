<template>
    <Layout>
        <div class="flex">
            <div class="w-1/5 bg-blue-500 h-screen fixed  text-center">
                <g-link to="/" class="px-4 py-2 inline-block mt-2  border-2 border-blue-400 rounded-full text-blue-200">Go Back</g-link>
                <div class="mt-12 flex flex-col">
                    <div class="avatar w-48 h-48 rounded-full p-2 bg-blue-400 mx-auto">
                        <img src="./../../static/images/diwas-dark.jpg" class="rounded-full w-full h-full" alt="">
                    </div>
                    <ul class="mt-8">
                        <li class="text-center mb-4"><a href="" class="text-xl uppercase font-bold font-sans text-blue-100 ">About</a></li>
                        <li class="text-center mb-4"><a href="" class="text-xl uppercase font-bold font-sans text-blue-100 ">Experience</a></li>
                        <li class="text-center mb-4"><a href="" class="text-xl uppercase font-bold font-sans text-blue-100 ">Education</a></li>
                        <li class="text-center mb-4"><a href="" class="text-xl uppercase font-bold font-sans text-blue-100 ">Skills</a></li>
                        <li class="text-center mb-4"><a href="" class="text-xl uppercase font-bold font-sans text-blue-100 ">Intrests</a></li>

                    </ul>
                </div>
            </div>
            <div class="w-full bg-yellow-100 font-sans pr-24" style="padding-left:24%">
                <!-- About section starts here -->
            <div class="about h-screen">
                <div class="mt-24">
                    <h1 class="text-6xl leading-snug font-bold uppercase text-blue-500"><span class="text-black">Diwas </span> KHATRI</h1>
                    <p class="leading-tight uppercase text-gray-600">New Baneshowr, Kathmandu · <span>(977) 98-15090768</span> · <span class="text-blue-500 font-semibold ">diwaskc12@gmail.com</span></p>
                </div>

                <div class="mt-12">
                    I am experienced in Vue.js and React.js in which I produce high quality code for my clients that are both well performing and well tested. I focus on solving problems, not only technical problems but creating an awesome experience for the users of my software both visual and accessible. Mixing powerful tools and knowledge about the users brings visual UI's to life and leads to webpages being accessible and useful.
                </div>

                <div class="social flex mt-16">
                    <a href="" class="p-3 bg-gray-600 rounded-full">
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-facebook fa-w-16 w-12 h-12 fill-current text-white" data-v-66c09e0a="">
                        <path fill="" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" data-v-66c09e0a="" class=""></path></svg>
                    </a>
                    <a href="" class="p-3 bg-gray-600 rounded-full ml-4">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg-inline--fa fa-github fa-w-16 w-12 h-12 fill-current text-white" data-v-66c09e0a="">
                      <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" data-v-66c09e0a="" class=""></path></svg>
                    </a>
                    <a href="" class="p-3 bg-gray-600 rounded-full ml-4">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-linkedin fa-w-14 w-12 h-12 fill-current text-white" data-v-66c09e0a="">
                    <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" data-v-66c09e0a="" class=""></path></svg>                    </a>
                </div>

            </div>
            <!-- About section ends here -->

            <!-- Experience section starts here -->
            <div class="experience h-screen font-sans">
                <h1 class="text-5xl uppercase font-bold text-black">Experience</h1>
                                <div class="mt-12">
                                    It was real hard for me to break out in IT field even
 though i was pursuing my CS degree. The College education didn't weigh much in the market, so i learned basics of web development on my own.
 Then in <strong>2017</strong>, i joined a company named <strong>NBG IT Solution</strong>, where i did laravel and wordpress theme development. After working there for about <strong>10 months </strong>
 i joined another start up IT company called <strong>E Works Nepal</strong> as a laravel developer. It remained as a short stay<strong>(2 months)</strong> as i had to attend my semester examinations.
 Then after finishing my seventh semester examination in 2019, i joined <strong>Native Solutions</strong> where i'm still working as a Laravel developer.
                 </div>

                </div>
            <!-- Experience section ends here -->


            <!-- Education section starts here -->
            <div class="education h-screen font-sans">
                <h1 class="text-5xl uppercase font-bold text-black">Education</h1>
                <div class="mt-12">
                    I've completed my bachelor degrees in computer science and information technology <Strong>(BSC. CSIT)</Strong> from Tribuhwan University. I completed my higher education from <strong>Shikshadeep College</strong>, Biratnagar.I gave my SLC from <strong> Mount Everest English secondary boarding school </strong> from my hometown Gauradaha, Jhapa.
                </div>
            </div>

            <!-- Skills section starts here -->
            <div class="skills h-screen font-sans">
                <h1 class="text-5xl uppercase font-bold text-black">Skills</h1>
                <div class="mt-12 flex flex-wrap">
                    <span class="mr-8 rounded py-2 px-6 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mb-8 inline-block">PHP</span>
                    <span class="mr-8 rounded py-2 px-6 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mb-8">Javascript</span>
                    <span class="mr-8 rounded py-2 px-6 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mb-8">Laravel</span>
                    <span class="mr-8 rounded py-2 px-6 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mb-8">Vue JS</span>
                    <span class="mr-8 rounded py-2 px-6 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mb-8">HTML</span>
                    <span class="mr-8 rounded py-2 px-6 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mb-8">CSS</span>
                    <span class="mr-8 rounded py-2 px-6 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mb-8">SASS</span>
                    <span class="mr-8 rounded py-2 px-6 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mb-8">MySql</span>
                    <span class="mr-8 rounded py-2 px-6 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mb-8">Python</span>
                    <span class="mr-8 rounded py-2 px-6 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mb-8">Scrapy</span>
                    <span class="mr-8 rounded py-2 px-6 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mb-8">Slim</span>
                    <span class="mr-8 rounded py-2 px-6 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mb-8">Nuxt JS</span>
                    <span class="mr-8 rounded py-2 px-6 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mb-8">Firebase</span>
                    <span class="mr-8 rounded py-2 px-6 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mb-8">GraphQL</span>
                    <span class="mr-8 rounded py-2 px-6 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white mb-8">JAVA</span>

                </div>

            </div>
            </div>
        </div>
    </Layout>
</template>