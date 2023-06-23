"use client";
import { useParams } from "next/navigation";
import Item from "../../../components/item/item";
import { useState, useEffect } from "react";
import axios from "axios";
const Page = () => {
  const [item, setItem] = useState("");
  const [loading, setLoading] = useState("");
  const params = useParams();
  const decodedString = decodeURIComponent(params.id);
  const _id = decodedString.split("=")[1];
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const resp = await axios.get(`/api/products/single?id=${_id}`);
        setItem(resp?.data);
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
      <Item item={item} />
    </div>
  );
};
export default Page;
