// app/page.tsx
import CardList from "../components/CardList";

export default function Home() {
  const items = [
    {
      link: "https://www.netflix.com/browse",
      photo: "/images/example.jpg",
      title: "Netflix",
    },
    {
      link: "https://www.hulu.com/hub/home",
      photo: "/images/another-example.jpg",
      title: "Hulu",
    },
    {
      link: "https://play.max.com/profile-picker",
      photo: "/images/another-example.jpg",
      title: "HBO Max",
    },
    {
      link: "https://tv.apple.com/channel/tvs.sbd.4000?mttn3pid=Google%20AdWords&mttnagencyid=a5e&mttncc=US&mttnsiteid=143238&mttnsubad=OUS2019801_1-688276416659-c&mttnsubkw=75222244984__idXQ476O_&mttnsubplmnt=0AAAAAC0Rhi3dsOj5qrnE_cXuyVePQiuTx",
      photo: "/images/another-example.jpg",
      title: "Apple",
    },
    {
      link: "https://anotherexample.com",
      photo: "/images/another-example.jpg",
      title: "Hulu",
    },
  ];

  return (
    <main className="p-4">
      <h1>Card List</h1>
      <CardList items={items} />
    </main>
  );
}
