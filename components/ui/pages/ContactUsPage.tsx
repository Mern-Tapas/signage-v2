'use client'
import React, { useState } from 'react';
import { Monitor, Mail, Phone, MapPin, Send, CheckCircle, Check, X, ArrowRight, Clock, MessageSquare, User } from 'lucide-react';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export default function ContactUsPage() {
    const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
    const [contactData, setContactData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setContactData({
            ...contactData,
            [e.target.name]: e.target.value
        });
    };

    const handleContactSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // Basic validation
        if (!contactData.name || !contactData.email || !contactData.subject || !contactData.message) {
            alert('Please fill in all required fields');
            return;
        }

        setContactSubmitted(true);
    };

    const handleBackToHome = () => {
        window.location.href = '/';
    };

    return (
        <>

            {!contactSubmitted ? (
                <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                                💬 Get in Touch
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                                We'd Love to Hear From You
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Have questions? Our team is here to help. Reach out and we'll respond as soon as possible.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            {/* Contact Info Cards */}
                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                                    <Mail className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                                <p className="text-gray-600 mb-4">Our team is here to help</p>
                                <a href="mailto:hello@signagehub.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                                    hello@signagehub.com
                                </a>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                                    <Phone className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                                <p className="text-gray-600 mb-4">Mon-Fri from 8am to 6pm</p>
                                <a href="tel:+1-555-123-4567" className="text-blue-600 hover:text-blue-700 font-semibold">
                                    +1 (555) 123-4567
                                </a>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                                    <MapPin className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                                <p className="text-gray-600 mb-4">Come say hello</p>
                                <p className="text-gray-700 font-medium">
                                    100 Smith Street<br />
                                    Melbourne VIC 3000<br />
                                    Australia
                                </p>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            {/* Contact Form */}
                            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={contactData.name}
                                                onChange={handleContactChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={contactData.email}
                                                onChange={handleContactChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={contactData.phone}
                                                onChange={handleContactChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            name="subject"
                                            required
                                            value={contactData.subject}
                                            onChange={handleContactChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="sales">Sales Question</option>
                                            <option value="support">Technical Support</option>
                                            <option value="partnership">Partnership Opportunity</option>
                                            <option value="feedback">Product Feedback</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                            <textarea
                                                name="message"
                                                required
                                                value={contactData.message}
                                                onChange={handleContactChange}
                                                rows={5}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                                                placeholder="Tell us how we can help you..."
                                            />
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleContactSubmit}
                                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </button>

                                    <p className="text-sm text-gray-500 text-center">
                                        We typically respond within 24 hours
                                    </p>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="space-y-8">
                                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                                    <h3 className="text-2xl font-bold mb-4">Looking for Support?</h3>
                                    <p className="text-blue-100 mb-6">
                                        Our support team is available to help with any technical issues or questions about your account.
                                    </p>
                                    <button className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition">
                                        Visit Help Center
                                    </button>
                                </div>

                                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Clock className="w-6 h-6 text-blue-600" />
                                        <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
                                    </div>
                                    <div className="space-y-3 text-gray-700">
                                        <div className="flex justify-between">
                                            <span className="font-medium">Monday - Friday:</span>
                                            <span>8:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-medium">Saturday:</span>
                                            <span>9:00 AM - 5:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-medium">Sunday:</span>
                                            <span>Closed</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-4">
                                        *All times in AEST (Australian Eastern Standard Time)
                                    </p>
                                </div>

                                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                                    <div className="space-y-3">
                                        <a href="/schedule-demo" className="block text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition">
                                            <ArrowRight className="w-4 h-4" />
                                            Schedule a Demo
                                        </a>
                                        <a href="/#pricing" className="block text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition">
                                            <ArrowRight className="w-4 h-4" />
                                            View Pricing Plans
                                        </a>
                                        <a href="/docs" className="block text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition">
                                            <ArrowRight className="w-4 h-4" />
                                            Read Documentation
                                        </a>
                                        <a href="/testimonials" className="block text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition">
                                            <ArrowRight className="w-4 h-4" />
                                            Customer Stories
                                        </a>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Prefer Live Chat?</h3>
                                    <p className="text-gray-700 mb-4">
                                        Connect with our team instantly through our live chat support available during business hours.
                                    </p>
                                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition">
                                        Start Live Chat
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="min-h-screen flex items-center justify-center px-4 pt-16">
                    <div className="max-w-2xl w-full">
                        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-gray-200">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Message Sent Successfully!
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Thank you for reaching out, {contactData.name}! We've received your message and will get back to you shortly.
                            </p>
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 text-left">
                                <h3 className="font-semibold text-gray-900 mb-4">What's next?</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        You'll receive a confirmation email at {contactData.email}
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        Our team will review your inquiry
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        We typically respond within 24 hours
                                    </li>
                                </ul>
                            </div>
                            <button
                                onClick={handleBackToHome}
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105"
                            >
                                Back to Home
                            </button>
                        </div>
                    </div>
                </div>

            )}
        </>

    );
}