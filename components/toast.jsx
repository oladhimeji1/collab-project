import { useState } from "react"

export default function Toast(){

    const [isShow, setIsShow] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    return (
        <>
        {/* { isShow && <div className=" w-48 h-20 bg-green-500 rounded-lg border-b-4 border-green-900 top-80 fixed opacity-90 z-50 left-24 sm:left-[15rem] md:left-[24rem] lg:left-[35rem]">
                <p className="ml-3 mt-1 text-white">Thank you for your response.</p>
                <p className="ml-3 text-white">Submited Succesfully</p>
            </div>} */}
        { isLoading && <div className=" w-48 h-20 bg-green-500 rounded-lg border-b-4 border-green-900 top-80 fixed opacity-90 z-50 left-24 sm:left-[15rem] md:left-[24rem] lg:left-[35rem]">
                <div className="ml-3 mt-1 h-7 w-7 border-t-green-900 animate-spin border-2 border-white rounded-full"></div>
                <p className="ml-3 text-white">Submited Succesfully</p>
            </div>}
        </>
    )
}