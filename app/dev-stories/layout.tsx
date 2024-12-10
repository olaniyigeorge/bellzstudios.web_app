import React from "react"

export default function DevStorysLayout({children}: {children: React.ReactNode}) {

    return (
        <div className="w-full h-full py-2"> 
            {children} 
        </div>
    )
}