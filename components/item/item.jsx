import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { title: "computer and laptops", src: "/categories/computer/img1.png" },
  { title: "Lady shoes", src: "/categories/female/shoes/img1.png" },
  { title: "Men shoes", src: "/categories/male/shoes/img1.png" },
  { title: "Lady clothes", src: "/categories/female/clothes/img2.png" },
  { title: "Gents Clothes", src: "/categories/male/clothes/img1.jpg" },
  { title: "books", src: "/categories/books/img1.png" },
];

const Item = () => {
  const [number, setNumber] = useState(1);

  const increment = () => {
    if (number === 5) {
      setNumber(5);
    } else {
      setNumber(number + 1);
    }
  };

  const decrement = () => {
    if (number === 1) {
      setNumber(1);
    } else {
      setNumber(number - 1);
    }
  };

  return (
    <div>
      <div className="div">
        <div className="wrapper flex flex-col items-start gap-4  pt-24  xl:pl-14 p-4">
          <div className="top">
            <span className="xl:text-3xl lg:text-3xl text-2xl text-slate-700">
              Keyboard
            </span>
          </div>
          <div className="flex xl:flex-row xl:pr-14 lg:pr-14 pr-2 lg:flex-row md:flex-row flex-col items-center lg:gap-14 md:gap-14 gap-8 xl:gap-14">
            <div className="leftsideitem flex-1">
              <Image
                className="xl:h-72 lg:h-72 md:h-72  h-60"
                src={"/categories/computer/img1.png"}
                height={250}
                width={350}
                alt="img"
              />
            </div>
            <div className="rightside flex-1 items-center xl:items-start flex flex-col gap-4">
              <span className="xl:text-3xl lg:text-2xl text-xl text-blue-700">
                MacBook Pro with M1 chip 13-inch
              </span>
              <span>
                The MacBook Pro with M1 chip 13-inch offers powerful performance
                with an 8-core CPU and advanced graphics. It features a stunning
                Retina display with True Tone technology, a comfortable Magic
                Keyboard with Touch Bar, and Thunderbolt/USB 4 ports. With
                efficient thermal management, extended battery life, and
                seamless integration into the Apple ecosystem, it&apos;s a sleek
                and portable powerhouse for professionals and creatives.
              </span>
              <div className="flex gap-4 items-center">
                <label>
                  <input type="radio" name="size" value="small" />
                  Small
                </label>

                <label>
                  <input type="radio" name="size" value="medium" />
                  Medium
                </label>

                <label>
                  <input type="radio" name="size" value="large" />
                  Large
                </label>
              </div>
              <div className="quantity flex items-center  xl:gap-12 lg:gap-8 gap-4">
                <button
                  onClick={() => increment()}
                  className="bg-blue-600 text-white text-xl hover:bg-blue-400  h-10 w-10 flex items-center justify-center rounded-full"
                >
                  +
                </button>
                <span className="text-xl text-slate-700">{number}</span>
                <button
                  onClick={() => decrement()}
                  className="bg-blue-600 text-white text-xl hover:bg-blue-400  h-10 w-10 flex items-center justify-center rounded-full"
                >
                  -
                </button>
              </div>
              <div className="flex gap-4 items-center">
                <button className=" bg-yellow-600 hover:bg-yellow-500  text-white rounded-lg p-2">
                  Add to Cart
                </button>
                <button className=" bg-green-600 hover:bg-green-500  text-white rounded-lg p-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recommended xl:p-24 flex items-center justify-center">
        <span className="text-4xl">Similar Items For You </span>
      </div>
      <div className="flex flex-wrap gap-8 items-center justify-center">
        {categories.map((x, index) => (
          <div
            key={index}
            className="card shadow-2xl gap-2 flex w-72 flex-row items-center justify-center bg-fuchsia-50 p-2 rounded-lg"
          >
            <div className="card_wrapper flex flex-col gap-4">
              <span>{x?.title}</span>
              <Image
                className="xl:h-72 lg:h-72 md:h-72  h-60"
                src={x?.src}
                height={250}
                width={350}
                alt="img"
              />
              <div className="flex items-center  gap-4">
                <span>Price</span>
                <span>{x?.price}</span>
              </div>
              <Link href={"/category/1"}>
                <button className=" bg-yellow-600 text-white rounded-lg p-2">
                  view details
                </button>{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
