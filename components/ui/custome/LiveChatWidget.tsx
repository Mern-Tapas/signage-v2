'use client'

import React, { useState } from "react"
import Container from "@/components/layout/Container"
import { Typography } from "@/components/typography/typography"
import { Button } from "./Button"
import { MessageCircle, X, Send } from "lucide-react"

function LiveChatWidget() {

  const [open, setOpen] = useState(false)

  return (

    <>

      {/* Floating Button */}

      <div className="fixed bottom-6 right-6 z-50">

        {!open && (

          <button
            onClick={() => setOpen(true)}
            className="h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
          >
            <MessageCircle className="text-white" size={22} />
          </button>

        )}

      </div>


      {/* Chat Panel */}

      {open && (

        <Container
          radius="xl"
          className="fixed bottom-6 right-6 w-[340px] h-[480px] bg-white shadow-2xl border border-gray-300 flex flex-col z-50"
        >

          {/* Header */}

          <Container padding="md" className="flex items-center justify-between border-b border-gray-300">

            <Typography weight="medium">
              Support Chat
            </Typography>

            <Button size="icon" variant="danger" onClick={() => setOpen(false)}>
              <X size={18} />
            </Button>

          </Container>


          {/* Messages */}

          <Container className="flex-1 overflow-y-auto p-4 space-y-3">

            <div className="bg-gray-100 p-3 rounded-lg w-fit max-w-[80%]">
              <Typography variant="caption">
                Hello 👋 How can we help you?
              </Typography>
            </div>

            <div className="bg-blue-600 text-white p-3 rounded-lg w-fit ml-auto max-w-[80%]">
              <Typography variant="caption">
                I need help with screen connection
              </Typography>
            </div>

          </Container>


          {/* Input */}

          <Container padding="sm" className="border-t border-gray-300 flex gap-2">

            <input
              placeholder="Type message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
            />

            <Button variant="primary" size="sm">
              <Send size={16} />
            </Button>

          </Container>

        </Container>

      )}

    </>
  )
}

export default LiveChatWidget