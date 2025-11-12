import React from 'react'
import Header from './components/Header'
import LeftNav from './components/LeftNav'
import Overview from './components/Overview'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <Header />
      <div className="flex">
        <LeftNav />
        <div className="flex-1">
          <Overview />
        </div>
      </div>
    </div>
  )
}
