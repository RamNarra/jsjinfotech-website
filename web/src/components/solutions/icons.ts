import { Database, BrainCircuit, FileText, Landmark, ListChecks, Plane, Server, ShieldCheck, CodeXml, type LucideIcon } from 'lucide-react';
import type { SolutionSlug } from '@/shared';

export const SOLUTION_ICONS: Record<SolutionSlug, LucideIcon> = {
  'digital-it': Server,
  'sap-erp': Database,
  'artificial-intelligence': BrainCircuit,
  cybersecurity: ShieldCheck,
  'software-development': CodeXml,
  'digital-content': FileText,
  'drone-technology': Plane,
  'project-management': ListChecks,
  'government-technology': Landmark,
};
