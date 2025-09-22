"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

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

// Mock data for dashboard
const mockData = {
  farms: [
    {
      id: 1,
      name: "North Field",
      acres: 120,
      cropHealth: 85,
      soilMoisture: 72,
      lastUpdated: "2 hours ago",
    },
    {
      id: 2,
      name: "South Valley",
      acres: 85,
      cropHealth: 92,
      soilMoisture: 68,
      lastUpdated: "4 hours ago",
    },
  ],
  dailyTasks: [
    { id: 1, task: "Check irrigation system - North Field", priority: "high", completed: false },
    { id: 2, task: "Apply fertilizer - South Valley", priority: "medium", completed: true },
    { id: 3, task: "Monitor pest levels - All fields", priority: "low", completed: false },
    { id: 4, task: "Harvest corn - North Field", priority: "high", completed: false },
  ],
  aiInsights: [
    {
      title: "Weather Alert",
      message: "Rain expected in 2 days. Consider adjusting irrigation schedule.",
      type: "warning",
    },
    {
      title: "Crop Health",
      message: "North Field showing signs of nutrient deficiency. Recommend soil test.",
      type: "info",
    },
    {
      title: "Yield Prediction",
      message: "Current conditions suggest 15% increase in yield this season.",
      type: "success",
    },
  ],
}

export default function Dashboard() {
  const [tasks, setTasks] = useState(mockData.dailyTasks)

  const toggleTask = (taskId: number) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)))
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-[#37322F] text-white"
      case "medium":
        return "bg-[rgba(55,50,47,0.1)] text-[#37322F]"
      case "low":
        return "bg-[rgba(55,50,47,0.05)] text-[rgba(55,50,47,0.8)]"
      default:
        return "bg-[rgba(55,50,47,0.05)] text-[rgba(55,50,47,0.8)]"
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
    <div className="min-h-screen bg-[#F7F5F3] overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F7F5F3]/60">
        <div className="w-full max-w-[1060px] mx-auto flex h-16 items-center px-4 lg:px-0">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2 min-h-[44px] min-w-[44px] justify-center">
              <svg className="w-6 h-6 text-[#37322F]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
              </svg>
              <span className="font-bold text-lg sm:text-xl text-[#37322F]">FarmSight</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <button className="px-3 py-1.5 bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center hover:shadow-[0px_2px_4px_rgba(55,50,47,0.16)] transition-shadow min-h-[44px] min-w-[44px]">
              <svg className="w-5 h-5 text-[#37322F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 7H4l5-5v5z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="w-full max-w-[1060px] mx-auto px-4 lg:px-0 py-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#37322F] font-sans">Good morning, John</h1>
          <p className="text-[rgba(55,50,47,0.80)] text-sm sm:text-base font-sans">
            Here's what's happening on your farms today
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mockData.farms.map((farm) => (
            <div
              key={farm.id}
              className="bg-white shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08)] overflow-hidden rounded-[8px] cursor-pointer hover:shadow-[0px_2px_8px_rgba(55,50,47,0.12)] transition-shadow active:scale-[0.98] transition-transform"
            >
              <Link href={`/farm/${farm.id}`} className="block">
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#37322F] font-sans">{farm.name}</h3>
                    <div className="px-[10px] py-[4px] bg-[rgba(55,50,47,0.05)] rounded-[20px] border border-[rgba(55,50,47,0.08)]">
                      <span className="text-xs sm:text-sm text-[#37322F] font-medium font-sans">
                        {farm.acres} acres
                      </span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[rgba(55,50,47,0.60)] font-sans mb-4">
                    Updated {farm.lastUpdated}
                  </p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#37322F] font-medium font-sans">Crop Health</span>
                        <span className="font-semibold text-[#37322F] font-sans">{farm.cropHealth}%</span>
                      </div>
                      <Progress value={farm.cropHealth} className="h-2 bg-[rgba(55,50,47,0.08)]" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#37322F] font-medium font-sans">Soil Moisture</span>
                        <span className="font-semibold text-[#37322F] font-sans">{farm.soilMoisture}%</span>
                      </div>
                      <Progress value={farm.soilMoisture} className="h-2 bg-[rgba(55,50,47,0.08)]" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08)] overflow-hidden rounded-[8px]">
          <div className="p-5 sm:p-6 border-b border-[rgba(55,50,47,0.08)]">
            <h2 className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-[#37322F] font-sans">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              Daily Tasks
            </h2>
          </div>
          <div className="p-5 sm:p-6 space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center space-x-3 p-4 rounded-[8px] border border-[rgba(55,50,47,0.08)] bg-[#F7F5F3] hover:bg-[rgba(55,50,47,0.02)] transition-colors active:bg-[rgba(55,50,47,0.05)]"
              >
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors min-h-[44px] min-w-[44px] ${
                    task.completed
                      ? "bg-[#37322F] border-[#37322F] text-white"
                      : "border-[rgba(55,50,47,0.3)] hover:border-[#37322F]"
                  }`}
                >
                  {task.completed && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm sm:text-base font-medium font-sans ${task.completed ? "line-through text-[rgba(55,50,47,0.5)]" : "text-[#37322F]"}`}
                  >
                    {task.task}
                  </p>
                </div>
                <div
                  className={`px-[10px] py-[4px] rounded-[20px] text-xs font-medium font-sans ${getPriorityColor(task.priority)}`}
                >
                  {task.priority}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08)] overflow-hidden rounded-[8px]">
          <div className="p-5 sm:p-6 border-b border-[rgba(55,50,47,0.08)]">
            <h2 className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-[#37322F] font-sans">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              AI Insights
            </h2>
          </div>
          <div className="p-5 sm:p-6 space-y-4">
            {mockData.aiInsights.map((insight, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-[8px] border border-[rgba(55,50,47,0.08)] bg-[#F7F5F3]"
              >
                <div className="flex-shrink-0 mt-0.5">{getInsightIcon(insight.type)}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-semibold text-[#37322F] font-sans">{insight.title}</h4>
                  <p className="text-sm text-[rgba(55,50,47,0.70)] font-sans mt-1">{insight.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button className="h-20 sm:h-24 flex-col space-y-2 min-h-[80px] active:scale-95 transition-transform bg-white shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08)] overflow-hidden rounded-[8px] flex justify-center items-center hover:shadow-[0px_2px_8px_rgba(55,50,47,0.12)] transition-shadow">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#37322F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="text-xs sm:text-sm font-medium text-[#37322F] font-sans">Add Farm</span>
          </button>
          <button className="h-20 sm:h-24 flex-col space-y-2 min-h-[80px] active:scale-95 transition-transform bg-white shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08)] overflow-hidden rounded-[8px] flex justify-center items-center hover:shadow-[0px_2px_8px_rgba(55,50,47,0.12)] transition-shadow">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#37322F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span className="text-xs sm:text-sm font-medium text-[#37322F] font-sans">Reports</span>
          </button>
          <button className="h-20 sm:h-24 flex-col space-y-2 min-h-[80px] active:scale-95 transition-transform bg-white shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08)] overflow-hidden rounded-[8px] flex justify-center items-center hover:shadow-[0px_2px_8px_rgba(55,50,47,0.12)] transition-shadow">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#37322F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs sm:text-sm font-medium text-[#37322F] font-sans">Settings</span>
          </button>
          <button className="h-20 sm:h-24 flex-col space-y-2 min-h-[80px] active:scale-95 transition-transform bg-white shadow-[0px_0px_0px_0.9px_rgba(0,0,0,0.08)] overflow-hidden rounded-[8px] flex justify-center items-center hover:shadow-[0px_2px_8px_rgba(55,50,47,0.12)] transition-shadow">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#37322F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xs sm:text-sm font-medium text-[#37322F] font-sans">Help</span>
          </button>
        </div>
      </main>
    </div>
  )
}
