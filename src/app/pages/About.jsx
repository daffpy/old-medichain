import Image from "next/image"

export function AboutPage(){
    return(
        <div className="py-20">
            <div className="flex gap-y-20 flex-col px-10 md:px-20 text-black justify-center items-center">
                <div className="self-start">
                    <div className="text-center font-bold text-4xl">
                        what is MediChain?
                    </div>
                    <div className="md:w-160 text-center mt-4 font-light">
                        We make the pharmaceutical supply chain transparent and reliable, ensuring that patients get the right medicine, every time. Our platform allows affiliates to track inventory, monitor deliveries, and maintain compliance across multiple pharmacies and hospitals-all in real time
                    </div>
                </div>
                <div className="self-end">
                    <div className="text-center font-bold text-4xl">
                        but, why MediChain? 
                    </div>
                    <div className="md:w-160 mt-4 text-center font-light">
                        Because every patient deserves certainty. MediChain eliminates guesswork and prevents counterfeit risks by giving you full visibility into the pharmaceutical supply chain — from manufacturer to patient. With real-time tracking, trusted verification, and seamless coordination across pharmacies and hospitals, we make access to safe medicine simple, transparent, and reliable.
                    </div>
                </div>
            </div>
            <div className="my-20">
                <Image className="w-full h-90 object-cover lg:object-[70%_30%]" src="/images/consulting2.jpg" width={2000} height={1200} alt=""/>
    
            </div>
            <div className="px-10 md:px-20 text-4xl ">
                <div className="flex flex-col text-black font-bold justify-center items-center">
                    <div>
                        Our Partner
                    </div>
                    <div className="flex mt-10 gap-4">
                        <Image className="w-30" src="/images/brand/graceful.png" alt="" width={1024} height={1024}/>
                        <Image className="w-30" src="/images/brand/jeno.png" alt="" width={1024} height={1024}/>
                    </div>

                </div>
            </div>

        </div>
    )
}