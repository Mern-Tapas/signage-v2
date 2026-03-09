'use client'
import Container from '@/components/layout/Container';
import { Typography } from '@/components/typography/typography';
import AnalyticsCard from '@/components/ui/custome/AnalyticsCard';
import {
  Database, File, MoreVertical, PlaySquare,
  ScreenShare, Timer, ArrowUpRight, Wifi, WifiOff,
  TrendingUp, Clock, Upload, Activity, Zap,
} from 'lucide-react';
import React, { useState } from 'react'
import { Button } from '../custome/Button';
import { Card, CardBody, CardHeader } from '../custome/Card';
import DeviceList from '../custome/DeviceList';
import StackedCircleGraph from '../custome/StackedGraph';
import RecentOfflineItem from '../custome/RecentOfflineItem';
import Link from 'next/link';

/* ─────────────────────────────────────────────
   Small inline helpers (no new file needed)
───────────────────────────────────────────── */

/** Thin coloured progress bar */
function ProgressBar({ value, color }: { value: number; color: string }) {
  return (
    <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{ width: `${value}%`, background: color }}
      />
    </div>
  );
}

/** Animated status dot */
function StatusDot({ online }: { online: boolean }) {
  return (
    <span className="relative flex h-2 w-2">
      {online && (
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
      )}
      <span
        className={`relative inline-flex rounded-full h-2 w-2 ${online ? 'bg-emerald-500' : 'bg-rose-400'}`}
      />
    </span>
  );
}

/** Slim badge pill */
function Badge({
  label, variant = 'default',
}: {
  label: string;
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'default';
}) {
  const styles: Record<string, string> = {
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    warning: 'bg-amber-50  text-amber-700  border-amber-200',
    danger: 'bg-rose-50   text-rose-700   border-rose-200',
    info: 'bg-blue-50   text-blue-700   border-blue-200',
    default: 'bg-gray-50   text-gray-600   border-gray-200',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${styles[variant]}`}>
      {label}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Main Dashboard
───────────────────────────────────────────── */
function UserDashboard() {

  const [activeTab, setActiveTab] = useState<'today' | 'week'>('today');

  const segments = [
    { label: "Retail", value: 45, color: "#3B82F6" },
    { label: "Hotel", value: 30, color: "#8B5CF6" },
    { label: "Restaurant", value: 25, color: "#10B981" },
  ];

  const scheduleItems = {
    today: [
      { title: "Morning Promotion", time: "06:00 AM – 11:00 AM", status: "Running" as const },
      { title: "Lunch Offers", time: "12:00 PM – 03:00 PM", status: "Upcoming" as const },
      { title: "Evening Highlights", time: "05:00 PM – 08:00 PM", status: "Upcoming" as const },
      { title: "Night Loop", time: "09:00 PM – 12:00 AM", status: "Upcoming" as const },
    ],
    week: [
      { title: "Weekend Special", time: "Sat – Sun, All Day", status: "Upcoming" as const },
      { title: "Flash Sale Loop", time: "Mon – Fri, 10 AM–6 PM", status: "Upcoming" as const },
    ],
  };

  const uploads = [
    { name: "Summer Campaign.mp4", size: "120 MB", ago: "2h ago", color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Menu Display.png", size: "2.3 MB", ago: "5h ago", color: "text-purple-500", bg: "bg-purple-50" },
    { name: "Brand Intro.mp4", size: "85 MB", ago: "1d ago", color: "text-rose-500", bg: "bg-rose-50" },
    { name: "Promo Banner.png", size: "540 KB", ago: "2d ago", color: "text-emerald-500", bg: "bg-emerald-50" },
  ];

  const activity = [
    { dot: "bg-emerald-500", text: <>Screen <span className="font-semibold text-gray-800">WS123840</span> came online</>, time: "2 min ago" },
    { dot: "bg-rose-500", text: <>Screen <span className="font-semibold text-gray-800">WS839201</span> went offline</>, time: "14 min ago" },
    { dot: "bg-blue-500", text: <>New playlist <span className="font-semibold text-gray-800">Summer Deals</span> published</>, time: "1 hr ago" },
    { dot: "bg-amber-500", text: <>Schedule updated for <span className="font-semibold text-gray-800">Lobby Screen</span></>, time: "3 hr ago" },
    { dot: "bg-purple-500", text: <>4 new files uploaded to Media Library</>, time: "5 hr ago" },
  ];

  const offlineScreens = [
    { name: "Lobby Screen", location: "Mumbai HQ", since: "2h 14m" },
    { name: "Counter Display", location: "Pune Outlet", since: "45m" },
    { name: "Window Board", location: "Delhi Store", since: "3h 02m" },
    { name: "Lobby Screen", location: "Delhi Store", since: "3h 02m" },
    { name: "Poster Frame", location: "Delhi Store", since: "3h 02m" },
  ];

  return (
    <Container className="grid gap-6 pb-10">

      {/* ── Header ── */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <Typography variant="h4" weight="medium">Dashboard</Typography>
          <Typography variant="body2" color="secondary">
            Good morning! Here's what's happening across your screens today.
          </Typography>
        </div>
        {/* Live pulse indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
          <StatusDot online />
          <span>45 screens live</span>
        </div>
      </div>

      {/* ── Upgrade Banner ── */}
      <div className="relative overflow-hidden p-4 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 border border-blue-400 flex items-center justify-between gap-4 flex-wrap shadow-md shadow-blue-200">
        {/* decorative circles */}
        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute -bottom-4 right-20 w-16 h-16 rounded-full bg-white/10 pointer-events-none" />
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
            <Zap size={18} className="text-white" />
          </div>
          <p className="text-white text-sm font-medium">
            You're on the <span className="font-bold">Free Plan.</span>{' '}
            Upgrade to unlock unlimited screens, advanced scheduling & analytics.
          </p>
        </div>
        <Button variant="primary" className="bg-white !text-blue-600 hover:bg-blue-50 shrink-0">
          <Link href="/user/plan" className="flex items-center gap-1.5 font-semibold">
            Upgrade Now <ArrowUpRight size={14} />
          </Link>
        </Button>
      </div>

      {/* ── Analytics Cards ── */}
      <Container className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <AnalyticsCard
          title="Total Screens"
          value="2,567"
          subtitle="45 online currently"
          icon={ScreenShare}
          iconVariant="transparant"
          iconColor="secondary"
        />
        <AnalyticsCard
          title="Playlists"
          value="2,567"
          subtitle="+12 this week"
          icon={PlaySquare}
          iconVariant="transparant"
          iconColor="primary"
        />
        <AnalyticsCard
          title="Scheduled Events"
          value="2,567"
          subtitle="4 running today"
          icon={Timer}
          iconVariant="transparant"
          iconColor="primary"
        />
        <AnalyticsCard
          title="Files"
          value="267"
          subtitle="2 new uploads"
          icon={File}
          iconVariant="transparant"
          iconColor="primary"
        />
        <AnalyticsCard
          title="Used Storage"
          value="2,567"
          subtitle="67% of 5 GB used"
          icon={Database}
          iconVariant="transparant"
          iconColor="primary"
        />
      </Container>

      {/* ── Storage Usage mini bar ── */}
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
        <Database size={16} className="text-gray-400 shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex justify-between text-xs text-gray-500 mb-1.5">
            <span>Storage usage</span>
            <span className="font-medium text-gray-700">3.4 GB / 5 GB</span>
          </div>
          <ProgressBar value={67} color="linear-gradient(90deg,#3B82F6,#6366F1)" />
        </div>
        <Button size="sm" variant="ghost" className="shrink-0 text-xs">
          <Link href="/user/storage">Manage</Link>
        </Button>
      </div>

      {/* ── Row: Recent Offline + Display Stats ── */}
      <Container className="grid gap-4 xl:grid-cols-[2fr_1fr]">

        {/* Recent Offline */}
        <Card radius="xl" variant="default">
          <CardHeader className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <WifiOff size={16} className="text-rose-500" />
              <Typography weight="medium">Recent Offline</Typography>
              <Badge label="3 offline" variant="danger" />
            </div>
            <Button size="sm" variant="ghost">View All</Button>
          </CardHeader>
          <CardBody className="space-y-1 divide-y divide-gray-50">
            {offlineScreens.map((s, i) => (
              <div key={i} className="flex items-center justify-between py-3 group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                    <ScreenShare size={15} className="text-rose-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{s.name}</p>
                    <p className="text-xs text-gray-400">{s.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-rose-500 font-medium">{s.since} offline</span>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>
            ))}
            {/* Render remaining via existing component */}
            
          </CardBody>
        </Card>

        {/* Display Statistics */}
        <Card radius="xl" variant="default">
          <CardHeader className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-blue-500" />
              <Typography weight="medium">Display Stats</Typography>
            </div>
            <button><MoreVertical size={20} className="text-gray-400" /></button>
          </CardHeader>
          <CardBody>
            <StackedCircleGraph segments={segments} />
            {/* Legend */}
            <div className="mt-4 space-y-2.5">
              {segments.map((seg) => (
                <div key={seg.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: seg.color }} />
                    <span className="text-xs text-gray-500">{seg.label}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-1 mx-3">
                    <ProgressBar value={seg.value} color={seg.color} />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">{seg.value}%</span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

      </Container>

      {/* ── Row: Today's Schedule + Recent Uploads ── */}
      <Container className="grid gap-4 xl:grid-cols-2">

        {/* Today's Schedule */}
        <Card radius="xl" variant="default">
          <CardHeader className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-indigo-500" />
              <Typography weight="medium">Schedule</Typography>
            </div>
            {/* Tab switcher */}
            <div className="flex items-center gap-1 p-1 rounded-lg bg-gray-100">
              {(['today', 'week'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all capitalize ${activeTab === tab
                    ? 'bg-white text-gray-800 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </CardHeader>

          <CardBody className="space-y-2">
            {scheduleItems[activeTab].map((item, i) => {
              const isRunning = item.status === 'Running';
              return (
                <div
                  key={i}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-colors ${isRunning
                    ? 'bg-emerald-50 border-emerald-100'
                    : 'bg-gray-50 border-transparent hover:border-gray-200'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    {isRunning && <StatusDot online />}
                    <div>
                      <p className="text-sm font-medium text-gray-800">{item.title}</p>
                      <p className="text-xs text-gray-400">{item.time}</p>
                    </div>
                  </div>
                  <Badge
                    label={item.status}
                    variant={isRunning ? 'success' : 'default'}
                  />
                </div>
              );
            })}
          </CardBody>
        </Card>

        {/* Recent Uploads */}
        <Card radius="xl" variant="default">
          <CardHeader className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Upload size={16} className="text-purple-500" />
              <Typography weight="medium">Recent Uploads</Typography>
            </div>
            <Button size="sm" variant="ghost">
              <Link href="/user/files">Manage Files</Link>
            </Button>
          </CardHeader>

          <CardBody className="space-y-1 divide-y divide-gray-50">
            {uploads.map((u, i) => (
              <div key={i} className="flex items-center gap-3 py-3 group">
                <div className={`w-10 h-10 rounded-xl ${u.bg} flex items-center justify-center shrink-0`}>
                  <File size={17} className={u.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{u.name}</p>
                  <p className="text-xs text-gray-400">{u.size} · {u.ago}</p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  <MoreVertical size={15} className="text-gray-400" />
                </button>
              </div>
            ))}
          </CardBody>
        </Card>

      </Container>

      {/* ── Activity Timeline ── */}
      <Container>
        <Card radius="xl" variant="default">
          <CardHeader className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity size={16} className="text-blue-500" />
              <Typography weight="medium">Recent Activity</Typography>
            </div>
            <Button size="sm" variant="ghost">View Logs</Button>
          </CardHeader>

          <CardBody>
            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gray-200 via-gray-200 to-transparent" />

              <div className="space-y-5 pl-6">
                {activity.map((a, i) => (
                  <div key={i} className="relative flex items-start justify-between gap-4 group">
                    {/* dot on the line */}
                    <div className={`absolute -left-6 top-1 w-2 h-2 rounded-full ${a.dot} ring-2 ring-white`} />
                    <p className="text-sm text-gray-600 leading-snug flex-1">{a.text}</p>
                    <span className="text-[11px] text-gray-400 whitespace-nowrap shrink-0 mt-0.5">{a.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>
      </Container>

      {/* ── Quick Actions ── */}
      <Container>
        <Typography variant="body2" weight="medium" color="secondary" className="mb-3 uppercase tracking-wide text-xs">
          Quick Actions
        </Typography>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: ScreenShare, label: "Add Screen", href: "/user/screens/new", color: "text-blue-500", bg: "bg-blue-50   hover:bg-blue-100   border-blue-100" },
            { icon: PlaySquare, label: "New Playlist", href: "/user/playlists/new", color: "text-purple-500", bg: "bg-purple-50 hover:bg-purple-100 border-purple-100" },
            { icon: Timer, label: "Schedule Event", href: "/user/schedule/new", color: "text-indigo-500", bg: "bg-indigo-50  hover:bg-indigo-100  border-indigo-100" },
            { icon: Upload, label: "Upload File", href: "/user/files", color: "text-emerald-500", bg: "bg-emerald-50 hover:bg-emerald-100 border-emerald-100" },
          ].map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className={`flex flex-col items-center gap-2.5 p-4 rounded-xl border transition-all ${action.bg}`}
            >
              <div className={`w-10 h-10 rounded-xl ${action.bg.split(' ')[0]} flex items-center justify-center`}>
                <action.icon size={20} className={action.color} />
              </div>
              <span className="text-xs font-semibold text-gray-700">{action.label}</span>
            </Link>
          ))}
        </div>
      </Container>

    </Container>
  )
}

export default UserDashboard