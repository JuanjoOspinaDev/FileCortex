export function LogListSkeleton() {
  return (
    <ul className="flex flex-col gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <li key={i} className="bg-white border rounded-2xl px-5 py-4 shadow animate-pulse flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 rounded-full bg-gray-200" />
            <div className="h-4 w-40 bg-gray-200 rounded" />
            <div className="h-4 w-16 bg-gray-200 rounded ml-auto" />
          </div>
          <div className="h-3 w-52 bg-gray-200 rounded mt-2" />
        </li>
      ))}
    </ul>
  );
}
