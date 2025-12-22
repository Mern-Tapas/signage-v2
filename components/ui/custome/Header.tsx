'use client'
import { Menu, Monitor, X } from 'lucide-react'
import Link from 'next/link';
import React, { useState } from 'react'

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-60 shadow-sm ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-18">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <Monitor className="w-6 h-6 text-white" />
                        </div>
                        <Link href={'/'}>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                SignageHub
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</Link>
                        <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
                        <Link href="/user/dashboard" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition transform hover:scale-105">
                            Sign In
                        </Link>
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 py-4 space-y-3">
                        <a href="#features" className="block text-gray-700 hover:text-blue-600 transition">Features</a>
                        <a href="#pricing" className="block text-gray-700 hover:text-blue-600 transition">Pricing</a>
                        <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 transition">Testimonials</a>
                        <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
                            Sign In
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Header