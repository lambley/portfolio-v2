import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <figure className="w-[250px] overflow-hidden border-2 border-border rounded-base bg-bg font-base shadow-shadow">
      <Skeleton className="w-full aspect-[4/3] object-cover" />
      <figcaption className="border-t-2 text-mtext border-border p-4 mt-0 flex flex-col gap-2">
        <Skeleton className="w-full h-6 bg-gray-300 rounded-md" />
        <Skeleton className="w-1/2 h-6 bg-gray-300 rounded-md" />
        <Skeleton className="w-1/3 h-6 bg-gray-300 rounded-md" />
      </figcaption>
    </figure>
  );
}
