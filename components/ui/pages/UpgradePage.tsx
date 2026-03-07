'use client'

import React from "react"
import Container from "@/components/layout/Container"
import { Typography } from "@/components/typography/typography"
import { Check, Calendar, CreditCard } from "lucide-react"
import { Button } from "../custome/Button"

function UpgradePage() {

  const subscription = {
    plan: "Pro",
    status: "Active",
    startDate: "10 May 2026",
    renewalDate: "10 June 2026"
  }

  const plans = [
    {
      name: "Free",
      price: "₹0",
      description: "Perfect for testing the platform",
      features: [
        "2 Screens",
        "1 Playlist",
        "1GB Storage",
        "Basic Scheduling"
      ],
      current: true
    },
    {
      name: "Starter",
      price: "₹299 / mo",
      description: "For small businesses",
      features: [
        "5 Screens",
        "5 Playlists",
        "5GB Storage",
        "Basic Scheduling"
      ]
    },
    {
      name: "Pro",
      price: "₹499 / mo",
      description: "Best for growing businesses",
      popular: true,
      features: [
        "20 Screens",
        "Unlimited Playlists",
        "20GB Storage",
        "Advanced Scheduling",
        "Priority Support"
      ]
    },
    {
      name: "Business",
      price: "₹1499 / mo",
      description: "For large deployments",
      features: [
        "Unlimited Screens",
        "Unlimited Playlists",
        "100GB Storage",
        "Advanced Analytics",
        "Priority Support",
        "API Access"
      ]
    }
  ]

  return (

    <Container className="grid gap-6">

      {/* Header */}

      <Container>
        <Typography variant='h4' weight='medium'>
          Upgrade Your Plan
        </Typography>

        <Typography variant='body2' color='secondary'>
          Scale your digital signage network with more screens,
          storage and advanced automation tools.
        </Typography>
      </Container>


      {/* Subscription Overview */}

      <Container
        radius="xl"
        padding="lg"
        variant="primary"
        className="grid md:grid-cols-4 gap-6 items-center"
      >

        <div>

          <Typography variant="caption" className="text-gray-500">
            Current Plan
          </Typography>

          <Typography weight="medium">
            {subscription.plan}
          </Typography>

          <span className="text-xs text-green-600">
            {subscription.status}
          </span>

        </div>


        <div className="flex gap-3 items-center">

          <Calendar size={18} className="text-gray-500" />

          <div>

            <Typography variant="caption">
              Started On
            </Typography>

            <Typography variant="caption">
              {subscription.startDate}
            </Typography>

          </div>

        </div>


        <div className="flex gap-3 items-center">

          <CreditCard size={18} className="text-gray-500" />

          <div>

            <Typography variant="caption">
              Next Billing
            </Typography>

            <Typography variant="caption">
              {subscription.renewalDate}
            </Typography>

          </div>

        </div>


        <div className="flex gap-3 justify-end">

          <Button variant="outline">
            Cancel
          </Button>

          <Button variant="primary">
            Manage
          </Button>

        </div>

      </Container>



      {/* Current Usage */}

      <Container
        radius="xl"
        padding="lg"
        variant="primary"
        className="grid md:grid-cols-3 gap-6 items-center"
      >

        <div>

          <Typography weight="medium">
            Usage
          </Typography>

          <Typography className="text-gray-500 text-sm">
            Your current limits
          </Typography>

        </div>


        {/* Screens */}

        <div>

          <Typography className="text-sm mb-1">
            Screens Usage
          </Typography>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-full bg-red-500"></div>
          </div>

          <Typography variant="caption">
            2 / 2 Screens Used
          </Typography>

        </div>


        {/* Storage */}

        <div>

          <Typography className="text-sm mb-1">
            Storage Usage
          </Typography>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[90%] bg-orange-500"></div>
          </div>

          <Typography variant="caption">
            900MB / 1GB Used
          </Typography>

        </div>

      </Container>


      {/* Plans */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {plans.map((plan, index) => (

          <Container
            key={index}
            radius="xl"
            padding="lg"
            variant="primary"
            className={`relative flex flex-col justify-between border transition duration-300 hover:shadow-xl hover:-translate-y-1
      ${plan.popular ? "border-blue-500 shadow-lg" : ""}`}
          >

            {/* Popular Badge */}

            {plan.popular && (

              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                Recommended
              </div>

            )}

            {/* Plan Info */}

            <div>

              <Typography weight="medium" className="text-lg">
                {plan.name}
              </Typography>

              <Typography
                variant="h3"
                className="mt-2"
              >
                {plan.price}
              </Typography>

              <Typography
                variant="caption"
                className="text-gray-500"
              >
                {plan.description}
              </Typography>


              {/* Divider */}

              <div className="h-px bg-gray-200 my-5"></div>


              {/* Features */}

              <div className="space-y-3">

                {plan.features.map((feature, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-2"
                  >

                    <Check
                      size={16}
                      className="text-green-500"
                    />

                    <Typography variant="caption">
                      {feature}
                    </Typography>

                  </div>

                ))}

              </div>

            </div>


            {/* Button */}

            <div className="mt-8">

              {plan.current ? (

                <Button
                  variant="outline"
                  className="w-full"
                >
                  Current Plan
                </Button>

              ) : (

                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  Upgrade
                </Button>

              )}

            </div>

          </Container>

        ))}

      </div>

    </Container>

  )
}

export default UpgradePage