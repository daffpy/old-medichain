export function ServicePage(){
    return (
        <div className="py-10">
            <div className="">
                <div className="flex flex-col items-center text-center">
                    <div className="text-black text-4xl font-bold">
                        MediChain Key Features
                    </div>
                    <div className="text-slate-600 md:w-140 px-10 py-3">
                        A comprehensive solution for secure, efficient, and patient-centered medical records management.
                    </div>
                </div>

                <div className="grid py-10 lg:grid-cols-3 justify-items-center gap-10 p-20">
                    <div className="bg-white/20 p-6 text-center text-black">
                        <div className="font-semibold">
                            Blockchain Security
                        </div>
                        <div className="text-slate-600 font-light">
                            Medical data is encrypted and stored on a blockchain that cannot be changed or falsitied
                        </div>
                    </div>
                    <div className="bg-white/20 p-6 text-center text-black">
                        <div className="font-semibold">
                            Patient Control
                        </div>
                        <div className="text-slate-600 font-light">
                            User have full control to grant or revoke access to medical data to anyone
                        </div>
                    </div>
                    <div className="bg-white/20 p-6 text-center text-black">
                        <div className="font-semibold">
                            Privacy Guaranteed
                        </div>
                        <div className="text-slate-600 font-light">
                            Decentralized system ensures that no single party can access your data
                        </div>
                    </div>
                    <div className="bg-white/20 p-6 text-center text-black">
                        <div className="font-semibold">
                            Real-time Integration
                        </div>
                        <div className="text-slate-600 font-light">
                            Data is automatically synchronize between connected health facilities
                        </div>
                    </div>
                    <div className="bg-white/20 p-6 text-center text-black">
                        <div className="font-semibold">
                            Complete History
                        </div>
                        <div className="text-slate-600 font-light">
                            Access your entire medical history from multiple facilities in one integrated platform.
                        </div>
                    </div>
                    <div className="bg-white/20 p-6 text-center text-black">
                        <div className="font-semibold">
                            Emergency Access
                        </div>
                        <div className="text-slate-600 font-light">
                            Emergency medical teams can quickly access critical information when needed.
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}