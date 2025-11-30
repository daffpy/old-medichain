export function FooterLayout(){
    return(
        <div>
            <div className="w-full">
                <div className="border-t-white/40 border-t mx-10">
                    <div className="grid grid-cols-3 gap-4 text-black justify-items-center py-6">
                        <div className="self-center font-bold text-lg lg:text-xl">
                            MediChain
                        </div>
                        <div>
                            <div className="font-bold">
                               Navigation 
                            </div>
                            <div>
                                Home
                            </div>
                            <div>
                                Service
                            </div>
                            <div>
                                About Us
                            </div>
                            
                        </div>
                        <div>
                            <div className="font-bold">
                                Contact Us
                            </div>
                            <div>
                                +62
                            </div>
                            <div>
                                Email
                            </div>
                            
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}