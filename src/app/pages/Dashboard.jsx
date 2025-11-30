import { CartIcon, TruckIcon, MedicineIcon } from "../components/Icons"
import { MedicineRecipe } from "../components/DashboardItems"

export function DashboardPage(){
    return(
        <div className="text-black">
            <div className="text-4xl font-bold">
                Stock Monitor
            </div>
            <div className="font-light">
                Welcome Back, Admin Blockchain Engineer
            </div>
            <div className="mt-10">
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex justify-between p-6 bg-white/60 ">
                        <div>
                            <div className="text-base font-semibold text-slate-400">
                                Stock
                            </div>
                            <div className="text-2xl font-bold">
                                10
                            </div>
                        </div>
                        <CartIcon className="w-9 fill-[#6bbade]"/>
                        
                    </div>
                    <div className="flex justify-between p-6 bg-white/60 ">
                        <div>
                            <div className="text-base font-semibold text-slate-400">
                                Active Delivery
                            </div>
                            <div className="text-2xl font-bold">
                                10
                            </div>
                        </div>
                        <TruckIcon className=" w-9 fill-[#6bbade]"/>
                        
                    </div>
                    <div className="flex justify-between p-6 bg-white/60 ">
                        <div>
                            <div className="text-base font-semibold text-slate-400">
                                Medicine
                            </div>
                            <div className="text-2xl font-bold">
                                10
                            </div>
                        </div>
                        <MedicineIcon className=" w-9 fill-[#6bbade]"/>
                        
                    </div>

                </div>
            </div>
            <MedicineRecipe/>
        </div>

    )
}