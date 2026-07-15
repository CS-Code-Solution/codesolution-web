import type { LucideIcon } from 'lucide-react'
import {
  Award,
  BadgeCheck,
  BarChart3,
  Blocks,
  Boxes,
  CalendarClock,
  ClipboardList,
  Cog,
  FileText,
  Gauge,
  GraduationCap,
  Handshake,
  HeartPulse,
  Layers,
  Lightbulb,
  LineChart,
  Lock,
  RefreshCw,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from 'lucide-react'

export const company = {
  name: 'Code Solution',
  slogan: 'Tecnologia que transforma ideias em soluções.',
  city: 'Brasileira – Piauí',
  email: 'codesolution529@gmail.com',
}

export const mailto = `mailto:${company.email}`

export const nav = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'O que fazemos', href: '/#o-que-fazemos' },
  { label: 'Produtos', href: '/#produtos' },
  { label: 'Compromisso', href: '/#compromisso' },
  { label: 'Contato', href: '/#contato' },
]

export const values: { title: string; icon: LucideIcon }[] = [
  { title: 'Inovação contínua', icon: Lightbulb },
  { title: 'Excelência', icon: Award },
  { title: 'Segurança', icon: ShieldCheck },
  { title: 'Transparência', icon: BadgeCheck },
  { title: 'Responsabilidade', icon: Scale },
  { title: 'Compromisso com o cliente', icon: Handshake },
  { title: 'Aprendizado constante', icon: GraduationCap },
  { title: 'Qualidade em cada entrega', icon: Sparkles },
]

export const services: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Plataformas SaaS',
    description:
      'Desenvolvemos plataformas online preparadas para atender empresas de diferentes portes, com acesso seguro, atualizações contínuas e possibilidade de crescimento.',
    icon: Boxes,
  },
  {
    title: 'Sistemas de gestão',
    description:
      'Criamos sistemas que organizam informações, processos, equipes, atendimentos, documentos e rotinas administrativas.',
    icon: ClipboardList,
  },
  {
    title: 'Automação de processos',
    description:
      'Transformamos atividades manuais e repetitivas em fluxos digitais mais eficientes, organizados e confiáveis.',
    icon: Workflow,
  },
  {
    title: 'Soluções personalizadas',
    description:
      'Analisamos necessidades específicas e desenvolvemos soluções alinhadas à realidade de cada negócio.',
    icon: Blocks,
  },
  {
    title: 'Evolução de sistemas',
    description:
      'Modernizamos sistemas existentes, melhorando experiência do usuário, organização, segurança e capacidade de evolução.',
    icon: RefreshCw,
  },
]

export const technologyFeatures: { title: string; icon: LucideIcon }[] = [
  { title: 'Soluções preparadas para crescimento', icon: Rocket },
  { title: 'Experiência de usuário simples e fluida', icon: Sparkles },
  { title: 'Segurança desde a concepção', icon: Lock },
  { title: 'Atualizações contínuas', icon: RefreshCw },
  { title: 'Organização e confiabilidade', icon: Layers },
  { title: 'Arquitetura preparada para evolução', icon: Cog },
]

export const commitment: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Qualidade',
    description:
      'Buscamos clareza, organização e consistência em cada etapa do desenvolvimento.',
    icon: Award,
  },
  {
    title: 'Segurança',
    description:
      'Tratamos proteção de dados e controle de acesso como requisitos fundamentais.',
    icon: ShieldCheck,
  },
  {
    title: 'Evolução contínua',
    description:
      'Nossos produtos são planejados para receber melhorias e novas funcionalidades de forma organizada.',
    icon: LineChart,
  },
  {
    title: 'Parceria',
    description:
      'Acreditamos em relações transparentes, comunicação clara e compromisso com resultados.',
    icon: Handshake,
  },
]

export const workProcess: { step: string; title: string; description: string; icon: LucideIcon }[] =
  [
    {
      step: '01',
      title: 'Entendimento',
      description: 'Compreendemos o problema, os usuários e as necessidades do negócio.',
      icon: Target,
    },
    {
      step: '02',
      title: 'Planejamento',
      description: 'Definimos objetivos, prioridades, fluxos e requisitos.',
      icon: ClipboardList,
    },
    {
      step: '03',
      title: 'Desenvolvimento',
      description: 'Construímos a solução com organização, acompanhamento e validação.',
      icon: Cog,
    },
    {
      step: '04',
      title: 'Evolução',
      description: 'Monitoramos, melhoramos e evoluímos o produto continuamente.',
      icon: Rocket,
    },
  ]

export type Product = {
  slug: string
  name: string
  segment: string
  icon: LucideIcon
  shortDescription: string
  description: string
  features: string[]
}

export const products: Product[] = [
  {
    slug: 'code-juridico',
    name: 'Code Jurídico',
    segment: 'Plataforma Jurídica',
    icon: Scale,
    shortDescription:
      'Plataforma SaaS em desenvolvimento para escritórios de advocacia, equipes jurídicas e filiais.',
    description:
      'Plataforma SaaS em desenvolvimento para escritórios de advocacia, equipes jurídicas e filiais. A solução será voltada para organização de clientes, processos, prazos, documentos, agenda, tarefas, informações financeiras e rotinas administrativas.',
    features: [
      'Gestão de escritórios e filiais',
      'Cadastro de clientes e processos',
      'Controle de prazos',
      'Agenda jurídica',
      'Organização de documentos',
      'Gestão de tarefas',
      'Indicadores e relatórios',
      'Controle de acesso por usuário',
    ],
  },
  {
    slug: 'bitclin',
    name: 'BitClin',
    segment: 'Plataforma para Clínicas',
    icon: HeartPulse,
    shortDescription:
      'Plataforma SaaS em desenvolvimento para clínicas, consultórios e equipes de atendimento.',
    description:
      'Plataforma SaaS em desenvolvimento para clínicas, consultórios e equipes de atendimento. A solução será voltada para organização de pacientes, agenda, atendimentos, exames, profissionais, finanças e rotinas administrativas.',
    features: [
      'Cadastro de pacientes',
      'Agenda de atendimentos',
      'Gestão de profissionais',
      'Controle de exames',
      'Organização financeira',
      'Indicadores de gestão',
      'Controle de acesso',
      'Relatórios administrativos',
    ],
  },
]

export const productFeatureIcons: LucideIcon[] = [
  Users,
  FileText,
  CalendarClock,
  ClipboardList,
  BarChart3,
  Gauge,
  Lock,
  Layers,
]
