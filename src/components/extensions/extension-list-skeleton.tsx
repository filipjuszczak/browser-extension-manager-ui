export function ExtensionListSkeleton() {
  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="min-h-50 flex flex-col justify-between p-5 bg-neutral-0 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 drop-shadow-extension-card dark:drop-shadow-none rounded-preset-20"
        ></div>
      ))}
    </div>
  );
}
