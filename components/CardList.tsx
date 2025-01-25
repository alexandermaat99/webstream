import Image from "next/image";

interface CardItem {
  link: string;
  photo: string;
  title?: string;
  shadowColor: string;
}

interface CardListProps {
  items: CardItem[];
}

export default function CardList({ items }: CardListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-8xl mx-auto">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-container group"
          style={{ "--shadow-color": item.shadowColor } as React.CSSProperties}
        >
          <div className="relative aspect-square rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
            <Image
              src={item.photo}
              alt={item.title || "Streaming Platform"}
              fill
              className="object-cover p-4 bg-white rounded-full"
            />
          </div>
        </a>
      ))}
    </div>
  );
}
