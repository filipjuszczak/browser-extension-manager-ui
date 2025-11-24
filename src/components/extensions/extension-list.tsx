'use client';

import { useState, useCallback, useMemo } from 'react';
import { parseAsBoolean, useQueryState } from 'nuqs';
import { ExtensionCard } from './extension-card';
import extensionsData from '@/data/extensions.json';

export function ExtensionList() {
  const [extensions, setExtensions] = useState(extensionsData);
  const [status] = useQueryState('isActive', parseAsBoolean);

  const filteredExtensions = useMemo(
    () =>
      extensions.filter((extension) =>
        status != null ? extension.isActive === status : extension
      ),
    [extensions, status]
  );

  const changeExtensionStatus = useCallback((id: string, isActive: boolean) => {
    setExtensions((prevExtensions) => {
      const newExtensions = [...prevExtensions];
      const extensionIndex = newExtensions.findIndex((e) => e.id === id);
      if (extensionIndex === -1) return prevExtensions;
      newExtensions[extensionIndex].isActive = isActive;
      return newExtensions;
    });
  }, []);

  const removeExtension = useCallback((id: string) => {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((e) => e.id !== id)
    );
  }, []);

  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {filteredExtensions.length > 0 ? (
        filteredExtensions.map((extension) => (
          <ExtensionCard
            id={extension.id}
            key={extension.name}
            name={extension.name}
            description={extension.description}
            logo={extension.logo}
            isActive={extension.isActive}
            onChangeExtensionStatus={changeExtensionStatus}
            onRemoveExtension={removeExtension}
          />
        ))
      ) : (
        <div className="text-preset-2">No results.</div>
      )}
    </div>
  );
}
