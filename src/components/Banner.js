import React from 'react'


function Banner({title,description,imageUrl}) {
    return (
        <div className="flex items-center justify-around bg-black relative ">
            <img className='w-full h-[75vh]  md:h-[95vh] object-cover opacity-[0.4]'  src={imageUrl} alt="" />
            <div className="space-y-5 absolute top-[36%] text-white  text-center ">
                <h1 className="text-lg lg:text-6xl uppercase font-semibold m-10">{title}</h1>
                <h2 className="text-xl">{description}</h2>  
            
                
            </div>

        </div>
    )
}

export default Banner