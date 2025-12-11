'use client'
import React, { useState } from 'react';
import { Monitor, ChevronLeft, CheckCircle, Mail } from 'lucide-react';

type ResetStep = 'email' | 'verification' | 'newPassword' | 'success';

interface ResetFormData {
  email: string;
  code: string;
  newPassword: string;
  confirmPassword: string;
}

export default function ResetPassword() {
  const [step, setStep] = useState<ResetStep>('email');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<ResetFormData>({
    email: '',
    code: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSendCode = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!formData.email) {
      alert('Please enter your email');
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('verification');
    }, 1500);
  };

  const handleVerifyCode = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!formData.code) {
      alert('Please enter the verification code');
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('newPassword');
    }, 1500);
  };

  const handleResetPassword = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!formData.newPassword || !formData.confirmPassword) {
      alert('Please fill in all fields');
      return;
    }
    
    if (formData.newPassword !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (formData.newPassword.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('success');
    }, 1500);
  };

  const handleBackToLogin = () => {
    window.location.href = '/login';
  };

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Reset Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <button 
            onClick={handleBackToHome}
            className="flex items-center space-x-2 mb-12 hover:opacity-80 transition"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">SignageHub</span>
          </button>

          {/* Back Button */}
          {step !== 'success' && (
            <button 
              onClick={handleBackToLogin}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to sign in</span>
            </button>
          )}

          {/* Step 1: Email */}
          {step === 'email' && (
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset your password</h1>
                <p className="text-gray-600">Enter your email address and we'll send you a verification code</p>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your email"
                  />
                </div>

                <button
                  onClick={handleSendCode}
                  disabled={isLoading}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    'Send verification code'
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Verification Code */}
          {step === 'verification' && (
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify your email</h1>
                <p className="text-gray-600">We sent a code to <span className="font-medium text-gray-900">{formData.email}</span></p>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Verification code
                  </label>
                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-center text-lg tracking-widest"
                    placeholder="000000"
                    maxLength={6}
                  />
                </div>

                <button
                  onClick={handleVerifyCode}
                  disabled={isLoading}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Verifying...
                    </>
                  ) : (
                    'Verify code'
                  )}
                </button>

                <p className="text-center text-sm text-gray-600">
                  Didn't receive the code?{' '}
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Resend
                  </button>
                </p>
              </div>
            </div>
          )}

          {/* Step 3: New Password */}
          {step === 'newPassword' && (
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Create new password</h1>
                <p className="text-gray-600">Enter a strong password to secure your account</p>
              </div>

              <div className="space-y-5">
                {/* New Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition pr-12"
                      placeholder="Enter new password"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      type="button"
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">At least 8 characters long</p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition pr-12"
                      placeholder="Confirm password"
                    />
                    <button
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      type="button"
                    >
                      {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleResetPassword}
                  disabled={isLoading}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Resetting...
                    </>
                  ) : (
                    'Reset password'
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {step === 'success' && (
            <div className="text-center">
              <div className="mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Password reset successful</h1>
                <p className="text-gray-600">Your password has been updated. You can now sign in with your new password.</p>
              </div>

              <button
                onClick={handleBackToLogin}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Back to sign in
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right Side - Image/Gradient */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 p-12 items-center justify-center relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-lg">
          <h2 className="text-4xl font-bold text-white mb-6">
            Security You Can Trust
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            SignageHub uses enterprise-grade encryption to keep your account and data secure at all times.
          </p>
          
          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <span>Two-factor authentication</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <span>Bank-level encryption</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <span>Regular security audits</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <span>GDPR & SOC 2 compliant</span>
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                🔒
              </div>
              <div>
                <div className="text-white font-medium text-sm">Your security matters</div>
                <div className="text-blue-200 text-xs">We protect your data with industry-leading standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}