import { memo } from 'react';
import Image from 'next/image';
import { Button } from '../button';
import { Switch } from '../ui/switch';

export const ExtensionCard = memo(function ExtensionCard({
  id,
  name,
  description,
  logo,
  isActive,
  onChangeExtensionStatus,
  onRemoveExtension
}: {
  id: string;
  name: string;
  description: string;
  logo: string;
  isActive: boolean;
  onChangeExtensionStatus: (id: string, isActive: boolean) => void;
  onRemoveExtension: (id: string) => void;
}) {
  return (
    <div className="min-h-50 flex flex-col justify-between p-5 bg-neutral-0 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 drop-shadow-extension-card dark:drop-shadow-none rounded-preset-20">
      <div className="flex items-start gap-4">
        <div className="w-[60px] h-[60px] shrink-0">
          <Image
            src={logo}
            alt=""
            width={60}
            height={60}
            className="w-full h-full"
          />
        </div>
        <div className="space-y-2">
          <div className="text-preset-2 font-preset-2 leading-preset-2 tracking-preset-2">
            {name}
          </div>
          <div className="text-preset-5 font-preset-5 leading-preset-5 tracking-preset-5 text-neutral-600 dark:text-neutral-300">
            {description}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button
          onClick={() => onRemoveExtension(id)}
          className="px-4 py-2 text-preset-6 font-preset-6 tracking-preset-6 leading-preset-6 drop-shadow-none border-neutral-300 hover:opacity-100 hover:bg-red-700 dark:hover:bg-red-400 dark:hover:text-neutral-900 dark:hover:border-transparent hover:text-neutral-0 hover:border-transparent active:shadow-none dark:active:shadow-none focus-visible:bg-neutral-100 focus-visible:border-transparent dark:focus-visible:bg-neutral-600 cursor-pointer"
        >
          Remove
        </Button>
        <Switch
          checked={isActive}
          onCheckedChange={onChangeExtensionStatus.bind(null, id)}
          className="cursor-pointer"
          aria-label={
            isActive
              ? `Turn ${name} extension off`
              : `Turn ${name} extension on`
          }
        />
      </div>
    </div>
  );
});
