import React, { useState, FunctionComponent } from 'react';

const Toggler = (WrappedComponent: FunctionComponent) => (props: any) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  return <WrappedComponent {...props} isOpen={open} toggle={handleToggle} />;
};

export default Toggler;
