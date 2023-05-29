import Categories from "../../components/category/category";
import Navbar from "../../components/home/navbar/navbar";
import Footer from "../../components/home/footer/footer";
const CategoryPage = () => {
  return (
    <div>
      <Navbar />
      <div className="xl:pt-32 w-full">
        <Categories />
      </div>
      <Footer />
    </div>
  );
};
export default CategoryPage;
