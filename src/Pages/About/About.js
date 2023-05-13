import React from 'react';
const img1 = 'https://glampcity-app.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffree.02c67620.png&w=64&q=75'
const img2 = 'https://glampcity-app.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcash.e54c14f0.png&w=64&q=75'
const img3 = 'https://glampcity-app.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct.00d341b4.png&w=48&q=75'
const img4 = 'https://glampcity-app.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupport.0936ad81.png&w=64&q=75'

const items = [
    { id: '1', img: img1, title: 'Free Delivery', description: 'Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.' },
    { id: '1', img: img2, title: '100% Cash Back', description: 'Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.' },
    { id: '1', img: img3, title: 'Quality Product', description: 'Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.' },
    { id: '1', img: img4, title: '24/7 Support', description: 'Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.' },
]

const About = () => {
    return (
        <div className='bg-white pt-12'>
            <h1 className='text-center font-bold text-5xl mb-6'>Core Features</h1>
            <div className='max-w-[1240px] mx-auto cursor-pointer grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 px-4'>
                {
                    items.map(item => <div
                        className='flex flex-col justify-center items-center gap-4 w-full h-60 border shadow-md shadow-blue-300 p-3'>
                        <img className='w-14' src={item.img} alt="" />
                        <h1 className='text-center text-black font-bold text-xl'>{item.title}</h1>
                        <p className='text-gray-500 font-normal text-center'>{item.description}</p>
                    </div>
                    )
                }
            </div>


            <section className="bg-white text-gray-900 mt-8">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Ex orci laoreet egestas sapien magna egestas scelerisque?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                        </details>
                    </div>
                </div>
            </section>


            <section className="bg-white text-gray-900">
                <div className="container flex flex-col items-center p-4 mx-auto">
                    <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl">Help Center</h1>
                    <div className="relative mt-6 mb-12">
                        <span className="absolute inset-y-0 flex items-center pl-2 mx-auto">
                            <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-100">
                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                </svg>
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search..." className="w-full py-3 pl-12 text-sm rounded-full sm:w-96 focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900" />
                    </div>
                    <div className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <div className="flex flex-col w-full divide-y divide-gray-700">
                            <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Billing</a>
                            <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Support</a>
                            <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Account</a>
                        </div>
                        <div className="flex flex-col w-full divide-y divide-gray-700">
                            <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Features</a>
                            <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Contact us</a>
                            <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">My orders</a>
                        </div>
                        <div className="hidden w-full divide-y sm:flex-col sm:flex divide-gray-700">
                            <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Enterprise</a>
                            <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Privacy</a>
                            <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Developers</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;