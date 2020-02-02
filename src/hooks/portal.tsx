import React from 'react';
import { createPortal } from 'react-dom'

const portal = document.getElementById('portal-root');

const Overlay = ({ children }: { children: React.ReactNode }) => createPortal(
  children,
  portal
);

const OverlayPortal = ({ children, onClose }: { children: React.ComponentType, onClose?: () => void }) => (
  <Overlay>
    <div onClick={e => {
      e.stopPropagation()
      if (e.target === e.currentTarget) { onClose() }
    }} />
    <div>{children}</div>
  </Overlay>
)

export default OverlayPortal
