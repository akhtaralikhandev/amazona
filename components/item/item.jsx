import Image from "next/image";
const Item = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="top">
          <span>Keyboard</span>
        </div>
        <div>
          <div className="leftsideitem">
            <Image
              className="xl:h-72 lg:h-72 md:h-72  h-60"
              src={"/categories/computer/img1.png"}
              height={250}
              width={350}
              alt="img"
            />
          </div>
          <div className="rightside"></div>
        </div>
      </div>
    </div>
  );
};
export default Item;
