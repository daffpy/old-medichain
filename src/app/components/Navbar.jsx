"use client"


import { useState } from "react"
import { useRouter } from "next/navigation"
import { ListIcon, CloseIcon } from "./Icons"

export function NavbarLayout(){
    const router = useRouter()
    const [navOpened, setNav] = useState(false)
    return(
        <div>
            <div className="flex justify-between text-lg py-6 px-8 h-15 text-black">
                <div className="text-xl font-bold cursor-pointer"
                onClick={()=> {router.push("/")}}>
                    MediChain
                </div>
                <div>
                    <div className="lg:block hidden gap-4">
                        <div className="flex font-medium text-[16px] gap-4 cursor-pointer">
                            <div className="hover:font-bold duration-200 hover:scale-[1.1]"
                            onClick={() => router.push("/about")}
                            >
                                About Us
                            </div>
                            <div className="hover:font-bold duration-200 hover:scale-[1.1]"
                            onClick={() => router.push("/services")}
                            >
                                Service
                            </div>
                            <div className="hover:font-bold duration-200 hover:scale-[1.1]"
                            onClick={() => router.push("/contact")}
                            >
                                Contact Us
                            </div>
                            <div className="hover:font-bold duration-200 hover:scale-[1.1]"
                            onClick={() => router.push("/dashboard")}
                            >
                                Dashboard
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-end">
                            {
                                !navOpened ? 
                            
                                <div className="block lg:hidden bg-white/60 p-2 rounded-lg duration-300"
                                onClick={()=> {setNav(!navOpened)}}
                                >
                                    <ListIcon className="w-5"/>
                                </div>
                            :
                                <div className="block lg:hidden bg-white/60 p-2 rounded-tl-lg rounded-tr-lg duration-300"
                                onClick={()=> {setNav(!navOpened)}}
                                >
                                    <CloseIcon className="w-5"/>
                                </div>

                            }
                        </div>
                    </div>

                </div>

            </div>
            {
                        navOpened ? 
                    
                        <div className="block lg:hidden">
                        <div className="flex-col flex text-base text-black drop-shadow-2xl cursor-pointer bg-white/60 ">
                            <div className="duration-300 hover:ml-5 hover:font-bold px-6 py-4"
                            onClick={() => router.push("/about")}
                            >
                                About Us
                            </div>
                            <div className="duration-300 hover:ml-5 hover:font-bold px-6 py-4"
                            onClick={() => router.push("/services")}
                            >
                                Service
                            </div>
                            <div className="duration-300 hover:ml-5 hover:font-bold px-6 py-4"
                            onClick={() => router.push("/contact")}
                            >
                                Contact Us
                            </div>
                            <div className="duration-300 hover:ml-5 hover:font-bold px-6 py-4"
                            onClick={() => router.push("/dashboard")}
                            >
                                Dashboard
                            </div>
                            
                        </div>
                        </div>
                        : null
                    }
        </div>
    )
}