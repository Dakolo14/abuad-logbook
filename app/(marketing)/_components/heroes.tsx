"use client";

import Image from "next/image";

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="relative sm:w-[350px] sm:h-[350px] md:w-[740px] md:h-[500px] lg:h-[827px] lg:w-[1200px]">
                <Image 
                    src="/heroes-img.png"
                    alt="Documents"    
                    className="object-contain"
                    fill            
                />
            </div>
        </div>
    )
}