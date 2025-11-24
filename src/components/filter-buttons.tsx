'use client';

import { parseAsBoolean, useQueryState } from 'nuqs';
import { Button } from './button';

export function FilterButtons() {
  const [status, setStatus] = useQueryState('isActive', parseAsBoolean);

  return (
    <div className="flex justify-center gap-3">
      <Button
        onClick={() => setStatus(null)}
        className="cursor-pointer"
        aria-label="Clear filters"
        data-active={status == null}
      >
        All
      </Button>
      <Button
        onClick={() => setStatus(true)}
        className="cursor-pointer"
        aria-label="Set filter to active"
        data-active={status === true}
      >
        Active
      </Button>
      <Button
        onClick={() => setStatus(false)}
        className="cursor-pointer"
        aria-label="Set filter to inactive"
        data-active={status === false}
      >
        Inactive
      </Button>
    </div>
  );
}
