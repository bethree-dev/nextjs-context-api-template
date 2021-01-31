import React from 'react';
import { Drawer } from 'antd';
import useDrawer from '../../hooks/useDrawer';

type PlacementTypes = 'top' | 'right' | 'bottom' | 'left';

interface SidebarProps {
   title: string;
   placement: PlacementTypes;
   closable?: boolean;
}

const CustomDrawer: React.FC<SidebarProps> = ({ children, title, placement, closable = false }) => {
   const { CloseDrawer, visible } = useDrawer();

   return (
      <Drawer title={title} placement={placement} closable={closable} onClose={() => CloseDrawer()} visible={visible}>
         {children}
      </Drawer>
   );
};

export default CustomDrawer;
