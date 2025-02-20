"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type BackButtonProps = {
  backPath: string;
  buttonText: string;
};

export default function BackButton({ backPath, buttonText }: BackButtonProps) {
  const pathname = usePathname();

  if (pathname === backPath) {
    return null;
  }

  return (
    <Button variant={"noShadow"} className="bg-bg text-text">
      <Link href={backPath} className="no-underline">
        {buttonText}
      </Link>
    </Button>
  );
}
