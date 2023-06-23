"use client";
import Categories from "../../../components/category/category";
import Navbar from "../../../components/home/navbar/navbar";
import { Category_context } from "@/components/category/context";
import Footer from "../../../components/home/footer/footer";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams, useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
const CategoryPage = ({ searchParams }) => {
  const params = useParams();
  const decodedString = decodeURIComponent(params.id);
  const _id = decodedString.split("=")[1];
  const [categories, setCategories] = useState("");
  const [loading, setLoading] = useState("");
  console.log(_id);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const resp = await axios.get(`/api/products/products?category=${_id}`);
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

  return (
    <div>
      <Navbar />
      <div className="xl:pt-32 w-full">
        <Categories categories={categories} />
      </div>
      <Footer />
    </div>
  );
};
export default CategoryPage;
