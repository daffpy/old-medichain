import { EmailIcon, InstaIcon, PhoneIcon } from "../components/Icons";

export function ContactPage(){
    return(
        <div className="py-20">
            <div className="flex flex-col justify-center items-center">
                <div className="text-4xl font-bold text-black">
                    felt convinced yet?
                </div>
                <div className="text-[1.1rem] font-light text-slate-600">
                    get in touch with us!
                </div>
                <div className="flex mt-10 flex-col gap-y-4 items-center">
                    <div className="p-4 w-70 md:w-100 bg-white/20 rounded-lg text-black">
                        <div className="flex gap-4 items-center">
                            <div>
                                <PhoneIcon className="w-6"/>
                            </div>
                            <div>
                                Phone
                            </div>

                        </div>
                    </div>
                    <div className="p-4 w-70  md:w-100 bg-white/20 rounded-lg text-black">
                        <div className="flex gap-4 items-center">
                            <div>
                                <EmailIcon className="w-6"/>
                            </div>
                            <div>
                                Email
                            </div>

                        </div>
                    </div>
                    <div className="p-4 w-70  md:w-100 bg-white/20 rounded-lg text-black">
                        <div className="flex gap-4 items-center">
                            <div>
                                <InstaIcon className="w-6"/>
                            </div>
                            <div>
                                Instagram
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}