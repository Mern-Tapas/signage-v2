'use client'
import React, { useState } from 'react';
import { Check, X, Zap, Shield, Cloud, Users, BarChart3, Headphones,  Sparkles } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const pricingPlans: PricingPlan[] = [
    {
      name: "Starter",
      price: billingCycle === 'monthly' ? "49" : "470",
      period: billingCycle === 'monthly' ? "month" : "year",
      description: "Perfect for small businesses",
      cta: "Start Free Trial",
      features: [
        "Up to 5 displays",
        "Basic analytics",
        "Cloud storage (10GB)",
        "Email support",
        "Template library",
        "Standard content scheduling",
        "Mobile app access"
      ]
    },
    {
      name: "Professional",
      price: billingCycle === 'monthly' ? "149" : "1,430",
      period: billingCycle === 'monthly' ? "month" : "year",
      description: "Ideal for growing companies",
      cta: "Start Free Trial",
      popular: true,
      features: [
        "Up to 25 displays",
        "Advanced analytics & reporting",
        "Cloud storage (100GB)",
        "Priority email & chat support",
        "Custom branding",
        "API access",
        "Multi-user accounts",
        "Advanced scheduling",
        "Screen grouping",
        "Custom widgets"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      cta: "Contact Sales",
      features: [
        "Unlimited displays",
        "Custom analytics & dashboards",
        "Unlimited cloud storage",
        "24/7 dedicated support",
        "White-label solution",
        "Advanced API & webhooks",
        "Custom integrations",
        "SLA guarantee (99.9% uptime)",
        "Dedicated account manager",
        "On-premise deployment option",
        "Custom training sessions",
        "Priority feature requests"
      ]
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-Time Updates",
      description: "Push content instantly to all connected displays"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud-Based",
      description: "Access your content from anywhere, anytime"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Track performance with detailed insights"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Manage permissions and workflows"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Expert Support",
      description: "Get help when you need it most"
    }
  ];

  const faqs = [
    {
      question: "Can I switch plans at any time?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a 14-day free trial for all plans (except Enterprise). No credit card required to start."
    },
    {
      question: "What happens if I exceed my display limit?",
      answer: "You'll receive a notification when approaching your limit. You can easily upgrade your plan or purchase additional display slots."
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes! Save up to 20% when you choose annual billing. The discount is automatically applied."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-level encryption, regular security audits, and are compliant with GDPR, SOC 2, and ISO 27001."
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
     

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            💎 Simple, Transparent Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Choose the Perfect Plan for Your Business
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Start with a free trial. No credit card required. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')}
              className={`relative w-14 h-8 rounded-full transition ${billingCycle === 'annually' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-300'}`}
            >
              <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${billingCycle === 'annually' ? 'translate-x-6' : ''}`} />
            </button>
            <span className={`text-lg font-medium ${billingCycle === 'annually' ? 'text-gray-900' : 'text-gray-500'}`}>
              Annually
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              Save 20%
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`rounded-3xl transition relative ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105 border-4 border-white' 
                    : 'bg-white shadow-lg hover:shadow-xl border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-bold shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">
                      {plan.price === "Custom" ? plan.price : `$${plan.price}`}
                    </span>
                    {plan.period && (
                      <span className={`text-lg ml-2 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                        /{plan.period}
                      </span>
                    )}
                    {billingCycle === 'annually' && plan.price !== "Custom" && (
                      <p className={`text-sm mt-2 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                        ${Math.round(parseFloat(plan.price.replace(',', '')) / 12)}/month billed annually
                      </p>
                    )}
                  </div>
                  <button className={`w-full py-3 rounded-xl font-semibold transition mb-8 ${
                    plan.popular 
                      ? 'bg-white text-blue-600 hover:shadow-lg transform hover:scale-105' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
                  }`}>
                    {plan.cta}
                  </button>
                  <div className={`pt-6 border-t ${plan.popular ? 'border-blue-400/30' : 'border-gray-200'}`}>
                    <p className={`text-sm font-semibold mb-4 ${plan.popular ? 'text-blue-100' : 'text-gray-700'}`}>
                      What&#39;s included:
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white' : 'text-blue-600'}`} />
                          <span className={`text-sm ${plan.popular ? 'text-blue-50' : 'text-gray-700'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need, All Plans Include
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features to manage your digital signage network effectively
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Compare Plans in Detail
            </h2>
            <p className="text-lg text-gray-600">
              See what&#39;s included in each plan
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-gray-900 font-bold">Feature</th>
                    <th className="px-6 py-4 text-center text-gray-900 font-bold">Starter</th>
                    <th className="px-6 py-4 text-center text-gray-900 font-bold">Professional</th>
                    <th className="px-6 py-4 text-center text-gray-900 font-bold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-gray-700">Number of Displays</td>
                    <td className="px-6 py-4 text-center text-gray-700">Up to 5</td>
                    <td className="px-6 py-4 text-center text-gray-700">Up to 25</td>
                    <td className="px-6 py-4 text-center text-gray-700">Unlimited</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Cloud Storage</td>
                    <td className="px-6 py-4 text-center text-gray-700">10GB</td>
                    <td className="px-6 py-4 text-center text-gray-700">100GB</td>
                    <td className="px-6 py-4 text-center text-gray-700">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">API Access</td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Custom Branding</td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">White Label</td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-gray-400 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-blue-600 mx-auto" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Support</td>
                    <td className="px-6 py-4 text-center text-gray-700">Email</td>
                    <td className="px-6 py-4 text-center text-gray-700">Priority</td>
                    <td className="px-6 py-4 text-center text-gray-700">24/7 Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <div className={`transform transition ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-transparent text-white rounded-full font-semibold border-2 border-white hover:bg-white/10 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      </>
  );
}