export interface PracticeItem {
  title: string;
  description: string;
}

export interface SectionData {
  title: string;
  description: string;
  items: PracticeItem[];
}

export const devOpsData: SectionData = {
  title: "Cultura DevOps",
  description: "Quebramos os silos entre desenvolvimento e operações para entregar valor de forma contínua, automatizada e monitorada.",
  items: [
    {
      title: "CI/CD (Integração e Entrega Contínuas)",
      description: "Automação de testes e builds. Código na branch principal significa código pronto para produção, sem intervenção manual amadora."
    },
    {
      title: "Infraestrutura como Código (IaC)",
      description: "Servidores não são animais de estimação, são gado. Provisionamos e gerenciamos infra via código (Terraform, Ansible), garantindo reprodutibilidade."
    },
    {
      title: "Observabilidade e Monitoramento",
      description: "Métricas, logs e traces. Se algo cai, nós sabemos antes do cliente. Achismo não tem espaço aqui."
    }
  ]
};

export const infoSecData: SectionData = {
  title: "Segurança da Informação",
  description: "Segurança não é uma etapa final, é um pilar. Adotamos o modelo de DevSecOps, onde a segurança é injetada desde a primeira linha de código (Shift-Left).",
  items: [
    {
      title: "Zero Trust Network",
      description: "Nunca confie, sempre verifique. Estar dentro da rede corporativa não garante acesso a nada. Autenticação rigorosa para cada microserviço."
    },
    {
      title: "Criptografia e Gestão de Chaves",
      description: "Dados protegidos em repouso e em trânsito (TLS 1.3). Tokens e secrets gerenciados por cofres (como HashiCorp Vault), fora do código-fonte."
    },
    {
      title: "Análise de Vulnerabilidades",
      description: "Scans de SAST e DAST rodam no pipeline. Código com vulnerabilidade crítica bloqueia o deploy na hora. Sem exceções."
    }
  ]
};