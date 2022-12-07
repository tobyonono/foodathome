import React from 'react';
import { Link } from 'react-router-dom';


const SingleRead = ({ id, name, author, image, type, twitter, instagram }) => {
    console.log(image);

    return (
        <li className="relative grid grid-cols-[repeat(12,_1fr)] items-center font-mono mb-20 p-3 border font-nitti text-sm uppercase shadow-lg rounded-lg">
            <div className=" relative col-[7_/_-1] row-[1_/_1] text-right">
                <div className=''>
                    <p className="m-2 text-xs text-white">{author}</p>
                    <h3 className="mb-6 text-[bisque] text-2xl">{name}</h3>
                    <div className="relative z-10 p-5 bg-white shadow-lg border-8 border-solid border-[bisque]">
                        <p className=" text-black">Rachel Ama is reframing vegan cooking. Create a veg-packed centrepiece dish in one pan/pot/tray and choose from three creative and flavoursome ways to either serve it up with just a few ingredients or transform it into something else entirely.</p>
                    </div>
                    <ul className="relative flex flex-wrap z-10 mt-6 mb-3 justify-end text-white">
                    <li className="border border-white p-1 m-1 shadow-lg">Twitter</li>
                    <li className="border border-white p-1 m-1 shadow-lg">Instagram</li>
                    
                    </ul>
                </div>
            </div>
            <div className="relative col-[1_/_8] row-[1_/_-1]">
                <a href='http://www.rachelama.com'>
                <div className='hover:brightness-50 cursor-pointer'><img src={image} /></div>
                </a>
            </div>
        </li>




    )

}

export default SingleRead;