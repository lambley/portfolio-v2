import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type SortButtonProps = {
  onChange: (checked: boolean) => void;
  sortState: boolean;
  activeIcon: IconProp;
  inactiveIcon: IconProp;
};

export default function SortButton({
  onChange,
  sortState,
  activeIcon,
  inactiveIcon,
}: SortButtonProps) {
  return (
    <>
      <Button
        className={cn(
          "cursor-pointer",
          sortState ? "bg-active text-text" : "bg-bg text-text"
        )}
        onClick={() => onChange(!sortState)}
      >
        <FontAwesomeIcon icon={sortState ? activeIcon : inactiveIcon} />
        <Label htmlFor="sort-by-newest" className="cursor-pointer">
          {sortState ? "Latest" : "Oldest"}
        </Label>
      </Button>
    </>
  );
}
