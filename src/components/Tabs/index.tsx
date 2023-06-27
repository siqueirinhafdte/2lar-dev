import { useState } from 'react';

import { Tabs as TabsComponent, Tab } from '@mui/material';

import * as S from './styles';
import { TabPanel } from './TabPanel';
import { TabsProps } from './types';

export function Tabs({ tabs, tabPanels }: TabsProps) {
  const [value, setValue] = useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <S.Container>
      <S.ContainerTab>
        <TabsComponent value={value} onChange={handleChange} aria-label="basic tabs">
          {tabs.map((tab) => (
            <Tab label={tab.label} key={tab.label} />
          ))}
        </TabsComponent>
      </S.ContainerTab>
      {tabPanels.map((tabPanel, i) => (
        <TabPanel value={value} index={i} key={tabPanel.id}>
          {tabPanel.component}
        </TabPanel>
      ))}
    </S.Container>
  );
}
