import Link from "next/link";
import Image from "next/image";

type Props = {
  imageUrl: string;
  caption: string;
  link: string;
  created_at: string;
};

export default function ImageCard({
  imageUrl,
  caption,
  link,
  created_at,
}: Props) {
  return (
    <figure className="w-[250px] overflow-hidden rounded-base border-2 border-border bg-bg font-base shadow-shadow">
      <Image
        className="w-full aspect-[4/3] object-cover"
        src={imageUrl}
        width={500}
        height={375}
        alt="image"
      />
      <figcaption className="border-t-2 text-mtext border-border p-4 mt-0 flex flex-col gap-2">
        <div>{caption}</div>
        <div>
          <Link href={link} passHref className="text-text hover:text-main underline">
            Repo
          </Link>
        </div>
        <small>
          {new Date(created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </small>
      </figcaption>
    </figure>
  );
}
