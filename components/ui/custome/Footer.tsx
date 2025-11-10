import { Monitor } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <div className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <Monitor className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">SignageHub</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Empowering businesses with intelligent digital signage solutions since 2020.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition">Features</a></li>
                            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                            <li><a href="#" className="hover:text-white transition">API</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition">Security</a></li>
                            <li><a href="#" className="hover:text-white transition">Compliance</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-sm">
                    <p>© 2025 SignageHub. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer