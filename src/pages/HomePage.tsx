import React from 'react';
import { Server, Shield, Zap, ArrowRight, GitMerge, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-10 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
            Bem-vindo ao <span className="text-lime-400">Project Nexus</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Plataforma centralizada para orquestração de infraestrutura ágil e governança de segurança cibernética. 
            Monitoramento de ponta a ponta, do primeiro commit até o deploy em produção.
          </p>
          <div className="flex gap-4">
            <Link to="/dashboard" className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
              <Zap size={18} />
              Acessar Métricas DORA
            </Link>
            <Link to="/security" className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-lg border border-slate-700 transition-colors flex items-center gap-2">
              <Shield size={18} />
              Verificar Logs de Segurança
            </Link>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section>
        <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">Pilares da Arquitetura</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* DevOps Card */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-lime-400/30 transition-colors">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
              <Server className="text-lime-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">DevOps & Automação</h3>
            <p className="text-sm text-slate-400 mb-4">
              Infraestrutura tratada como código (IaC). Eliminação de gargalos operacionais através de pipelines CI/CD robustos e monitoramento proativo.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <GitMerge size={16} className="text-slate-500" /> Integração Contínua (Trunk-based)
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <Server size={16} className="text-slate-500" /> Provisionamento via Terraform
              </li>
            </ul>
          </div>

          {/* InfoSec Card */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-lime-400/30 transition-colors">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
              <Lock className="text-lime-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Segurança Shift-Left</h3>
            <p className="text-sm text-slate-400 mb-4">
              Segurança implementada na base do desenvolvimento. Scans de vulnerabilidade em tempo real e arquitetura Zero Trust para acessos.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <Lock size={16} className="text-slate-500" /> Autenticação Zero Trust / MFA
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <Shield size={16} className="text-slate-500" /> Análise SAST/DAST no Pipeline
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* System Status Quick View */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
          </div>
          <div>
            <h4 className="text-white font-bold">Todos os sistemas operacionais</h4>
            <p className="text-xs text-slate-500">Último deploy em produção: 12 minutos atrás</p>
          </div>
        </div>
        <Link to="/dashboard" className="text-sm text-lime-400 hover:text-lime-300 flex items-center gap-1 font-medium transition-colors">
          Relatório completo <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
};