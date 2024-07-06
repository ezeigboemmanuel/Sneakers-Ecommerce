import Image4 from "@/assets/sneakers/image4.png"
import Image from "next/image"

const NewCollections = () => {
  return (
    <div className='pt-14 px-8'>
        <h1 className='text-[#2E2E2E] text-center text-[30px] font-[500] mb-8'>NEW COLLECTIONS</h1>

        <div>
            <div className="w-80">
                <Image src={Image4} alt="sneakers_image" className="rounded-2xl w-full" />
                <div>
                    <p className="text-[#141414] font-[500] text-[20px]">Zephyr Swiftstrike Pro</p>
                    <p className="text-[#141414]/[0.8] text-base">Men's Shoes</p>
                    <p className="text-[#141414]/[0.8] text-base">1 Colour</p>
                    <p className="text-[#141414] font-[500] text-base">₦ 140,540</p>
                </div>
            </div>
            <div className="w-56">
                <Image src={Image4} alt="sneakers_image" className="rounded-2xl w-full brightness-75" />
                <div>
                    <p className="text-[#141414]/[0.5] font-[500] text-[20px]">Zephyr Swiftstrike Pro</p>
                    <p className="text-[#141414]/[0.3] text-base">Men's Shoes</p>
                    <p className="text-[#141414]/[0.3] text-base">1 Colour</p>
                    <p className="text-[#141414]/[0.5] font-[500] text-base">₦ 140,540</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewCollections