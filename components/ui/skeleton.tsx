import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse bg-bw transition-all duration-200 ease-in-out",
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
