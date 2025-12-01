import Image from "next/image"
import { StarIcon, LockIcon, UserControlIcon, IntegrityIcon } from "../components/Icons"

export function MainPageLayout(){
    return(
        <div className="py-10">

        
        <div className="py-10 px-20 mt-10 text-black">
            <div className="flex flex-col justify-center items-center lg:items-baseline lg:flex-row gap-x-10 lg:gap-x-20 gap-y-8">
                <div className="md:w-120">
                    <div className="text-4xl font-bold text-center">
                        Integrated and Secure Medical Record
                        
                    </div>
                    <div className="mt-5 flex text-[1.15rem] justify-center">
                        <div className="text-left text-slate-700 font-light">
                            A blockchain based medical record that gives you complete control over your health data. Easy, secure, and integrated access for patients, doctors, and healthcare facilities.
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className=" py-3 mt-10 px-4 hover:scale-[1.05] duration-300 rounded-lg bg-white/50">
                            Start Now
                        </div>
                    </div>
                    
                    
                </div>
                <div className=" md:w-120 bg-white/30 rounded-lg">
                    <div className="grid text-lg gap-4 p-4">
                        <div className="flex gap-4 items-center bg-blue-900/6 p-4 rounded-lg">
                            <div>
                                <LockIcon className="w-10"/>
                            </div>
                            <div>
                                <div className="font-bold">
                                    Protected Data
                                </div>
                                <div className="text-base text-slate-500">
                                    End-to-End Encryption
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex gap-4  bg-blue-900/6 p-4 rounded-lg">
                            <div>
                                <UserControlIcon className="w-10"/>
                            </div>
                            <div>
                                <div className="font-bold">
                                    Controlled Access
                                </div>
                                <div className="text-base text-slate-500">
                                    Let users decide
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex gap-4  bg-blue-900/6 p-4 rounded-lg">
                            <div>
                                <IntegrityIcon className="w-10" />
                            </div>
                            <div>
                                <div className="font-bold">
                                    Immutable Records
                                </div>
                                <div className="text-base text-slate-500">
                                    It can't be artificially evoked
                                </div>
                            </div>
                            
                        </div>

                    </div>

                </div>
            </div>
            
        </div>
            <div className="my-20">
                <Image className="w-full h-90 object-cover lg:object-[70%_30%]" src="/images/consulting2.jpg" width={2000} height={1200} alt=""/>

            </div>
            <div className="flex flex-col pb-10 justify-center px-20 gap-4">
                <div className="text-3xl text-center text-black">
                    what does our client think about us ?
                </div>
                <div className="flex justify-center gap-2">
                    <StarIcon className="w-7"/>
                    <StarIcon className="w-7"/>
                    <StarIcon className="w-7"/>
                    <StarIcon className="w-7"/>
                    <StarIcon className="w-7"/>

                </div>
                <div className="italic text-center text-[1.15rem] lg:text-xl text-black font-light mt-4 lg:mt-6">
                    "the long-awaited easy solution"
                </div>
            </div>
        </div>
    )
}