"use client";
import Navbar from "../../../components/home/navbar/navbar";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
const ItemPageComponent = () => {
  const router = useRouter();
  console.log("this is a router page");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // console.log(pathname);
  console.log(searchParams);
  console.log(router);
  return (
    <div>
      <Navbar />
      <h1>this si a router</h1>
    </div>
  );
};
export default ItemPageComponent;
