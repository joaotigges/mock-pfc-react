import { Terminal, ShieldAlert } from 'lucide-react';

export const SecurityPage = () => {
  const logs = [
    { time: '21:44:02', event: 'SSH Brute Force Attempt', origin: '192.168.1.45', action: 'Blocked', severity: 'High' },
    { time: '20:30:15', event: 'SQL Injection Scan', origin: '45.230.12.5', action: 'Mitigated', severity: 'Critical' },
    { time: '19:15:44', event: 'Unauthorized API Access', origin: 'Internal', action: 'Logged', severity: 'Medium' },
    { time: '18:02:11', event: 'Valid MFA Auth', origin: '10.0.5.12', action: 'Allowed', severity: 'Low' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Security Operation Center</h1>
          <p className="text-slate-400 text-sm">Monitoramento de ameaças em tempo real e logs de auditoria.</p>
        </div>
        <div className="bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold">
          <ShieldAlert size={18} /> 2 Critical Threats Mitigated Today
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <div className="p-4 bg-slate-800/50 border-b border-slate-800 flex items-center gap-2 font-mono text-xs">
          <Terminal size={14} className="text-lime-400" /> nexus_security_logs.txt
        </div>
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-950 text-slate-500 uppercase text-[10px] tracking-tighter">
            <tr>
              <th className="px-6 py-3">Timestamp</th>
              <th className="px-6 py-3">Origin</th>
              <th className="px-6 py-3">Event</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 font-mono text-xs">
            {logs.map((log, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 text-slate-400">{log.time}</td>
                <td className="px-6 py-4 text-slate-300">{log.origin}</td>
                <td className="px-6 py-4 text-white font-bold">{log.event}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded ${
                    log.action === 'Blocked' ? 'bg-red-500/20 text-red-500' : 
                    log.action === 'Allowed' ? 'bg-green-500/20 text-green-500' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {log.action}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};