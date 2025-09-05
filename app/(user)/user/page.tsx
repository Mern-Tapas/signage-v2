import AnalyticsCard from '@/components/ui/custome/AnalyticsCard'
import { Container, Users } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <Container>
      <AnalyticsCard
        title="Active Users"
        value="12,540"
        change="+8.4%"
        changeType="increase"
        icon={Users}
      />
    </Container>
  )
}

export default page