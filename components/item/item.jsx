import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { useRouter } from "next/navigation";
import PopupAlert from "../alert/alert";
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

const Item = ({ item }) => {
  const [number, setNumber] = useState(1);
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();
  const _id = session?.user?._id;
  console.log(_id);
  const increment = () => {
    if (number === 5) {
      setNumber(5);
    } else {
      setNumber(number + 1);
    }
  };
  const handleAlertClose = () => {
    setShowAlert(false);
  };
  const decrement = () => {
    if (number === 1) {
      setNumber(1);
    } else {
      setNumber(number - 1);
    }
  };

  const handleSubmit = async (e, product) => {
    e.preventDefault();
    if (!session) {
      setShowAlert(true);
    } else {
      try {
        setLoading(true);
        const resp = await axios.post(`/api/cart/cart`, {
          user: _id,
          product: product,
        });
        router.push("/cart");
        console.log(resp.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="blue"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
        </div>
      ) : (
        <div>
          {showAlert && (
            <PopupAlert
              onClose={handleAlertClose}
              message={"plz login first"}
            />
          )}
          <div className="div">
            <div className="wrapper flex flex-col items-start gap-4  pt-24  xl:pl-14 p-4">
              <div className="top">
                <span className="xl:text-3xl lg:text-3xl text-2xl text-slate-700">
                  {item?.title}
                </span>
              </div>
              <div className="flex xl:flex-row xl:pr-14 lg:pr-14 pr-2 lg:flex-row md:flex-row flex-col items-center lg:gap-14 md:gap-14 gap-8 xl:gap-14">
                <div className="leftsideitem flex-1">
                  <Image
                    className="xl:h-72 lg:h-72 md:h-72  h-60"
                    src={item?.img}
                    height={250}
                    width={350}
                    alt="img"
                  />
                </div>
                <div className="rightside flex-1 items-center xl:items-start flex flex-col gap-4">
                  <span className="xl:text-3xl lg:text-2xl text-xl text-blue-700">
                    {item?.title}
                  </span>
                  <span className="description">{item?.description}</span>
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
                  <div className="price flex gap-4 items-center">
                    <span>Price</span>
                    <span>${item?.price}</span>
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
                    <button
                      onClick={(e) => handleSubmit(e, item?._id)}
                      className=" bg-yellow-600 hover:bg-yellow-500  text-white rounded-lg p-2"
                    >
                      Add to Cart
                    </button>
                    <Link href={"/payment"}>
                      <button className=" bg-green-600 hover:bg-green-500  text-white rounded-lg p-2">
                        Buy Now
                      </button>{" "}
                    </Link>
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
                className="card2 shadow-2xl gap-2 flex w-72 flex-row items-center justify-center bg-fuchsia-50 p-2 rounded-lg"
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
                    <span>${x?.price}</span>
                  </div>
                  <Link href={"/category/1"}>
                    <button className=" bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg p-2">
                      view details
                    </button>{" "}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
