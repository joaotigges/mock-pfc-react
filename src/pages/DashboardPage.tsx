import React from 'react';
import { BarChart3, Clock, Zap, AlertCircle } from 'lucide-react';

export const DashboardPage = () => {
  const metrics = [
    { label: 'Deployment Frequency', value: '12/day', status: 'Elite', color: 'bg-lime-400', width: '92%' },
    { label: 'Lead Time for Changes', value: '45min', status: 'High', color: 'bg-blue-400', width: '85%' },
    { label: 'Change Failure Rate', value: '0.8%', status: 'Elite', color: 'bg-green-400', width: '12%' },
    { label: 'Recovery Time (MTTR)', value: '18min', status: 'Elite', color: 'bg-purple-400', width: '95%' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">DevOps Health Score</h1>
        <p className="text-slate-400 text-sm">Métricas de performance baseadas no framework DORA.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="bg-slate-900 p-5 rounded-xl border border-slate-800">
            <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">{m.label}</p>
            <h3 className="text-2xl font-bold text-white">{m.value}</h3>
            <span className={`text-[10px] px-2 py-0.5 rounded mt-2 inline-block font-bold text-black ${m.color}`}>
              {m.status}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <BarChart3 size={20} className="text-lime-400" /> Performance Breakdown
        </h3>
        <div className="space-y-6">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">{m.label}</span>
                <span className="text-slate-500 font-mono">{m.width}</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full ${m.color} transition-all duration-1000`} style={{ width: m.width }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};