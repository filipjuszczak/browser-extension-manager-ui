import { Suspense } from 'react';
import { Header } from '@/components/header/header';
import { FilterButtons } from '@/components/filter-buttons';
import { FilterButtonsSkeleton } from '@/components/filter-buttons-skeleton';
import { ExtensionList } from '@/components/extensions/extension-list';
import { ExtensionListSkeleton } from '@/components/extensions/extension-list-skeleton';

export default function Home() {
  return (
    <div className="min-h-screen px-4 md:px-8 xl:px-0">
      <div className="max-w-292.5 mx-auto pt-6 lg:pt-10 pb-16">
        <Header />
        <main>
          <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-8">
            <h1 className="text-preset-1 font-preset-1 tracking-preset-1 leading-preset-1 text-center">
              Extensions List
            </h1>
            <Suspense fallback={<FilterButtonsSkeleton />}>
              <FilterButtons />
            </Suspense>
          </div>
          <Suspense fallback={<ExtensionListSkeleton />}>
            <ExtensionList />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
