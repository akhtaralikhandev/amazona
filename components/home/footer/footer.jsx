const Footer = () => {
  return (
    <div className="bg-slate-900 xl:pt-14 lg:pt-14  p-8 xl:pl-32 lg:pl-32 xl:pr-32 lg:pr-32 text-white">
      <div>
        <div className="footer_wrapper xl:flex-row lg:flex-row md:flex-wrap flex-col flex justify-between lg:items-center xl:items-center">
          <div className="footer2">
            <ul className="flex flex-col gap-2">
              <li className=" cursor-pointer hover:underline">About Us</li>
              <li className=" cursor-pointer hover:underline">Contact Us</li>
              <li className=" cursor-pointer hover:underline">FAQ</li>
            </ul>
          </div>
          <div className="footer3">
            <ul className="flex flex-col gap-2">
              <li className=" cursor-pointer hover:underline">
                Terms and Conditions
              </li>
              <li className=" cursor-pointer hover:underline">
                Privacy Policy
              </li>
              <li className=" cursor-pointer hover:underline">
                Shipping Policy
              </li>
            </ul>
          </div>
          <div className="footer4">
            <ul className="flex flex-col gap-2">
              <li className=" cursor-pointer hover:underline">Return Policy</li>
              <li className=" cursor-pointer hover:underline">Refund Policy</li>
              <li className=" cursor-pointer hover:underline">
                Customer Support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
