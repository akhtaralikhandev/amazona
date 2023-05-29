import Navbar from "../components/home/navbar/navbar";
import Slider from "../components/home/slider/slider";
import Card from "../components/home/card/card";
import Footer from '../components/home/footer/footer'
export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Slider />
      <div className="divdivider flex items-center xl:p-32 lg:p-32 p-6 justify-center">
        <span className="xl: lg:text-5xl md:text-3xl text-xl text-slate-800 font-bold ">
          CHOOSE FROM BELOW CATEGORIES
        </span>
      </div>
      <div className="xl:p-4 lg:p-4 md:p-4 p-2 ">
        <Card />
      </div>
      <div className="footer">
      <Footer/>
      </div>
    </div>
  );
}
