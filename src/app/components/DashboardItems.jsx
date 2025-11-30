import { MedicineIcon } from "./Icons"

export function MedicineRecipe(){
    return(
        <div className="mt-10">
            <div className="py-5">
                <div className="text-2xl font-bold">
                    Resep Obat Aktif
                </div>
                <div className="font-light">
                    Obat yang sedang dikonsumsi
                </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-4">
                <div className=" flex justify-between bg-white/60 py-6 px-5 gap-6">
                    <div className="flex gap-2 ">
                        <div>
                            <MedicineIcon className="fill-[#6bbade] w-5"/>
                        </div>
                        <div>
                            Amoxicillin 500mg
                        </div>
                    </div>
                    <div className="text-slate-400 text-[14px] shrink-0 w-20">
                        Until 25 November 2025
                    </div>
                </div>
                <div className=" flex justify-between bg-white/60 py-6 px-5 gap-6">
                    <div className="flex gap-2 ">
                        <div>
                            <MedicineIcon className="fill-[#6bbade] w-5"/>
                        </div>
                        <div>
                            Amoxicillin 500mg
                        </div>
                    </div>
                    <div className="text-slate-400 text-[14px] shrink-0 w-20">
                        Until 25 November 2025
                    </div>
                </div>
                <div className=" flex justify-between bg-white/60 py-6 px-5 gap-6">
                    <div className="flex gap-2 ">
                        <div>
                            <MedicineIcon className="fill-[#6bbade] w-5"/>
                        </div>
                        <div>
                            Amoxicillin 500mg
                        </div>
                    </div>
                    <div className="text-slate-400 text-[14px] shrink-0 w-20">
                        Until 25 November 2025
                    </div>
                </div>

            </div>
        </div>
    )
}