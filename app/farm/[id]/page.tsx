"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

// Mock farm data
const mockFarmData = {
  1: {
    id: 1,
    name: "North Field",
    location: "Section A, Plot 12",
    acres: 120,
    cropType: "Corn",
    plantingDate: "March 15, 2024",
    expectedHarvest: "September 20, 2024",
    cropHealth: 85,
    soilMoisture: 72,
    temperature: 24,
    humidity: 65,
    lastIrrigation: "2 days ago",
    fertilizer: "Applied 1 week ago",
    pestControl: "No recent application",
    logs: [
      {
        id: 1,
        date: "2024-01-15",
        activity: "Planting",
        notes: "Planted corn seeds in rows 30cm apart",
        weather: "Sunny, 22°C",
      },
      {
        id: 2,
        date: "2024-01-20",
        activity: "Irrigation",
        notes: "Applied 2 inches of water via sprinkler system",
        weather: "Partly cloudy, 25°C",
      },
      {
        id: 3,
        date: "2024-01-25",
        activity: "Fertilizer",
        notes: "Applied nitrogen-rich fertilizer at 150kg/hectare",
        weather: "Overcast, 20°C",
      },
    ],
  },
  2: {
    id: 2,
    name: "South Valley",
    location: "Section B, Plot 8",
    acres: 85,
    cropType: "Wheat",
    plantingDate: "February 28, 2024",
    expectedHarvest: "August 15, 2024",
    cropHealth: 92,
    soilMoisture: 68,
    temperature: 26,
    humidity: 58,
    lastIrrigation: "1 day ago",
    fertilizer: "Applied 3 days ago",
    pestControl: "Applied 1 week ago",
    logs: [
      {
        id: 1,
        date: "2024-01-10",
        activity: "Soil Preparation",
        notes: "Tilled soil and added organic compost",
        weather: "Clear, 18°C",
      },
      {
        id: 2,
        date: "2024-01-18",
        activity: "Planting",
        notes: "Seeded wheat at optimal density",
        weather: "Light rain, 16°C",
      },
    ],
  },
}

const aiInsights = [
  {
    title: "Optimal Harvest Window",
    message: "Based on current growth rate and weather patterns, harvest window is September 18-22.",
    type: "success",
    confidence: 94,
  },
  {
    title: "Irrigation Recommendation",
    message: "Soil moisture is adequate. Next irrigation recommended in 3-4 days.",
    type: "info",
    confidence: 87,
  },
  {
    title: "Pest Risk Alert",
    message: "Weather conditions favorable for corn borer. Monitor closely next week.",
    type: "warning",
    confidence: 76,
  },
]

export default function FarmDetails() {
  const params = useParams()
  const farmId = params.id as string
  const farm = mockFarmData[farmId as keyof typeof mockFarmData]

  const [logs, setLogs] = useState(farm?.logs || [])
  const [newLog, setNewLog] = useState({
    activity: "",
    notes: "",
    weather: "",
  })
  const [showLogForm, setShowLogForm] = useState(false)

  if (!farm) {
    return (
      <div className="min-h-screen bg-[#F7F5F3] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#37322F] font-sans mb-2">Farm not found</h1>
          <Link href="/dashboard">
            <button className="px-6 py-3 bg-[#37322F] text-white rounded-full hover:bg-[#2A2520] transition-colors font-medium font-sans">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    )
  }

  const handleAddLog = () => {
    if (newLog.activity && newLog.notes) {
      const log = {
        id: logs.length + 1,
        date: new Date().toISOString().split("T")[0],
        activity: newLog.activity,
        notes: newLog.notes,
        weather: newLog.weather || "Not recorded",
      }
      setLogs([log, ...logs])
      setNewLog({ activity: "", notes: "", weather: "" })
      setShowLogForm(false)
    }
  }

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "warning":
        return (
          <svg className="w-5 h-5 text-[#D97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        )
      case "success":
        return (
          <svg className="w-5 h-5 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )
      default:
        return (
          <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F5F3]">
      <header className="sticky top-0 z-50 w-full border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F7F5F3]/60">
        <div className="w-full max-w-[1060px] mx-auto flex h-14 items-center px-4 lg:px-0">
          <div className="flex items-center space-x-2">
            <Link href="/dashboard" className="flex items-center space-x-2 min-h-[44px] px-2">
              <svg className="w-5 h-5 text-[#37322F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium text-[#37322F] font-sans">Back</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <h1 className="font-bold text-lg text-[#37322F] font-sans">{farm.name}</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1.5 bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center hover:shadow-[0px_2px_4px_rgba(55,50,47,0.16)] transition-shadow min-h-[44px] min-w-[44px]">
              <svg className="w-4 h-4 text-[#37322F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="w-full max-w-[1060px] mx-auto px-4 lg:px-0 py-6 space-y-6">
        <div className="bg-white shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08)] overflow-hidden rounded-[8px]">
          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-[#37322F] font-sans">{farm.name}</h2>
              <div className="px-[10px] py-[4px] bg-[rgba(55,50,47,0.05)] rounded-[20px] border border-[rgba(55,50,47,0.08)]">
                <span className="text-sm text-[#37322F] font-medium font-sans">{farm.acres} acres</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-[rgba(55,50,47,0.70)] font-sans">
              <div>
                <span className="font-medium text-[#37322F]">Location:</span> {farm.location}
              </div>
              <div>
                <span className="font-medium text-[#37322F]">Crop:</span> {farm.cropType}
              </div>
              <div>
                <span className="font-medium text-[#37322F]">Planted:</span> {farm.plantingDate}
              </div>
              <div>
                <span className="font-medium text-[#37322F]">Harvest:</span> {farm.expectedHarvest}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08)] overflow-hidden rounded-[8px] p-4">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <p className="text-2xl font-bold text-[#37322F] font-sans">{farm.cropHealth}%</p>
                <p className="text-xs text-[rgba(55,50,47,0.60)] font-sans">Crop Health</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08)] overflow-hidden rounded-[8px] p-4">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
              <div>
                <p className="text-2xl font-bold text-[#37322F] font-sans">{farm.soilMoisture}%</p>
                <p className="text-xs text-[rgba(55,50,47,0.60)] font-sans">Soil Moisture</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08)] overflow-hidden rounded-[8px] p-4">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#D97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <div>
                <p className="text-2xl font-bold text-[#37322F] font-sans">{farm.temperature}°C</p>
                <p className="text-xs text-[rgba(55,50,47,0.60)] font-sans">Temperature</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08)] overflow-hidden rounded-[8px] p-4">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#0891B2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
              <div>
                <p className="text-2xl font-bold text-[#37322F] font-sans">{farm.humidity}%</p>
                <p className="text-xs text-[rgba(55,50,47,0.60)] font-sans">Humidity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Farm Management Status */}
        <div className="bg-white shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08)] overflow-hidden rounded-[8px]">
          <div className="p-5 sm:p-6 border-b border-[rgba(55,50,47,0.08)]">
            <h3 className="font-semibold text-[#37322F] font-sans">Farm Management Status</h3>
          </div>
          <div className="p-5 sm:p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-3 rounded-[8px] border border-[rgba(55,50,47,0.08)] bg-[#F7F5F3]">
                <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
                <div>
                  <p className="font-medium text-sm text-[#37322F] font-sans">Last Irrigation</p>
                  <p className="text-xs text-[rgba(55,50,47,0.60)] font-sans">{farm.lastIrrigation}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-[8px] border border-[rgba(55,50,47,0.08)] bg-[#F7F5F3]">
                <svg className="w-5 h-5 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-sm text-[#37322F] font-sans">Fertilizer</p>
                  <p className="text-xs text-[rgba(55,50,47,0.60)] font-sans">{farm.fertilizer}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded-[8px] border border-[rgba(55,50,47,0.08)] bg-[#F7F5F3]">
                <svg className="w-5 h-5 text-[#DC2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-sm text-[#37322F] font-sans">Pest Control</p>
                  <p className="text-xs text-[rgba(55,50,47,0.60)] font-sans">{farm.pestControl}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-white shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08)] overflow-hidden rounded-[8px]">
          <div className="p-5 sm:p-6 border-b border-[rgba(55,50,47,0.08)]">
            <h3 className="flex items-center gap-2 font-semibold text-[#37322F] font-sans">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              AI Insights for {farm.name}
            </h3>
          </div>
          <div className="p-5 sm:p-6 space-y-4">
            {aiInsights.map((insight, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-[8px] border border-[rgba(55,50,47,0.08)] bg-[#F7F5F3]"
              >
                <div className="flex-shrink-0 mt-0.5">{getInsightIcon(insight.type)}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-semibold text-[#37322F] font-sans">{insight.title}</h4>
                    <div className="px-[8px] py-[2px] bg-[rgba(55,50,47,0.05)] rounded-[12px] border border-[rgba(55,50,47,0.08)]">
                      <span className="text-xs text-[#37322F] font-medium font-sans">
                        {insight.confidence}% confidence
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[rgba(55,50,47,0.70)] font-sans">{insight.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Logs */}
        <div className="bg-white shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08)] overflow-hidden rounded-[8px]">
          <div className="p-5 sm:p-6 border-b border-[rgba(55,50,47,0.08)]">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-semibold text-[#37322F] font-sans">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                Daily Logs
              </h3>
              <button
                onClick={() => setShowLogForm(!showLogForm)}
                className="px-4 py-2 bg-[#37322F] text-white rounded-full hover:bg-[#2A2520] transition-colors font-medium font-sans text-sm min-h-[44px]"
              >
                {showLogForm ? "Cancel" : "Add Log"}
              </button>
            </div>
          </div>
          <div className="p-5 sm:p-6 space-y-4">
            {/* Add Log Form */}
            {showLogForm && (
              <div className="p-4 border border-[rgba(55,50,47,0.08)] rounded-[8px] bg-[rgba(55,50,47,0.02)] space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#37322F] font-sans">Activity</label>
                  <input
                    placeholder="e.g., Irrigation, Fertilizer, Pest Control"
                    value={newLog.activity}
                    onChange={(e) => setNewLog({ ...newLog, activity: e.target.value })}
                    className="w-full px-3 py-2 border border-[rgba(55,50,47,0.12)] rounded-[6px] bg-white text-[#37322F] font-sans min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#37322F] focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#37322F] font-sans">Notes</label>
                  <textarea
                    placeholder="Describe the activity and any observations..."
                    value={newLog.notes}
                    onChange={(e) => setNewLog({ ...newLog, notes: e.target.value })}
                    className="w-full px-3 py-2 border border-[rgba(55,50,47,0.12)] rounded-[6px] bg-white text-[#37322F] font-sans min-h-[80px] resize-none focus:outline-none focus:ring-2 focus:ring-[#37322F] focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#37322F] font-sans">Weather Conditions (Optional)</label>
                  <input
                    placeholder="e.g., Sunny, 25°C"
                    value={newLog.weather}
                    onChange={(e) => setNewLog({ ...newLog, weather: e.target.value })}
                    className="w-full px-3 py-2 border border-[rgba(55,50,47,0.12)] rounded-[6px] bg-white text-[#37322F] font-sans min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#37322F] focus:border-transparent"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleAddLog}
                    className="flex-1 px-4 py-2 bg-[#37322F] text-white rounded-full hover:bg-[#2A2520] transition-colors font-medium font-sans min-h-[44px]"
                  >
                    Save Log
                  </button>
                  <button
                    onClick={() => setShowLogForm(false)}
                    className="px-4 py-2 bg-white border border-[rgba(55,50,47,0.12)] text-[#37322F] rounded-full hover:bg-[rgba(55,50,47,0.02)] transition-colors font-medium font-sans min-h-[44px]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Log Entries */}
            <div className="space-y-3">
              {logs.map((log) => (
                <div key={log.id} className="p-4 border border-[rgba(55,50,47,0.08)] rounded-[8px] bg-[#F7F5F3]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="px-[8px] py-[2px] bg-[rgba(55,50,47,0.1)] rounded-[12px]">
                      <span className="text-xs text-[#37322F] font-medium font-sans">{log.activity}</span>
                    </div>
                    <span className="text-xs text-[rgba(55,50,47,0.60)] font-sans">{log.date}</span>
                  </div>
                  <p className="text-sm text-[#37322F] font-sans mb-2">{log.notes}</p>
                  <div className="flex items-center text-xs text-[rgba(55,50,47,0.60)] font-sans">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                    {log.weather}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
