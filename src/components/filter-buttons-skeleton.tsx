import { Button } from './button';

export function FilterButtonsSkeleton() {
  return (
    <div className="flex justify-center gap-3">
      <Button className="cursor-pointer">All</Button>
      <Button className="cursor-pointer">Active</Button>
      <Button className="cursor-pointer">Inactive</Button>
    </div>
  );
}
