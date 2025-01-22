// app/page.tsx
import CardList from "../components/CardList";

export default function Home() {
  const items = [
    {
      link: "https://example.com",
      photo: "https://via.placeholder.com/150",
      title: "Example Site",
    },
    {
      link: "https://anotherexample.com",
      photo: "https://via.placeholder.com/150",
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
