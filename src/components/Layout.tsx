import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShieldCheck, Activity, Home as HomeIcon, ChevronRight } from 'lucide-react';

export const Layout = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Overview', icon: HomeIcon },
    { path: '/dashboard', label: 'DevOps Metrics', icon: LayoutDashboard },
    { path: '/security', label: 'Security Center', icon: ShieldCheck },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-200 font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900/50 backdrop-blur-xl p-6 flex flex-col">
        <div className="mb-10 flex items-center gap-3">
          <div className="w-8 h-8 bg-lime-400 rounded flex items-center justify-center">
            <Activity className="text-black w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-wider text-white">NEXUS</span>
        </div>
        
        <nav className="space-y-2 flex-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                  isActive 
                  ? 'bg-lime-400 text-black font-bold' 
                  : 'hover:bg-slate-800 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} />
                  <span>{item.label}</span>
                </div>
                {isActive && <ChevronRight size={16} />}
              </Link>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-slate-800 text-xs text-slate-500">
          v1.0.4-stable // TCC Project
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Header Fixo */}
        <header className="h-16 border-b border-slate-800 flex items-center justify-between px-8 bg-slate-950/80 sticky top-0 z-10 backdrop-blur-md">
          <h2 className="text-sm font-mono text-lime-400">
            root@nexus:~# <span className="text-slate-300">{location.pathname}</span>
          </h2>
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
            <span className="text-xs font-medium uppercase tracking-wider text-slate-300">System Online</span>
          </div>
        </header>
        
        {/* Área de Injeção das Páginas */}
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};