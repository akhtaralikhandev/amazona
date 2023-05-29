"use client";
import { ThreeDots } from "react-loader-spinner";
const Loading = () => {
  return (
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
  );
};
export default Loading;
