// components/CardList.tsx
import Image from "next/image";

interface CardItem {
  link: string;
  photo: string;
  title?: string;
}

interface CardListProps {
  items: CardItem[];
}

export default function CardList({ items }: CardListProps) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "inherit",
            border: "1px solid #ccc",
            borderRadius: "8px",
            overflow: "hidden",
            width: "200px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ height: "150px", position: "relative" }}>
            <Image
              src={item.photo}
              alt={item.title || "Card Image"}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div style={{ padding: "8px", textAlign: "center" }}>
            <p>{item.title || item.link}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
