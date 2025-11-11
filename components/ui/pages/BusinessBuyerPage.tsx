'use client'
import React from 'react';
import { TrendingUp, Users, Globe, Coins, Briefcase, ArrowRight } from 'lucide-react';

export default function BusinessBuyerPage() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Invest in the Future of{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Smart Digital Signage
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Our cloud-based signage platform empowers businesses to manage thousands of displays with ease. 
          Join us as we expand into a multi-billion dollar global industry.
        </p>

        {/* Business Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: <Users className="w-8 h-8" />, label: "Active Users", value: "10,000+" },
            { icon: <Globe className="w-8 h-8" />, label: "Countries Served", value: "18" },
            { icon: <Coins className="w-8 h-8" />, label: "Monthly Recurring Revenue", value: "$25K+" },
            { icon: <TrendingUp className="w-8 h-8" />, label: "Growth Rate", value: "120% YoY" },
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition">
              <div className="flex justify-center mb-4 text-blue-600">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Market Opportunity */}
        <div className="max-w-4xl mx-auto mb-20 text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Market Opportunity</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The global digital signage market is projected to reach <strong>$30 billion by 2026</strong>, driven by demand in retail, healthcare, 
            education, and transportation sectors. Our platform is well-positioned to capture a significant share of this growth with 
            our scalable cloud infrastructure and enterprise-grade features.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-6 text-center">
            <p className="text-lg text-blue-800 font-medium">
              “Digital Signage is no longer a luxury — it’s a communication necessity for every modern business.”
            </p>
          </div>
        </div>

        {/* Why Buy Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Acquire This Business?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: <Briefcase className="w-8 h-8 text-blue-600" />,
                title: "Established Brand & Customer Base",
                text: "Serving 10,000+ active displays across multiple industries with strong client retention.",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
                title: "Recurring Revenue Model",
                text: "Subscription-based SaaS with consistent monthly income and growth potential.",
              },
              {
                icon: <Globe className="w-8 h-8 text-blue-600" />,
                title: "Scalable Global Product",
                text: "Cloud-native architecture designed for rapid international expansion.",
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-12 shadow-xl text-center">
          <h2 className="text-4xl font-bold mb-4">Interested in Acquisition or Investment?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Let&#39;s discuss how you can be part of our growth story and help us expand globally.
          </p>
          <a
            href="mailto:invest@signagehub.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-full font-semibold hover:shadow-xl transition"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
