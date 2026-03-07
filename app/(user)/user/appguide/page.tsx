'use client'

import React from "react";
import Container from "@/components/layout/Container";
import { Typography } from "@/components/typography/typography";
import { Card, CardBody } from "@/components/ui/custome/Card";
import { Button } from "@/components/ui/custome/Button";

import {
  Download,
  KeyRound,
  Wifi,
  CheckCircle
} from "lucide-react";

function Page() {

  const steps = [
    {
      id: 1,
      title: "Download the Player App",
      desc: "Download the player for Android TV or Windows.",
      image: "/images/step-download.png"
    },
    {
      id: 2,
      title: "Install the Application",
      desc: "Install the player application on your screen device.",
      image: "/images/step-install.png"
    },
    {
      id: 3,
      title: "Enter Activation Code",
      desc: "Enter the User ID / Activation Code from your CMS dashboard.",
      image: "/images/step-code.png"
    },
    {
      id: 4,
      title: "Device Connects to CMS",
      desc: "Once the code is entered, the screen automatically connects.",
      image: "/images/step-connect.png"
    },
    {
      id: 5,
      title: "Screen Goes Live",
      desc: "Your screen will start playing playlists automatically.",
      image: "/images/step-live.png"
    }
  ];

  return (

    <Container className="max-w-6xl mx-auto grid gap-10">

      {/* HEADER */}

      <Container className="text-center space-y-2">

        <Typography variant="h4" weight="medium">
          Download Player App
        </Typography>

        <Typography variant="body2" color="secondary">
          Install the player and connect your screen in just a few steps.
        </Typography>

      </Container>


      {/* DOWNLOAD SECTION */}

      <Container className="grid md:grid-cols-2 gap-6">

        {/* ANDROID */}

        <Card radius="xl">

          <CardBody className="flex flex-col items-center text-center gap-4">

            <img
              src="/images/android-player.png"
              className="h-16"
              alt="android"
            />

            <Typography weight="medium">
              Android Player
            </Typography>

            <Typography variant="body2" color="secondary">
              Works on Android TV, Android boxes and tablets.
            </Typography>

            <Button icon={<Download size={16}/>}>
              Download APK
            </Button>

          </CardBody>

        </Card>


        {/* WINDOWS */}

        <Card radius="xl">

          <CardBody className="flex flex-col items-center text-center gap-4">

            <img
              src="/images/windows-player.png"
              className="h-16"
              alt="windows"
            />

            <Typography weight="medium">
              Windows Player
            </Typography>

            <Typography variant="body2" color="secondary">
              Install the player on Windows PC or mini PC displays.
            </Typography>

            <Button variant="outline" icon={<Download size={16}/>}>
              Download EXE
            </Button>

          </CardBody>

        </Card>

      </Container>


      {/* STEP GUIDE */}

      <Container className="grid md:grid-cols-2 gap-6">

        {steps.map((step) => (

          <Card key={step.id} radius="xl">

            <CardBody className="flex gap-4 items-start">

              {/* STEP NUMBER */}

              <div className="min-w-[36px] h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                {step.id}
              </div>

              {/* CONTENT */}

              <div className="space-y-3">

                <Typography weight="medium">
                  {step.title}
                </Typography>

                <Typography variant="body2" color="secondary">
                  {step.desc}
                </Typography>

                {/* IMAGE */}

                <img
                  src={step.image}
                  alt="step"
                  className="rounded-lg border"
                />

              </div>

            </CardBody>

          </Card>

        ))}

      </Container>


      {/* ACTIVATION CODE EXAMPLE */}

      <Card radius="xl">

        <CardBody className="text-center space-y-4">

          <Typography weight="medium">
            Example Activation Code
          </Typography>

          <div className="bg-gray-100 rounded-lg px-6 py-4 text-lg font-mono tracking-widest">
            A9F4-3KD8
          </div>

          <Typography variant="body2" color="secondary">
            Enter this code inside the player app to connect your screen.
          </Typography>

        </CardBody>

      </Card>


      {/* HELP */}

      <Card radius="xl">

        <CardBody className="text-center space-y-2">

          <Typography weight="medium">
            Need Help?
          </Typography>

          <Typography variant="body2" color="secondary">
            Make sure your screen is connected to the internet and the activation code is entered correctly.
          </Typography>

        </CardBody>

      </Card>

    </Container>

  );
}

export default Page;