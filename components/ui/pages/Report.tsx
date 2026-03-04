'use client'

import React, { useState, useMemo } from 'react'
import {
  BarChart3,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
  TrendingUp,
  TrendingDown,
  Download,
  Filter,
  Calendar,
  Eye,
  Share2,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Activity,
  Zap,
  Target,
  Clock,
  CheckCircle,
} from 'lucide-react'

// ============================================
// TYPES
// ============================================
interface ReportMetric {
  label: string
  value: number | string
  change: number
  trend: 'up' | 'down'
  icon: React.ReactNode
  bgColor: string
  textColor: string
}

interface ChartData {
  name: string
  value: number
}

interface DateRange {
  from: string
  to: string
}

interface ReportFilter {
  dateRange: DateRange
  displayType: 'all' | 'online' | 'offline'
  sortBy: 'name' | 'views' | 'engagement'
}

// ============================================
// METRIC CARD COMPONENT
// ============================================
export const MetricCard: React.FC<{
  metric: ReportMetric
}> = ({ metric }) => {
  const isTrendingUp = metric.trend === 'up'

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-300 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${metric.bgColor}`}>
          <span className={`text-2xl ${metric.textColor}`}>{metric.icon}</span>
        </div>
        <div
          className={`flex items-center gap-1 text-sm font-semibold ${
            isTrendingUp ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {isTrendingUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {Math.abs(metric.change)}%
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-1">{metric.label}</p>
      <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
      <p className="text-xs text-gray-500 mt-2">vs last month</p>
    </div>
  )
}

// ============================================
// SIMPLE BAR CHART COMPONENT
// ============================================
export const SimpleBarChart: React.FC<{
  data: ChartData[]
  title: string
  height?: number
}> = ({ data, title, height = 300 }) => {
  const maxValue = Math.max(...data.map((d) => d.value))
  const colors = ['bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500', 'bg-cyan-500']

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      <div className="space-y-6">
        {data.map((item, idx) => {
          const percentage = (item.value / maxValue) * 100
          return (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{item.name}</span>
                <span className="text-sm font-semibold text-gray-900">{item.value}</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${colors[idx % colors.length]} transition-all duration-500`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ============================================
// PIE CHART COMPONENT (Text-based)
// ============================================
export const SimplePieChart: React.FC<{
  data: ChartData[]
  title: string
}> = ({ data, title }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  const colors = [
    { bg: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-700' },
    { bg: 'bg-indigo-500', light: 'bg-indigo-100', text: 'text-indigo-700' },
    { bg: 'bg-purple-500', light: 'bg-purple-100', text: 'text-purple-700' },
    { bg: 'bg-pink-500', light: 'bg-pink-100', text: 'text-pink-700' },
    { bg: 'bg-cyan-500', light: 'bg-cyan-100', text: 'text-cyan-700' },
  ]

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      <div className="space-y-4">
        {data.map((item, idx) => {
          const percentage = ((item.value / total) * 100).toFixed(1)
          const color = colors[idx % colors.length]

          return (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${color.bg}`}></div>
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  {percentage}% ({item.value})
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${color.bg} transition-all duration-500`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ============================================
// LINE CHART COMPONENT (Text-based)
// ============================================
export const SimpleLineChart: React.FC<{
  data: { month: string; value: number }[]
  title: string
}> = ({ data, title }) => {
  const maxValue = Math.max(...data.map((d) => d.value))
  const minValue = Math.min(...data.map((d) => d.value))

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      <div className="space-y-4">
        {data.map((item, idx) => {
          const percentage = ((item.value - minValue) / (maxValue - minValue)) * 100
          return (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 w-16">{item.month}</span>
                <span className="text-sm font-semibold text-gray-900 flex-1 text-right">
                  {item.value.toLocaleString()}
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ============================================
// REPORT TABLE COMPONENT
// ============================================
export const ReportTable: React.FC<{
  data: any[]
  columns: string[]
  title: string
}> = ({ data, columns, title }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                {columns.map((col) => (
                  <td key={`${idx}-${col}`} className="px-6 py-4 text-sm text-gray-900">
                    {row[col.toLowerCase()] || row[col] || '-'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ============================================
// FILTER BAR COMPONENT
// ============================================
export const ReportFilterBar: React.FC<{
  filters: ReportFilter
  onFilterChange: (filters: ReportFilter) => void
  onExport: () => void
}> = ({ filters, onFilterChange, onExport }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4 items-end">
        {/* Date Range */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-900 mb-2">Date Range</label>
          <div className="flex gap-2">
            <input
              type="date"
              value={filters.dateRange.from}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  dateRange: { ...filters.dateRange, from: e.target.value },
                })
              }
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <span className="flex items-center text-gray-500">→</span>
            <input
              type="date"
              value={filters.dateRange.to}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  dateRange: { ...filters.dateRange, to: e.target.value },
                })
              }
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Display Type */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-900 mb-2">Display Type</label>
          <select
            value={filters.displayType}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                displayType: e.target.value as any,
              })
            }
            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="all">All Displays</option>
            <option value="online">Online Only</option>
            <option value="offline">Offline Only</option>
          </select>
        </div>

        {/* Sort By */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-900 mb-2">Sort By</label>
          <select
            value={filters.sortBy}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                sortBy: e.target.value as any,
              })
            }
            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="name">Name</option>
            <option value="views">Views</option>
            <option value="engagement">Engagement</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={onExport}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm"
          >
            <Download size={18} />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
            <Filter size={18} />
            More Filters
          </button>
        </div>
      </div>
    </div>
  )
}

// ============================================
// REPORT CARD COMPONENT
// ============================================
export const ReportCard: React.FC<{
  title: string
  description: string
  icon: React.ReactNode
  onClick: () => void
  metrics: { label: string; value: string | number }[]
}> = ({ title, description, icon, onClick, metrics }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3">
          <div className="p-3 bg-blue-50 rounded-lg text-blue-600">{icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <MoreVertical size={18} className="text-gray-400" />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
        {metrics.map((metric, idx) => (
          <div key={idx}>
            <p className="text-xs text-gray-500 mb-1">{metric.label}</p>
            <p className="text-lg font-bold text-gray-900">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================
// MAIN REPORTS PAGE COMPONENT
// ============================================
export const Reports: React.FC = () => {
  const [activeReport, setActiveReport] = useState<string>('overview')
  const [filters, setFilters] = useState<ReportFilter>({
    dateRange: {
      from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      to: new Date().toISOString().split('T')[0],
    },
    displayType: 'all',
    sortBy: 'name',
  })

  // Mock data
  const metrics: ReportMetric[] = [
    {
      label: 'Total Displays',
      value: 248,
      change: 12,
      trend: 'up',
      icon: '📺',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
    },
    {
      label: 'Total Views',
      value: '1.2M',
      change: 23,
      trend: 'up',
      icon: '👁️',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
    },
    {
      label: 'Engagement Rate',
      value: '68%',
      change: 5,
      trend: 'up',
      icon: '⚡',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
    },
    {
      label: 'Avg. Uptime',
      value: '99.5%',
      change: 2,
      trend: 'down',
      icon: '⏱️',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
    },
  ]

  const displayMetrics = [
    { name: 'Online', value: 234 },
    { name: 'Offline', value: 14 },
    { name: 'Maintenance', value: 0 },
  ]

  const locationMetrics = [
    { name: 'Floor 1', value: 45 },
    { name: 'Floor 2', value: 62 },
    { name: 'Floor 3', value: 51 },
    { name: 'Lobby', value: 38 },
    { name: 'Conference', value: 52 },
  ]

  const timeSeriesData = [
    { month: 'Jan', value: 45000 },
    { month: 'Feb', value: 52000 },
    { month: 'Mar', value: 48000 },
    { month: 'Apr', value: 61000 },
    { month: 'May', value: 55000 },
    { month: 'Jun', value: 67000 },
    { month: 'Jul', value: 72000 },
  ]

  const topDisplays = [
    {
      name: 'Lobby Display',
      location: 'Main Entrance',
      views: '45,234',
      engagement: '78%',
      status: 'Online',
    },
    {
      name: 'Conference Room A',
      location: 'Floor 3',
      views: '38,912',
      engagement: '65%',
      status: 'Online',
    },
    {
      name: 'Cafeteria Screen',
      location: 'Floor 2',
      views: '32,156',
      engagement: '72%',
      status: 'Online',
    },
    {
      name: 'Break Room TV',
      location: 'Floor 4',
      views: '28,734',
      engagement: '58%',
      status: 'Offline',
    },
    {
      name: 'Reception Display',
      location: 'Lobby',
      views: '25,123',
      engagement: '81%',
      status: 'Online',
    },
  ]

  const handleExport = () => {
    alert('Export functionality would download CSV/PDF report')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
              <Share2 size={18} />
              Share Report
            </button>
          </div>
          <p className="text-gray-600">View detailed analytics and performance metrics</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Report Type Selector */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'displays', label: 'Displays', icon: '📺' },
            { id: 'engagement', label: 'Engagement', icon: '⚡' },
            { id: 'performance', label: 'Performance', icon: '📈' },
            { id: 'custom', label: 'Custom Report', icon: '⚙️' },
          ].map((report) => (
            <button
              key={report.id}
              onClick={() => setActiveReport(report.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                activeReport === report.id
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              <span>{report.icon}</span>
              {report.label}
            </button>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, idx) => (
            <MetricCard key={idx} metric={metric} />
          ))}
        </div>

        {/* Filter Bar */}
        <ReportFilterBar
          filters={filters}
          onFilterChange={setFilters}
          onExport={handleExport}
        />

        {activeReport === 'overview' && (
          <div className="space-y-8">
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <SimpleBarChart data={displayMetrics} title="Display Status" />
              <SimplePieChart data={locationMetrics} title="Displays by Location" />
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Total Reports</span>
                    <span className="text-2xl font-bold text-gray-900">127</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Avg Response Time</span>
                    <span className="text-2xl font-bold text-gray-900">245ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Data Accuracy</span>
                    <span className="text-2xl font-bold text-gray-900">99.9%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Series */}
            <SimpleLineChart
              data={timeSeriesData}
              title="Views Over Time (Last 7 Months)"
            />

            {/* Table */}
            <ReportTable
              title="Top Performing Displays"
              columns={['Name', 'Location', 'Views', 'Engagement', 'Status']}
              data={topDisplays}
            />
          </div>
        )}

        {activeReport === 'displays' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SimpleBarChart
                data={locationMetrics}
                title="Displays by Location"
              />
              <SimplePieChart
                data={[
                  { name: '4K Resolution', value: 180 },
                  { name: 'Full HD', value: 52 },
                  { name: 'HD', value: 16 },
                ]}
                title="Display Resolution Distribution"
              />
            </div>
            <ReportTable
              title="All Displays"
              columns={['Name', 'Location', 'Views', 'Engagement', 'Status']}
              data={topDisplays}
            />
          </div>
        )}

        {activeReport === 'engagement' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SimpleLineChart
                data={timeSeriesData}
                title="Engagement Trend"
              />
              <SimplePieChart
                data={[
                  { name: 'High Engagement', value: 145 },
                  { name: 'Medium Engagement', value: 78 },
                  { name: 'Low Engagement', value: 25 },
                ]}
                title="Engagement Levels"
              />
            </div>
          </div>
        )}

        {activeReport === 'performance' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SimpleBarChart
                data={[
                  { name: 'Response Time', value: 245 },
                  { name: 'Load Time', value: 128 },
                  { name: 'Uptime %', value: 99.5 },
                ]}
                title="Performance Metrics"
              />
              <SimplePieChart
                data={[
                  { name: 'Excellent', value: 198 },
                  { name: 'Good', value: 38 },
                  { name: 'Fair', value: 12 },
                ]}
                title="Performance Status"
              />
            </div>
          </div>
        )}

        {activeReport === 'custom' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
              <BarChart3 size={48} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Create Custom Report
              </h3>
              <p className="text-gray-600 mb-6">
                Select metrics and dimensions to build your custom report
              </p>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
                Build Custom Report
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Reports