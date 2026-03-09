'use client'
import React from 'react'
import Container from '@/components/layout/Container'
import { Typography, Caption } from '@/components/typography/typography'
import { UserPlus, Users, Shield, Clock, MoreVertical } from 'lucide-react'
import { Button } from '@/components/ui/custome/Button'
import Avatar from '@/components/ui/custome/Avatar'

const teamMembers = [
    {
        id: 1,
        name: "Tapas Gharami",
        email: "cyb6261452510@gmail.com",
        role: "Admin",
        status: "Active",
        avatar: "https://i.pinimg.com/736x/98/a9/c0/98a9c07f767ad219ee1885892d0865c2.jpg"
    },
    {
        id: 2,
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        role: "Editor",
        status: "Active",
        avatar: "https://i.pinimg.com/736x/98/a9/c0/98a9c07f767ad219ee1885892d0865c2.jpg"
    },
    {
        id: 3,
        name: "Aman Verma",
        email: "aman@gmail.com",
        role: "Viewer",
        status: "Pending",
        avatar: "https://i.pinimg.com/736x/98/a9/c0/98a9c07f767ad219ee1885892d0865c2.jpg"
    }
]

function TeamPage() {

    return (

        <Container className="grid gap-6">

            {/* HEADER */}

            <Container
                variant="primary"
                padding="lg"
                radius="xl"
                className="flex flex-col md:flex-row md:items-center justify-between gap-4"
            >

                <div>
                    <Typography variant="h4" weight="bold">
                        Team
                    </Typography>

                    <Caption color="muted">
                        Manage your workspace members and permissions
                    </Caption>
                </div>

                <Button
                    variant="primary"
                    className="flex items-center gap-2"
                >
                    <UserPlus size={18} />
                    Invite Member
                </Button>

            </Container>


            {/* TEAM STATS */}

            <Container className="grid grid-cols-2 md:grid-cols-3 gap-4">

                <Container variant="primary" padding="md" radius="xl" className="flex items-center gap-3">

                    <div className="p-2 rounded-lg bg-blue-100">
                        <Users className="text-blue-600" size={18} />
                    </div>

                    <div>
                        <Caption color="muted">Members</Caption>
                        <Typography weight="bold">8</Typography>
                    </div>

                </Container>


                <Container variant="primary" padding="md" radius="xl" className="flex items-center gap-3">

                    <div className="p-2 rounded-lg bg-purple-100">
                        <Shield className="text-purple-600" size={18} />
                    </div>

                    <div>
                        <Caption color="muted">Admins</Caption>
                        <Typography weight="bold">2</Typography>
                    </div>

                </Container>


                <Container variant="primary" padding="md" radius="xl" className="flex items-center gap-3">

                    <div className="p-2 rounded-lg bg-yellow-100">
                        <Clock className="text-yellow-600" size={18} />
                    </div>

                    <div>
                        <Caption color="muted">Pending Invites</Caption>
                        <Typography weight="bold">1</Typography>
                    </div>

                </Container>

            </Container>


            {/* MEMBERS TABLE */}

          <Container
  variant="primary"
  radius="xl"
  padding="lg"
>

  {/* DESKTOP TABLE */}

  <div className="hidden md:block overflow-x-auto">

    <table className="w-full text-sm">

      <thead className="border-b text-gray-500 text-left">

        <tr>
          <th className="pb-3">Member</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th className="text-right">Actions</th>
        </tr>

      </thead>

      <tbody>

        {teamMembers.map(member => (

          <tr
            key={member.id}
            className="border-b last:border-none hover:bg-gray-50 transition"
          >

            {/* MEMBER */}

            <td className="py-4">

              <div className="flex items-center gap-3">

                <Avatar
                  src={member.avatar}
                  size="sm"
                  radius="full"
                />

                <Typography weight="medium">
                  {member.name}
                </Typography>

              </div>

            </td>

            <td className="text-gray-600">
              {member.email}
            </td>


            {/* ROLE */}

            <td>

              <span className="px-2 py-1 rounded-lg bg-gray-100 text-xs">
                {member.role}
              </span>

            </td>


            {/* STATUS */}

            <td>

              <span className={`px-2 py-1 rounded-lg text-xs
                ${member.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
                }`}>

                {member.status}

              </span>

            </td>


            {/* ACTION */}

            <td className="text-right">

              <button className="p-2 rounded-lg hover:bg-gray-100">

                <MoreVertical size={18} />

              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>



  {/* MOBILE CARD VIEW */}

  <div className="grid gap-3 md:hidden">

    {teamMembers.map(member => (

      <div
        key={member.id}
        className="border rounded-xl p-4 flex justify-between items-start"
      >

        <div className="flex gap-3">

          <Avatar
            src={member.avatar}
            size="sm"
            radius="full"
          />

          <div>

            <Typography weight="medium">
              {member.name}
            </Typography>

            <p className="text-xs text-gray-500">
              {member.email}
            </p>

            <div className="flex gap-2 mt-2">

              <span className="px-2 py-1 rounded-md bg-gray-100 text-xs">
                {member.role}
              </span>

              <span className={`px-2 py-1 rounded-md text-xs
                ${member.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
                }`}>

                {member.status}

              </span>

            </div>

          </div>

        </div>

        <button className="p-2 rounded-lg hover:bg-gray-100">

          <MoreVertical size={18} />

        </button>

      </div>

    ))}

  </div>

</Container>

        </Container>

    )
}

export default TeamPage