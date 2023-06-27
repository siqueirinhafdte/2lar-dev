import { ReactNode } from 'react';

export interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

export interface TabsProps {
  tabs: { label: string }[];
  tabPanels: { component: ReactNode; id: string }[];
}
