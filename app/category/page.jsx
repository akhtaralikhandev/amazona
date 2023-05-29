import Categories from "../../components/category/category";
import Navbar from "../../components/home/navbar/navbar";
import Footer from "../../components/home/footer/footer";
const computersAndLaptops = [
  {
    title: "Laptop X1",
    description: "Powerful laptop for professional use",
    price: 1299.99,
    sizes: [],
    color: "Silver",
    img: "/categories/computer/img1.png",
  },
  {
    title: "Gaming PC",
    description: "High-performance gaming computer",
    price: 1999.99,
    sizes: [],
    color: "Black",
    img: "/categories/computer/img2.png",
  },
  {
    title: "Laptop X1",
    description: "Powerful laptop for professional use",
    price: 1299.99,
    sizes: [],
    color: "Silver",
    img: "/categories/computer/img3.jpg",
  },
  {
    title: "Gaming PC",
    description: "High-performance gaming computer",
    price: 1999.99,
    sizes: [],
    color: "Black",
    img: "/categories/computer/img4.jpg",
  },
];

const CategoryPage = () => {
  return (
    <div>
      <Navbar />
      <div className="xl:pt-32 w-full">
        <Categories categories={computersAndLaptops} />
      </div>
      <Footer />
    </div>
  );
};
export default CategoryPage;
