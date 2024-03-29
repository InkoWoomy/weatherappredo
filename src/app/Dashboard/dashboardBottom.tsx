'use client';


export default function FiveDay(){
    return (
        <div className="px-10 justify-center gap-4">
            <div className="grid grid-cols-5 bg-indigo-900 border-indigo-400 border-4 col-span-7 rounded-xl text-zinc-50 py-10">
                {/** 5-day forecast */}  
                <div className=" border-8 flex items-center justify-center size-72 justify-self-center">
                    1
                </div>
                <div className=" border-8 flex items-center justify-center size-72 justify-self-center">
                    2
                </div>
                <div className=" border-8 flex items-center justify-center size-72 justify-self-center">
                    3
                </div>
                <div className=" border-8 flex items-center justify-center size-72 justify-self-center">
                    4
                </div>
                <div className=" border-8 flex items-center justify-center size-72 justify-self-center">
                    5
                </div>
            </div>
        </div>
    )
}

