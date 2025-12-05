'use client'
import React, { useState } from 'react';
import { Crown, Calendar, TrendingUp, CreditCard, Download, CheckCircle, ArrowRight, Zap, } from 'lucide-react';
import Container from '@/components/layout/Container';

const CurrentPlanCard = () => {
    const currentPlan = {
        name: 'Pro Plan',
        price: '29',
        billingCycle: 'monthly',
        startDate: 'Nov 1, 2024',
        renewalDate: 'Jan 1, 2025',
        status: 'active',
        daysUntilRenewal: 27
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-700';
            case 'expiring':
                return 'bg-yellow-100 text-yellow-700';
            case 'expired':
                return 'bg-red-100 text-red-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <Container className="" variant='primary' padding='lg' radius='xl'>
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                    <Crown className="text-blue-600" size={24} />
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Current Plan</h2>
                    <p className="text-sm text-gray-500">Your subscription details and billing information</p>
                </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 mb-4">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{currentPlan.name}</h3>
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-blue-600">${currentPlan.price}</span>
                            <span className="text-gray-600">/{currentPlan.billingCycle === 'monthly' ? 'month' : 'year'}</span>
                        </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(currentPlan.status)}`}>
                        {currentPlan.status.charAt(0).toUpperCase() + currentPlan.status.slice(1)}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white bg-opacity-60 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                            <Calendar className="text-gray-500" size={16} />
                            <p className="text-xs text-gray-600 font-medium">Started</p>
                        </div>
                        <p className="text-sm font-semibold text-gray-900">{currentPlan.startDate}</p>
                    </div>

                    <div className="bg-white bg-opacity-60 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                            <TrendingUp className="text-gray-500" size={16} />
                            <p className="text-xs text-gray-600 font-medium">Renews On</p>
                        </div>
                        <p className="text-sm font-semibold text-gray-900">{currentPlan.renewalDate}</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
                <div className="flex items-center gap-3">
                    <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">
                        {currentPlan.daysUntilRenewal}
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-900">Days until renewal</p>
                        <p className="text-xs text-gray-600">Your plan will automatically renew</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Upgrade Plan
                </button>
                <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                    Cancel Subscription
                </button>
            </div>
        </Container>
    );
};

const PaymentMethodCard = () => {
    return (
        <Container className="" variant='primary' padding='lg' radius='xl'>

            <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                    <CreditCard className="text-blue-600" size={24} />
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Payment Method</h2>
                    <p className="text-sm text-gray-500">Manage your payment information</p>
                </div>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-lg">
                        <CreditCard className="text-white" size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-900">•••• •••• •••• 4242</p>
                        <p className="text-xs text-gray-500">Expires 12/2025</p>
                    </div>
                </div>
                <button className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">Update</button>
            </div>
        </Container>
    );
};

const BillingHistoryCard = () => {
    const invoices = [
        { id: 'INV-001', date: 'Nov 1, 2024', amount: '$29.00', status: 'Paid' },
        { id: 'INV-002', date: 'Oct 1, 2024', amount: '$29.00', status: 'Paid' },
        { id: 'INV-003', date: 'Sep 1, 2024', amount: '$29.00', status: 'Paid' }
    ];

    return (
        <Container className="space-y-6" variant='primary' padding='lg' radius='xl'>

            <div className="flex items-center justify-between ">
                <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                        <Download className="text-green-600" size={24} />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Billing History</h2>
                        <p className="text-sm text-gray-500">Download your past invoices</p>
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                {invoices.map((invoice) => (
                    <div key={invoice.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div>
                                <p className="text-sm font-medium text-gray-900">{invoice.id}</p>
                                <p className="text-xs text-gray-500">{invoice.date}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-semibold text-gray-900">{invoice.amount}</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">{invoice.status}</span>
                            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                                <Download size={16} />
                            </button>
                        </div>
                    </div>
                ))}


            </div>

            <div className=" border border-dashed rounded-md p-4 h-50 border-gray-300 flex justify-center items-center">
                <div>
                    <h3 className="text-center text-sm font-semibold text-gray-900">No invoices yet</h3>
                    <p className="text-center text-xs text-gray-500 mt-1">We couldn't find any billing history for this account.</p>
                </div>
            </div>
        </Container>
    );
};

const PricingPlansCard = () => {
    const [selectedPlan, setSelectedPlan] = useState('pro');

    const plans = [
        { id: 'free', name: 'Free', price: '0', features: ['5 Projects', '1GB Storage', 'Basic Support'], popular: false },
        { id: 'pro', name: 'Pro', price: '29', features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Analytics'], popular: true },
        { id: 'enterprise', name: 'Enterprise', price: '99', features: ['Unlimited Everything', '1TB Storage', '24/7 Support', 'Custom Integration'], popular: false }
    ];

    return (
        <Container className="" variant='primary' padding='lg' radius='xl'>

            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Available Plans</h2>
                <p className="text-sm text-gray-500">Choose the plan that works best for you</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`relative bg-white rounded-xl p-6 border-2 transition-all cursor-pointer ${selectedPlan === plan.id ? 'border-blue-600 shadow-lg' : 'border-gray-200 hover:border-gray-300'
                            }`}
                        onClick={() => setSelectedPlan(plan.id)}
                    >
                        {plan.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">Most Popular</span>
                            </div>
                        )}
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                                <span className="text-gray-500">/month</span>
                            </div>
                        </div>
                        <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle className="text-green-600 shrink-0" size={16} />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button
                            className={`w-full py-2 rounded-lg font-medium transition-colors ${selectedPlan === plan.id
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {selectedPlan === plan.id ? 'Current Plan' : 'Select Plan'}
                        </button>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default function BillingPage() {
    return (
        <Container className='space-y-6'>
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Billing & Subscription</h1>
                <p className="text-gray-600">Manage your subscription, payment methods, and billing history</p>
            </div>
            <CurrentPlanCard />
            <PricingPlansCard />
            <PaymentMethodCard />
            <BillingHistoryCard />
        </Container>
    );
}




