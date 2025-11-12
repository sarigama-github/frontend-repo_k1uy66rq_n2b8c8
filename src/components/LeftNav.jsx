import React from 'react'
import { Home, LineChart, ListTree, Braces, Layers, Database, FlaskConical, Settings } from 'lucide-react'

const NavItem = ({ icon: Icon, label, active }) => (
  <div className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer text-sm hover:bg-gray-100 ${active ? 'bg-gray-900 text-white hover:bg-gray-900' : ''}`}>
    <Icon size={18} />
    <span>{label}</span>
  </div>
)

export default function LeftNav() {
  return (
    <div className="w-56 border-r bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 p-3 space-y-2">
      <NavItem icon={Home} label="Overview" active />
      <NavItem icon={LineChart} label="Markets" />
      <NavItem icon={ListTree} label="Watchlists" />
      <NavItem icon={Layers} label="Datasets" />
      <NavItem icon={Braces} label="Strategies" />
      <NavItem icon={FlaskConical} label="Backtests" />
      <NavItem icon={Database} label="Research" />
      <div className="pt-2 border-t" />
      <NavItem icon={Settings} label="Settings" />
    </div>
  )
}
