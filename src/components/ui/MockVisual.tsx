import type { Project } from '@/types'

type VisualType = Project['visual']

export function MockVisual({ type }: { type: VisualType }) {
  const wrapperClass = `viz-${type.replace('viz', '')} absolute inset-0 flex items-center justify-center`

  if (type === 'viz3') {
    return (
      <div className={wrapperClass}>
        <div className="w-[45%] bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.10)] overflow-hidden flex flex-col" style={{ aspectRatio: '9/16' }}>
          <div className="h-8 bg-gray-brand-100 rounded-t-2xl flex items-center justify-center flex-shrink-0">
            <div className="w-[60px] h-1 bg-gray-brand-200 rounded-full" />
          </div>
          <div className="flex-1 p-3 flex flex-col gap-2">
            <div className="h-1.5 w-[55%] bg-ink rounded-sm" />
            <div className="h-1 w-[80%] bg-gray-brand-200 rounded-sm" />
            <div className="h-10 bg-gray-brand-100 rounded-md mt-1" />
            <div className="h-10 bg-gray-brand-100 rounded-md" />
            <div className="flex-1" />
            <div className="h-9 bg-accent rounded-lg opacity-85" />
          </div>
        </div>
      </div>
    )
  }

  if (type === 'viz4') {
    return (
      <div className={wrapperClass}>
        <MockScreen>
          <div className="flex gap-2 mb-1">
            {[0.25, 0.15, 0.4].map((op, i) => (
              <div key={i} className="flex-1 h-9 bg-gray-brand-100 rounded border border-gray-brand-200 flex items-end p-2">
                <div className="w-full rounded-sm" style={{ height: `${[60,80,45][i]}%`, background: i === 1 ? '#0F111B' : '#4427ED', opacity: op }} />
              </div>
            ))}
          </div>
          <div className="h-10 bg-gray-brand-100 rounded border border-gray-brand-200 p-2 flex items-center gap-1.5">
            <div className="flex-1 h-1 bg-gray-brand-200 rounded" />
            <div className="w-[30%] h-1 rounded" style={{ background: '#4427ED', opacity: 0.5 }} />
          </div>
        </MockScreen>
      </div>
    )
  }

  if (type === 'viz2') {
    return (
      <div className={wrapperClass}>
        <MockScreen>
          <div className="grid grid-cols-2 gap-2 h-full">
            <div className="flex flex-col gap-1.5">
              <div className="h-1.5 w-full bg-ink rounded-sm" />
              {['#F0EDFF','#E1E3E8','#EEEEEE'].map((bg, i) => (
                <div key={i} className="h-7 rounded" style={{ background: bg }} />
              ))}
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="h-1.5 w-full bg-ink rounded-sm" />
              <div className="grid grid-cols-2 gap-1.5">
                {[['#0F111B',1],['#4427ED',0.7],['#E1E3E8',1],['#939AA4',0.4]].map(([bg, op], i) => (
                  <div key={i} className="h-7 rounded-sm" style={{ background: String(bg), opacity: Number(op) }} />
                ))}
              </div>
            </div>
          </div>
        </MockScreen>
      </div>
    )
  }

  // viz1 — default
  return (
    <div className={wrapperClass}>
      <MockScreen>
        <div className="h-2 w-[55%] bg-ink rounded-sm" />
        <div className="h-2 w-[45%] rounded-sm" style={{ background: '#4427ED', opacity: 0.3 }} />
        <div className="h-2 w-[38%] bg-gray-brand-200 rounded-sm" />
        <div className="grid grid-cols-3 gap-1.5 mt-3">
          {[0,1,2].map(i => (
            <div
              key={i}
              className="h-12 rounded border"
              style={i === 1
                ? { background: 'rgba(68,39,237,0.08)', borderColor: 'rgba(68,39,237,0.2)' }
                : { background: '#F8F9FA', borderColor: '#E1E3E8' }
              }
            />
          ))}
        </div>
      </MockScreen>
    </div>
  )
}

function MockScreen({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[70%] bg-white rounded-lg shadow-[0_8px_40px_rgba(0,0,0,0.10),0_1px_4px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col" style={{ aspectRatio: '16/10' }}>
      <div className="h-7 bg-gray-brand-100 border-b border-gray-brand-200 flex items-center px-3 gap-1.5 flex-shrink-0">
        {[0,1,2].map(i => <div key={i} className="w-2 h-2 rounded-full bg-gray-brand-200" />)}
      </div>
      <div className="flex-1 p-4 flex flex-col gap-2 overflow-hidden">
        {children}
      </div>
    </div>
  )
}
