'use client'
import React, { useState } from 'react';
import { Monitor, Calendar, Clock, User, Mail, Phone, Building2, MessageSquare, CheckCircle, Check, Users, Zap,} from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  companySize: string;
  date: string;
  time: string;
  message: string;
}

export default function ScheduleDemoPage() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    date: '',
    time: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.phone || !formData.company || !formData.companySize || 
        !formData.date || !formData.time) {
      alert('Please fill in all required fields');
      return;
    }
    
    setFormSubmitted(true);
  };

  const handleBackToHome = () => {
    window.location.href = '/'; // Navigate back to home
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
   
      {!formSubmitted ? (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Info */}
              <div className="lg:sticky lg:top-24">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                    📅 Schedule Your Demo
                  </span>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    See SignageHub in Action
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Book a personalized demo with our team and discover how SignageHub can transform your digital display network.
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">30-Minute Session</h3>
                      <p className="text-gray-600">Get a comprehensive walkthrough of all features tailored to your needs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Expert Guidance</h3>
                      <p className="text-gray-600">Our product specialists will answer all your questions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Custom Solutions</h3>
                      <p className="text-gray-600">Learn how we can customize SignageHub for your business</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">What You&#39;ll Learn:</h3>
                  <ul className="space-y-3">
                    {[
                      'Multi-screen content management',
                      'Real-time updates and scheduling',
                      'Analytics and reporting features',
                      'Integration capabilities',
                      'Security and compliance'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-700">
                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Demo</h2>
                
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                          placeholder="John"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Size *
                    </label>
                    <select
                      name="companySize"
                      required
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                        >
                          <option value="">Select time</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="13:00">01:00 PM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="15:00">03:00 PM</option>
                          <option value="16:00">04:00 PM</option>
                          <option value="17:00">05:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                        placeholder="Tell us about your display network needs..."
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition transform hover:scale-105"
                  >
                    Schedule Demo
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our Privacy Policy
                  </p>
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
                Demo Scheduled Successfully!
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Thank you, {formData.firstName}! We&#39;ve received your demo request for {formData.date} at {formData.time}.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 text-left">
                <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    You&#39;ll receive a confirmation email with calendar invite
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    Our team will review your requirements beforehand
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    We&#39;ll send you a personalized demo link 15 minutes before
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

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">SignageHub</span>
          </div>
          <p className="text-sm">© 2025 SignageHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}