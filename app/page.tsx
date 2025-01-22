// app/page.tsx
import CardList from "../components/CardList";

export default function Home() {
  const items = [
    {
      link: "https://example.com",
      photo: "/images/example.jpg",
      title: "Example Site",
    },
    {
      link: "https://anotherexample.com",
      photo: "/images/another-example.jpg",
      title: "Another Example",
    },
  ];

  return (
    <main className="p-4">
      <h1>Card List</h1>
      <CardList items={items} />
    </main>
  );
}
