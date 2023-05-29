import Image from "next/image";
import "./card.css";
const categories = [
  { title: "computer and laptops", src: "/categories/computer/img1.png" },
  { title: "Lady shoes", src: "/categories/female/shoes/img1.png" },
  { title: "Men shoes", src: "/categories/male/shoes/img1.png" },
  { title: "Lady clothes", src: "/categories/female/clothes/img2.png" },
  { title: "Gents Clothes", src: "/categories/male/clothes/img1.jpg" },
  { title: "books", src: "/categories/books/img1.png" },
];
const Card = () => {
  return (
    <div className="flex flex-wrap gap-8 items-center justify-center">
      {categories.map((x) => (
        <div className="card shadow-2xl gap-2 flex w-72 flex-row items-center justify-center bg-fuchsia-50 p-2 rounded-lg">
          <div className="card_wrapper flex flex-col gap-4">
            <span>{x?.title}</span>
            <Image
              className="xl:h-72 lg:h-72 md:h-72  h-60"
              src={x?.src}
              height={250}
              width={350}
            />
            <span>see more</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;
