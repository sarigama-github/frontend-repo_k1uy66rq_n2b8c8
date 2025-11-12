import React from 'react'

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-sky-500" />
        <div>
          <p className="text-sm text-gray-500">Flames Quant</p>
          <h1 className="text-lg font-semibold">Terminal</h1>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <input className="px-3 py-2 rounded-md border bg-white w-72 text-sm" placeholder="Search symbols, strategies, datasets..." />
        <button className="px-3 py-2 rounded-md bg-gray-900 text-white text-sm">Search</button>
      </div>
    </div>
  )
}
