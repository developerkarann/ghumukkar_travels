import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-white shadow-lg mt-auto">
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Company</h3>
                        <p className="text-gray-500 mt-3">Ghumakkar Travels: Exploring destinations, creating memories, adventures made easy.</p>
                        <p className="text-gray-500 mt-2">© 2025 All rights reserved.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
                        <ul className="mt-3 space-y-2">
                            <li><a href="#" className="text-gray-500 hover:text-indigo-600 transition">Home</a></li>
                            <li><a href="/about " className="text-gray-500 hover:text-indigo-600 transition">About Us</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-indigo-600 transition">Blogs</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-indigo-600 transition">Hotels</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-indigo-600 transition">Favorites</a></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Stay Updated</h3>
                        <p className="text-gray-500 mt-3">Subscribe to our newsletter for exclusive deals and updates.</p>
                        <div className="mt-4 flex">
                            <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-gray-300  rounded-l-lg focus:outline-none "/>
                                <button className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white px-4 py-3 rounded-r-lg transition">
                                    Subscribe
                                </button>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-200 mt-8 py-4 text-center text-gray-500 text-sm">
                    Made with ❤️ by Karan Pal </div>
            </footer>
        </>
    )
}

export default Footer