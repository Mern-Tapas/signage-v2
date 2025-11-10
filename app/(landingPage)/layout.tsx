import Footer from '@/components/ui/custome/Footer'
import Header from '@/components/ui/custome/Header'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 font-sans">
    <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default layout