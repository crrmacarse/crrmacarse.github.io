import React from 'react';
import { createPortal } from 'react-dom';

const portal = document.getElementById('portal-root');

const Overlay = ({ children }: { children: React.ReactNode }) => createPortal(
  children,
  portal,
);

export interface OverlayPortalProps {
  children: React.ReactNode,
  onClose?: () => void,
}

const OverlayPortal = ({ children, onClose }: OverlayPortalProps) => {
  const handleClick = (e: any) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) { onClose(); }
  };

  return (
    <Overlay>
      <div
        role="button"
        aria-label="Open Portal"
        tabIndex={-1}
        onClick={handleClick}
        onKeyDown={handleClick}
      />
      <div>{children}</div>
    </Overlay>
  );
};

export default OverlayPortal;
