"use client";
import Navbar from "../../../components/home/navbar/navbar";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import Item from "../../../components/item/item";
const ItemPageComponent = () => {
  const router = useRouter();
  console.log("this is a router page");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  console.log(searchParams);
  console.log(router);
  return (
    <div>
      <Navbar />
      <Item />
      
    </div>
  );
};
export default ItemPageComponent;
