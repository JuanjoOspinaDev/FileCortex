export function FileListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="bg-white border rounded-2xl p-5 flex flex-col gap-3 shadow animate-pulse">
          <div className="h-16 w-16 bg-gray-200 rounded-xl mx-auto mb-3" />
          <div className="h-4 w-3/4 bg-gray-200 rounded mx-auto" />
          <div className="flex justify-between mt-2">
            <div className="h-3 w-16 bg-gray-200 rounded" />
            <div className="h-3 w-10 bg-gray-200 rounded" />
          </div>
          <div className="flex gap-2 mt-4">
            <div className="h-8 w-16 bg-gray-200 rounded" />
            <div className="h-8 w-16 bg-gray-200 rounded" />
            <div className="h-8 w-16 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
