import React, { useEffect, useState } from 'react'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Overview() {
  const [stats, setStats] = useState(null)
  const [watch, setWatch] = useState([])
  const [symbol, setSymbol] = useState('AAPL')

  useEffect(() => {
    fetch(`${backend}/test`).then(r => r.json()).then(setStats).catch(() => {})
    fetch(`${backend}/api/watchlist`).then(r => r.json()).then(setWatch).catch(() => {})
  }, [])

  const addSymbol = async (e) => {
    e.preventDefault()
    const res = await fetch(`${backend}/api/watchlist`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ symbol, note: null, group: 'Default' }) })
    if (res.ok) {
      const list = await fetch(`${backend}/api/watchlist`).then(r => r.json())
      setWatch(list)
      setSymbol('')
    }
  }

  return (
    <div className="p-4 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="rounded-lg border p-4 bg-white">
          <p className="text-xs text-gray-500">Backend</p>
          <p className="text-lg font-semibold">{stats ? stats.backend : '...'}</p>
        </div>
        <div className="rounded-lg border p-4 bg-white">
          <p className="text-xs text-gray-500">Database</p>
          <p className="text-lg font-semibold">{stats ? stats.database : '...'}</p>
        </div>
        <div className="rounded-lg border p-4 bg-white">
          <p className="text-xs text-gray-500">Collections</p>
          <p className="text-lg font-semibold">{stats ? stats.collections?.length : '...'}</p>
        </div>
      </div>

      <div className="rounded-lg border bg-white">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold">Watchlist</h3>
          <form onSubmit={addSymbol} className="flex items-center gap-2">
            <input value={symbol} onChange={e => setSymbol(e.target.value)} placeholder="Add symbol..." className="px-3 py-2 rounded-md border text-sm" />
            <button className="px-3 py-2 rounded-md bg-gray-900 text-white text-sm">Add</button>
          </form>
        </div>
        <div className="divide-y">
          {watch.length === 0 && (
            <div className="p-4 text-sm text-gray-500">No symbols yet. Add your first one.</div>
          )}
          {watch.map((w, i) => (
            <div key={i} className="p-4 flex items-center justify-between">
              <div className="font-mono">{w.symbol}</div>
              <div className="text-xs text-gray-500">{w.group}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
