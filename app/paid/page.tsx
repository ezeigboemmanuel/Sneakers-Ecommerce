import Done from "@/assets/icons/done.svg";
import ContinueShopping from "@/components/ContinueShopping";
import Image from "next/image";

const page = () => {
  return (
    <div className=" px-4 md:px-8">
      <div className="text-center flex flex-col justify-center items-center mt-10">
        <Image src={Done} alt="done" className="mb-4" />
        <h1 className="font-[500] text-[18px] md:text-[22px] uppercase">
          thank you!
        </h1>
        <p>
          Your order was placed successfully! <br /> Your order number is{" "}
          <span className="font-[500]">SNK-908</span>
        </p>
      </div>

      <div>
        <ContinueShopping />
      </div>
    </div>
  );
};

export default page;
