"use client"

import { useRouter } from "next/navigation"

export function LoginPage(){
    const router = useRouter()
    return(
        <div className="py-20">
            <div className="flex justify-center">
                <div className="bg-white/20 md:w-100 p-6 text-left">
                    <form>
                        <div className="text-4xl font-bold text-black">
                            Login
                        </div>
                        <div className="flex flex-col py-6 gap-y-4">
                            <div>
                                <div className=" text-slate-600">
                                Username / Email
                            </div>
                            <input id="username" required className="border-none outline-none focus:outline-none focus:ring-0 w-full py-1 px-2 rounded-lg bg-[#9fd4ec] text-black">
                            </input>
                            </div>
                            
                            
                            <div>
                                <div className=" text-slate-600">
                                Password
                            </div>
                            <input id="password" required className="border-none outline-none focus:outline-none focus:ring-0 w-full py-1 px-2 rounded-lg bg-[#9fd4ec] text-black">
                            </input>
                            </div>
                        
                        </div>
                        <button type="submit" className="px-6 py-2 text-white bg-black rounded-lg">

                            Submit
                        </button>
                    </form>
                    <div className="mt-10 text-center font-light text-black">
                        Dont have an account yet? 
                        <span className="font-semibold cursor-pointer"
                        onClick={()=> router.push("/register")}
                        > Create one.</span>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export function RegisterPage(){
    const router = useRouter()
    return(
        <div>
            <div className="py-20">
                <div className="flex justify-center">
                    <div className="bg-white/20 md:w-100 p-10 md:p-6 text-left">
                        <form>
                            <div className="text-4xl font-bold text-black">
                                Register
                            </div>
                            <div className="flex flex-col py-6 gap-y-4">
                                <div>
                                    <div className=" text-slate-600">
                                    Username / Email
                                </div>
                                <input id="username" required className="border-none outline-none focus:outline-none focus:ring-0 w-full py-1 px-2 rounded-lg bg-[#9fd4ec] text-black">
                                </input>
                                </div>
                                
                                
                                <div>
                                    <div className=" text-slate-600">
                                    Password
                                </div>
                                <input id="password" required className="border-none outline-none focus:outline-none focus:ring-0 w-full py-1 px-2 rounded-lg bg-[#9fd4ec] text-black">
                                </input>
                                </div>
                                <div>
                                    <div className=" text-slate-600">
                                    Password Confirmation
                                </div>
                                <input id="password" required className="border-none outline-none focus:outline-none focus:ring-0 w-full py-1 px-2 rounded-lg bg-[#9fd4ec] text-black">
                                </input>
                                </div>
                            
                            </div>
                            <button type="submit" className="px-6 py-2 text-white bg-black rounded-lg">

                                Submit
                            </button>
                        </form>
                        <div className="mt-10 text-center font-light text-black">
                            Already have an account? 
                            <span className="font-semibold cursor-pointer"
                            onClick={()=> router.push("/login")}
                            > Login.</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}