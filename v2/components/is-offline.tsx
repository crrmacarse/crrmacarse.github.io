import React, { useMemo } from 'react';

const IsOffline = () => {
  const isOffline = useMemo(() => !navigator.onLine, [navigator.onLine]);

  return isOffline && (
    <div className="is-offline fixed top-0 flex justify-center w-full">
      Offline Mode
    </div>
  );
};

export default IsOffline;
