'use client'

import React, { useState } from 'react'
import {
  Check,
  X,
  ChevronDown,
  Zap,
  Crown,
  Shield,
  ArrowRight,
  BarChart3,
  Users,
  Smartphone,
  Briefcase,
} from 'lucide-react'

interface PlanFeature {
  name: string
  included: boolean
  tooltip?: string
}

interface PricingPlan {
  id: string
  name: string
  description: string
  price: number
  billingPeriod: 'month' | 'year'
  currency: string
  icon: React.ReactNode
  highlighted: boolean
  ctaText: string
  features: PlanFeature[]
  metadata: {
    devices: number
    users: number
    storage: string
    support: string
  }
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for getting started',
    price: 29,
    billingPeriod: 'month',
    currency: '$',
    icon: <Zap size={24} />,
    highlighted: false,
    ctaText: 'Start Free Trial',
    metadata: {
      devices: 5,
      users: 1,
      storage: '10 GB',
      support: 'Email',
    },
    features: [
      { name: 'Up to 5 digital displays', included: true },
      { name: '1 user account', included: true },
      { name: '10 GB cloud storage', included: true },
      { name: 'Basic analytics', included: true },
      { name: 'Community support', included: true },
      { name: 'Custom branding', included: false },
      { name: 'Advanced scheduling', included: false },
      { name: 'API access', included: false },
      { name: 'Priority support', included: false },
      { name: 'Custom integrations', included: false },
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing teams',
    price: 99,
    billingPeriod: 'month',
    currency: '$',
    icon: <Briefcase size={24} />,
    highlighted: true,
    ctaText: 'Get Started',
    metadata: {
      devices: 50,
      users: 5,
      storage: '500 GB',
      support: 'Priority',
    },
    features: [
      { name: 'Up to 50 digital displays', included: true },
      { name: '5 user accounts', included: true },
      { name: '500 GB cloud storage', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Priority email support', included: true },
      { name: 'Custom branding', included: true },
      { name: 'Advanced scheduling', included: true },
      { name: 'API access', included: false },
      { name: '24/7 phone support', included: false },
      { name: 'Custom integrations', included: false },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large-scale operations',
    price: 299,
    billingPeriod: 'month',
    currency: '$',
    icon: <Crown size={24} />,
    highlighted: false,
    ctaText: 'Contact Sales',
    metadata: {
      devices: 500,
      users: 50,
      storage: 'Unlimited',
      support: '24/7 Dedicated',
    },
    features: [
      { name: 'Up to 500+ digital displays', included: true },
      { name: 'Unlimited user accounts', included: true },
      { name: 'Unlimited cloud storage', included: true },
      { name: 'Custom analytics & reporting', included: true },
      { name: '24/7 dedicated support', included: true },
      { name: 'Custom branding & white-label', included: true },
      { name: 'Advanced scheduling & automation', included: true },
      { name: 'Full API access', included: true },
      { name: 'Dedicated account manager', included: true },
      { name: 'Custom integrations', included: true },
    ],
  },
]

const COMPARISON_FEATURES = [
  { category: 'Core Features', items: ['Digital Displays', 'User Accounts', 'Storage', 'Basic Analytics'] },
  { category: 'Support & Integrations', items: ['Support Level', 'Custom Branding', 'API Access', 'Integrations'] },
  { category: 'Advanced Features', items: ['Advanced Scheduling', 'Custom Reporting', 'White-Label', 'Dedicated Manager'] },
]

export const Plan: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')
  const [expandedFeatures, setExpandedFeatures] = useState<string | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const getAdjustedPrice = (basePrice: number): number => {
    if (billingCycle === 'yearly') {
      return Math.floor(basePrice * 12 * 0.85) // 15% discount for yearly
    }
    return basePrice
  }

  const getSavings = (basePrice: number): number => {
    return Math.floor(basePrice * 12 - getAdjustedPrice(basePrice))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-0 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your digital signage needs. Scale up as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="inline-flex rounded-full border-2 border-slate-200 bg-white p-1.5">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Yearly
              </button>
            </div>
            {billingCycle === 'yearly' && (
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                Save 15% annually
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl transition-all duration-300 hover:shadow-2xl ${
                  plan.highlighted
                    ? 'ring-2 ring-gradient-to-r from-blue-500 to-indigo-600 scale-105 md:scale-100 md:ring-offset-8'
                    : 'ring-1 ring-slate-200'
                } ${
                  selectedPlan === plan.id ? 'shadow-2xl' : ''
                } overflow-hidden group`}
                onMouseEnter={() => setSelectedPlan(plan.id)}
                onMouseLeave={() => setSelectedPlan(null)}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 ${
                    plan.highlighted
                      ? 'bg-gradient-to-br from-blue-50 to-indigo-50'
                      : 'bg-white'
                  }`}
                ></div>

                {/* Badge */}
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1 rounded-bl-2xl text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="relative p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-6">
                    <div className={`inline-flex p-3 rounded-xl mb-4 ${
                      plan.highlighted
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-slate-600 text-sm">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-slate-900">
                        {plan.currency}{getAdjustedPrice(plan.price)}
                      </span>
                      <span className="text-slate-600 font-medium">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && getSavings(plan.price) > 0 && (
                      <p className="text-sm text-green-600 mt-2 font-medium">
                        Save ${getSavings(plan.price)} per year
                      </p>
                    )}
                  </div>

                  {/* Metadata Cards */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    <MetadataCard
                      icon={<Smartphone size={18} />}
                      label="Devices"
                      value={plan.metadata.devices}
                    />
                    <MetadataCard
                      icon={<Users size={18} />}
                      label="Users"
                      value={plan.metadata.users}
                    />
                    <MetadataCard
                      icon={<BarChart3 size={18} />}
                      label="Storage"
                      value={plan.metadata.storage}
                    />
                    <MetadataCard
                      icon={<Shield size={18} />}
                      label="Support"
                      value={plan.metadata.support}
                    />
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all mb-8 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-lg hover:scale-105'
                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    {plan.ctaText}
                    <ArrowRight size={18} />
                  </button>

                  {/* Features List */}
                  <div className="space-y-3 flex-1">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                      Features Included
                    </p>
                    {plan.features.slice(0, 5).map((feature, idx) => (
                      <FeatureItem
                        key={idx}
                        name={feature.name}
                        included={feature.included}
                      />
                    ))}
                    {plan.features.length > 5 && (
                      <button
                        onClick={() =>
                          setExpandedFeatures(
                            expandedFeatures === plan.id ? null : plan.id
                          )
                        }
                        className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-2 pt-2"
                      >
                        {expandedFeatures === plan.id ? 'Show Less' : 'Show More'}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            expandedFeatures === plan.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}

                    {/* Expanded Features */}
                    {expandedFeatures === plan.id && (
                      <div className="space-y-3 border-t border-slate-200 pt-4 mt-4 animate-in fade-in slide-in-from-top-2">
                        {plan.features.slice(5).map((feature, idx) => (
                          <FeatureItem
                            key={idx + 5}
                            name={feature.name}
                            included={feature.included}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Detailed Feature Comparison
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See exactly what&apos;s included in each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-6 px-6 font-semibold text-slate-900 w-1/3">
                    Feature
                  </th>
                  {PRICING_PLANS.map((plan) => (
                    <th
                      key={plan.id}
                      className={`text-center py-6 px-6 font-semibold ${
                        plan.highlighted ? 'text-slate-900' : 'text-slate-600'
                      }`}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PRICING_PLANS[0].features.map((_, featureIdx) => {
                  const featureName = PRICING_PLANS[0].features[featureIdx].name
                  return (
                    <tr
                      key={featureIdx}
                      className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-6 px-6 text-slate-900 font-medium">
                        {featureName}
                      </td>
                      {PRICING_PLANS.map((plan) => (
                        <td key={plan.id} className="text-center py-6 px-6">
                          {plan.features[featureIdx]?.included ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Find answers to common questions about our pricing and plans
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Can I change my plan anytime?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, wire transfers, and purchase orders for enterprise plans.',
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes! All plans come with a 14-day free trial. No credit card required to get started.',
              },
              {
                q: 'What if I need more devices than my plan allows?',
                a: 'You can easily add additional devices on-demand. Contact our sales team for custom arrangements.',
              },
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl mx-4 mb-20">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses using our platform to manage their digital signage
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform">
            Start Your Free Trial Today
          </button>
        </div>
      </section>
    </div>
  )
}

// Component: Metadata Card
interface MetadataCardProps {
  icon: React.ReactNode
  label: string
  value: string | number
}

const MetadataCard: React.FC<MetadataCardProps> = ({ icon, label, value }) => (
  <div className="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-lg p-3 text-center">
    <div className="text-slate-600 mb-1 flex justify-center">{icon}</div>
    <p className="text-xs text-slate-600 font-medium">{label}</p>
    <p className="text-sm font-bold text-slate-900 mt-0.5">{value}</p>
  </div>
)

// Component: Feature Item
interface FeatureItemProps {
  name: string
  included: boolean
  tooltip?: string
}

const FeatureItem: React.FC<FeatureItemProps> = ({ name, included }) => (
  <div className="flex items-start gap-3">
    {included ? (
      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
    ) : (
      <X className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
    )}
    <span className={`text-sm ${included ? 'text-slate-700' : 'text-slate-400'}`}>
      {name}
    </span>
  </div>
)

// Component: FAQ Item
interface FAQItemProps {
  question: string
  answer: string
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
      >
        <h3 className="text-left font-semibold text-slate-900">{question}</h3>
        <ChevronDown
          size={20}
          className={`text-slate-600 transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
          <p className="text-slate-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default Plan