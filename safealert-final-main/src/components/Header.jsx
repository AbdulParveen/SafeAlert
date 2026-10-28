import ModeToggle from './ModeToggle'

export default function Header({ onRefresh, loading, lastUpdated, mode, setMode }) {
  return (
    <header className="flex items-center justify-between gap-4 px-5 py-4 bg-slate-950 border-b border-slate-800 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20">
          <span className="text-2xl">🌎</span>
        </div>

        <div>
          <h1 className="text-lg font-bold text-white leading-tight">
            SafeAlert
          </h1>

          <p
            className="text-xs text-slate-400 leading-tight mt-0.5"
            title="SafeAlert aggregates publicly available disaster and natural-event data from trusted sources."
          >
            Real-Time Disaster & Natural Event Monitoring
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <ModeToggle mode={mode} setMode={setMode} />

        {mode === 'disasters' && (
          <>
            {lastUpdated && (
              <span className="hidden sm:inline text-xs text-slate-500">
                Updated {lastUpdated}
              </span>
            )}

            <button
              onClick={onRefresh}
              disabled={loading}
              className="flex items-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white text-sm font-medium px-3 py-2 transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/10"
            >
              <span className={loading ? 'animate-spin' : ''}>⟳</span>
              {loading ? 'Refreshing…' : 'Refresh'}
            </button>
          </>
        )}
      </div>
    </header>
  )
}