import React from 'react';
import { Link } from 'react-router-dom';


const SingleRead = ({ id, name, author, image, asset, description, twitter, instagram, website }) => (

    <li className="relative grid grid-cols-[repeat(12,_1fr)] items-center font-nitti p-3 border-2 text-sm uppercase shadow-lg rounded-lg">
        <div className=" relative col-[7_/_-1] row-[1_/_1] text-right">
            <div className=''>
                <p className="my-2 text-xs text-white relative z-10">{author}</p>
                <h3 className="mb-6 text-[bisque] text-2xl relative z-10">{name}</h3>
                <div className="relative z-10 p-5 bg-white shadow-lg border-8 border-solid border-[bisque]">
                    <p className=" text-black text-left font-guyot normal-case text-[0.75rem]">{description}</p>
                </div>
                <ul className="relative flex flex-wrap z-10 mt-6 mb-3 justify-end text-white text-[0.7rem]">
                    <a href={twitter}><li className="border border-white p-2 m-1 shadow-lg hover:bg-white hover:text-black rounded-2xl ">Twitter</li> </a>
                    <a href={instagram}><li className="border border-white p-2 m-1 shadow-lg hover:bg-white hover:text-black rounded-2xl">Instagram</li></a>
                </ul>
            </div>
        </div>
        <div className="relative col-[1_/_8] row-[1_/_-1]">
            
        <div>{asset ? <div className='brightness-50'>{asset} </div> : <a className='hover:brightness-50 cursor-pointer' href={website}><img src={image} /></a>}</div>

        </div>
    </li>

)

export default SingleRead;