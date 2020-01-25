import React, { useState, ComponentType } from 'react';

const Toggler = (WrappedComponent: ComponentType) => (props: any) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  return <WrappedComponent {...props} isOpen={open} toggle={handleToggle} />;
};

export default Toggler;
