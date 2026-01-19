import { useState } from 'react'

import exerciseData from '../exercises.json'; // Adjust path as needed

function App() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 font-sans">
      <div className="max-w-md mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-black tracking-tighter text-blue-500 uppercase">
            Strength Creator
          </h1>
          <p className="text-slate-400 text-sm mt-2">Pick your movement pattern</p>
        </header>

        <main className="space-y-4">
          {exerciseData.map((ex) => (
            <button
              key={ex.id}
              onClick={() => setSelected(ex.name === selected ? null : ex.name)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                selected === ex.name 
                ? "border-blue-500 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.2)]" 
                : "border-slate-800 bg-slate-900 hover:border-slate-700"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                    {ex.pattern}
                  </span>
                  <h2 className="text-xl font-bold">{ex.name}</h2>
                </div>
                <div className={`h-3 w-3 rounded-full ${selected === ex.name ? "bg-blue-500" : "bg-slate-700"}`} />
              </div>

              {/* Expandable Cues Section */}
              {selected === ex.name && (
                <div className="mt-4 pt-4 border-t border-blue-500/30 animate-in fade-in slide-in-from-top-1">
                  <p className="text-sm font-semibold mb-2 text-slate-300">Technical Cues:</p>
                  <ul className="list-disc list-inside text-sm text-slate-400 space-y-1">
                    {ex.cues.map((cue, i) => (
                      <li key={i}>{cue}</li>
                    ))}
                  </ul>
                </div>
              )}
            </button>
          ))}
        </main>
      </div>
    </div>
  )
}

export default App