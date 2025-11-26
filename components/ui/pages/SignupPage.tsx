'use client'
import React, { useState } from 'react';
import { Monitor, Mail, Lock, Eye, EyeOff,  CheckCircle, } from 'lucide-react';

interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  companyName: string;
  agreeToTerms: boolean;
}

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    companyName: '',
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSignup = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.password || !formData.companyName) {
      alert('Please fill in all fields');
      return;
    }

    if (!formData.agreeToTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy');
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Account created successfully! (Demo)');
    }, 1500);
  };

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const passwordStrength = () => {
    const password = formData.password;
    if (!password) return { strength: 0, label: '', color: '' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) return { strength: 33, label: 'Weak', color: 'bg-red-500' };
    if (strength <= 3) return { strength: 66, label: 'Medium', color: 'bg-yellow-500' };
    return { strength: 100, label: 'Strong', color: 'bg-green-500' };
  };

  const pwdStrength = passwordStrength();

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Signup Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <button 
            onClick={handleBackToHome}
            className="flex items-center space-x-2 mb-8 hover:opacity-80 transition"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">SignageHub</span>
          </button>

          {/* Form Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h1>
            <p className="text-gray-600">Start your 14-day free trial. No credit card required.</p>
          </div>

          {/* Signup Form */}
          <div className="space-y-5">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="you@company.com"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Your Company Inc."
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition pr-12"
                  placeholder="Create a strong password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  type="button"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${pwdStrength.color} transition-all duration-300`}
                        style={{ width: `${pwdStrength.strength}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium text-gray-600">{pwdStrength.label}</span>
                  </div>
                  <p className="text-xs text-gray-500">Use 8+ characters with a mix of letters, numbers & symbols</p>
                </div>
              )}
            </div>

            {/* Terms Checkbox */}
            <div>
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 flex-shrink-0"
                />
                <span className="ml-2 text-sm text-gray-700">
                  I agree to the{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Privacy Policy</a>
                </span>
              </label>
            </div>

            {/* Signup Button */}
            <button
              onClick={handleSignup}
              disabled={isLoading}
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating account...
                </>
              ) : (
                'Create account'
              )}
            </button>

            {/* Sign In Link */}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button 
                onClick={() => window.location.href = '/login'}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Benefits */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 p-12 items-center justify-center relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-lg">
          <h2 className="text-4xl font-bold text-white mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Join 10,000+ businesses already transforming their digital signage experience with SignageHub.
          </p>
          
          {/* Benefits */}
          <div className="space-y-4 mb-12">
            <div className="flex items-start gap-4 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold mb-1">14-day free trial</div>
                <div className="text-blue-100 text-sm">Full access to all features. No credit card required.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold mb-1">Unlimited displays</div>
                <div className="text-blue-100 text-sm">Scale as you grow without worrying about limits.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold mb-1">24/7 support</div>
                <div className="text-blue-100 text-sm">Our expert team is always here to help you succeed.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold mb-1">Enterprise security</div>
                <div className="text-blue-100 text-sm">Bank-level encryption and GDPR compliance.</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div>
              <div className="text-3xl font-bold text-white">10K+</div>
              <div className="text-blue-200 text-sm">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-blue-200 text-sm">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">50M+</div>
              <div className="text-blue-200 text-sm">Displays</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}