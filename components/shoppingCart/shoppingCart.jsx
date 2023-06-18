"use client";
import { useState } from "react";
import Navbar from "../home/navbar/navbar";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const categories = [
  {
    title: "computer and laptops",
    src: "/categories/computer/img1.png",
    price: 1000,
  },
  { title: "Lady shoes", src: "/categories/female/shoes/img1.png", price: 50 },
  { title: "Men shoes", src: "/categories/male/shoes/img1.png", price: 60 },
  {
    title: "Lady clothes",
    src: "/categories/female/clothes/img2.png",
    price: 80,
  },
  {
    title: "Gents Clothes",
    src: "/categories/male/clothes/img1.jpg",
    price: 90,
  },
  { title: "books", src: "/categories/books/img1.png", price: 20 },
];

const ShoppingCart = () => {
  const [number, setNumber] = useState(1);
  const { data: session, status } = useSession();
  const router = useRouter();
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

  const subtotal = 40 * number;
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleCheckout = () => {
    // Add your checkout logic here
  };
  if (!session) {
    router.push("/auth/login");
  }
  return (
    <div className="shoppingCart">
      <div className="shoppingCartWrapper">
        <Navbar />
        <div className="text-center flex items-center xl:pt-32 xl:p-14 lg:p-12 p-8 w-full justify-center">
          <h2 className="text-2xl font-bold">Your Cart 3</h2>
        </div>
        <div className="table-responsive h-48 s-full xl:pl-14 lg:pl-8">
          <table className="w-full divide-y divide-gray-200">
            <thead>
              <tr className="flex items-center justify-between w-full">
                <th className="flex items-center justify-center flex-1">
                  Item
                </th>
                <th className="flex items-center justify-center flex-1">
                  Price
                </th>
                <th className="flex items-center justify-center flex-1">
                  Quantity
                </th>
                <th className="flex items-center justify-center flex-1">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="flex items-center justify-between w-full">
                <td className="flex items-center justify-center flex-1">
                  <div className="">
                    <div className="">
                      <img
                        src="/categories/computer/img1.png"
                        alt=""
                        className="xl:h-24 xl:w-24 object-contain"
                      />
                    </div>
                    <div className="">
                      <div className="">mac book 1 with latest</div>
                    </div>
                  </div>
                </td>
                <td className="flex items-center justify-center flex-1">$40</td>
                <td className="flex items-center justify-center flex-1">
                  <div className="flex gap-8 items-center">
                    <button
                      onClick={() => increment()}
                      className="bg-blue-600 text-white text-xl hover:bg-blue-400  h-10 w-10 flex items-center justify-center rounded-full"
                    >
                      +
                    </button>
                    <span>{number}</span>
                    <button
                      className="bg-blue-600 text-white text-xl hover:bg-blue-400  h-10 w-10 flex items-center justify-center rounded-full"
                      onClick={() => decrement()}
                    >
                      -
                    </button>
                  </div>
                </td>
                <td className="flex items-center justify-center flex-1">
                  $240
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive flex items-end justify-end pr-24 bg-slate-200 w-full p-2 shadow-xl xl:pl-14 lg:pl-8">
          <div className="flex flex-col gap-2 xl:text-xl text-slate-700">
            <div className="flex flex-1 items-center gap-8">
              <span> Subtotal: </span> <span> ${subtotal}</span>
            </div>
            <div className="flex flex-1 items-center gap-8">
              Tax: ${tax.toFixed(2)}
            </div>
            <div className="flex flex-1 items-center gap-8">
              Total: ${total.toFixed(2)}
            </div>
            <button
              className="bg-yellow-700 hover:bg-yellow-600 text-white lg:p-2 p-1 xl:p-2 rounded-lg"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
