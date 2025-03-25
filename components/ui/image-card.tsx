import Link from "next/link";
import Image from "next/image";

type Props = {
  imageUrl: string;
  caption: string;
  link: string;
  url: string;
  description: string;
  categories: string[];
  created_at: string;
};

function generateColour(index: number, total: number): string {
  const hue = (index / total) * 270; // 0 (red) to 270 (violet)
  return `hsl(${hue}, 40%, 60%)`;
}

function getCategoryColours(categories: string[]): Record<string, string> {
  const uniqueCategories = [...new Set(categories)];
  const total = uniqueCategories.length;
  const categoryColours: Record<string, string> = {};

  uniqueCategories.forEach((category, index) => {
    categoryColours[category] = generateColour(index, total);
  });

  return categoryColours;
}

export default function ImageCard({
  imageUrl,
  caption,
  link,
  url,
  description,
  categories,
  created_at,
}: Props) {
  const categoryColours = getCategoryColours(categories);

  return (
    <figure className="w-[250px] overflow-hidden rounded-base border-2 border-border bg-bg font-base shadow-shadow">
      <Image
        className="w-full aspect-[4/3] object-cover"
        src={imageUrl}
        width={500}
        height={375}
        alt="image"
        priority
      />
      <figcaption className="border-t-2 text-mtext border-border p-4 mt-0 flex flex-col gap-2">
        <div className="text-xl">{caption}</div>
        <div className="flex">
          <div>
            <Link
              href={link}
              passHref
              className="text-text hover:text-main underline"
              target="_blank"
            >
              Repo
            </Link>
          </div>
          {url && (
            <>
              <div>&nbsp;|&nbsp;</div>
              <div>
                <Link
                  href={url}
                  passHref
                  className="text-text hover:text-main underline"
                  target="_blank"
                >
                  URL
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="text-gray-600">{description}</div>
        <small>{created_at || "No date"}</small>
        <div className="flex flex-wrap gap-2 cursor-default">
          {categories.map((category) => (
            <span
              key={category}
              className="text-xs px-2 py-1 text-text rounded-base"
              style={{
                backgroundColor: categoryColours[category],
              }}
            >
              {category.toLowerCase()}
            </span>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
