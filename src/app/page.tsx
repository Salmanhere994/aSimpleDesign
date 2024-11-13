
'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'

const checklistItems = [
  'Ensure Typeface Efficiency',
  'Standardize Figma Type Styles',
  'Adopt Fluid Type Styles',
  'Unified Naming Convention',
  'Consolidate Similar Type Styles',
  'Unused Style Cleanup',
  'Documentation and Style Guide'
]

export default function DeveloperChecklist() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="max-w-md">
        <div className="mb-4">
          <svg className="w-12 h-12 text-green-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-2">Developer <span className="text-green-400">Checklist</span></h1>
        <p className="text-gray-400 mb-6">Simple and easy to use checklist to take</p>
        <h2 className="text-xl font-semibold mb-2">Checklist Include</h2>
        <ul className="list-disc list-inside text-gray-400">
          <li>Typography</li>
          <li>Colour</li>
          <li>Spacing</li>
          <li>Component</li>
          <li>Documentation</li>
        </ul>
      </div>
      <div className="bg-gray-900 rounded-3xl p-6 max-w-md w-full">
        <div className="bg-white text-black rounded-full px-4 py-2 inline-block mb-4">
          <p className="text-sm">A Product by designwith</p>
        </div>
        <div className="flex justify-between items-center mb-6">
          <button className="text-gray-400 hover:text-white">
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-xl font-semibold">Typography</h2>
          <button className="text-gray-400 hover:text-white">
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="space-y-3">
          {checklistItems.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden">
              <button
                className="w-full px-4 py-3 flex justify-between items-center text-left"
                onClick={() => setExpandedItem(expandedItem === index ? null : index)}
              >
                <span>{item}</span>
                <ChevronDown
                  size={20}
                  className={`transform transition-transform ${
                    expandedItem === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedItem === index && (
                <div className="px-4 py-3 bg-gray-700">
                  <p className="text-sm text-gray-300">
                    Additional information about {item.toLowerCase()} goes here.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}