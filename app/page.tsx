import CardList from "../components/CardList";

export default function Home() {
  const items = [
    {
      link: "https://www.netflix.com/browse",
      photo: "/images/netflix.png",
      title: "Netflix",
      shadowColor: "rgba(229, 9, 20, 0.5)", // Netflix red
    },
    {
      link: "https://www.hulu.com/hub/home",
      photo: "/images/hulu.png",
      title: "Hulu",
      shadowColor: "rgba(28, 231, 131, 0.5)", // Hulu green
    },
    {
      link: "https://play.max.com/profile-picker",
      photo: "/images/max.png",
      title: "HBO Max",
      shadowColor: "rgba(0, 0, 255, 0.5)", // Blue
    },
    {
      link: "https://tv.apple.com/channel/tvs.sbd.4000?mttn3pid=Google%20AdWords&mttnagencyid=a5e&mttncc=US&mttnsiteid=143238&mttnsubad=OUS2019801_1-688276416659-c&mttnsubkw=75222244984__idXQ476O_&mttnsubplmnt=0AAAAAC0Rhi3dsOj5qrnE_cXuyVePQiuTx",
      photo: "/images/apple.png",
      title: "Apple",
      shadowColor: "rgba(128, 128, 128, 0.5)", // Gray
    },
    {
      link: "https://www.amazon.com/gp/video/storefront",
      photo: "/images/prime.png",
      title: "Prime",
      shadowColor: "rgba(0, 168, 225, 0.5)", // Prime blue
    },
    {
      link: "https://www.youtube.com/",
      photo: "/images/youtube.png",
      title: "Youtube",
      shadowColor: "rgba(255, 0, 0, 0.5)", // YouTube red
    },
  ];

  return (
    <main className="p-4">
      <CardList items={items} />
    </main>
  );
}
