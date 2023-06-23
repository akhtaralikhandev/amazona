"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { ThreeDots } from "react-loader-spinner";
import "./card.css";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
const Card = () => {
  const [categories, setCategories] = useState();
  const [category_id, setCategoryId] = useState("");
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const resp = await axios.get("/api/category/category");
        setCategories(resp.data);
        console.log(resp.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-wrap gap-8 items-center justify-center">
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
        categories?.map((x, index) => (
          <Link
            onClick={() => {
              setCategoryId(x?._id);
              console.log(x?._id);
            }}
            href={`/category/categoryId=${x?._id}`}
            key={index}
          >
            <div className="card shadow-2xl gap-2 flex w-72 flex-row items-center justify-center bg-fuchsia-50 p-2 rounded-lg">
              <div className="card_wrapper flex flex-col gap-4">
                <span>{x?.title}</span>
                <Image
                  className="xl:h-72 lg:h-72 md:h-72  h-60"
                  src={x?.img}
                  height={250}
                  width={350}
                  alt="img"
                />
                <span>see more</span>
              </div>
            </div>{" "}
          </Link>
        ))
      )}
    </div>
  );
};
export default Card;
