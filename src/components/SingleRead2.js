import React from 'react';
import { Link } from 'react-router-dom';


const SingleRead = ({ id, name, author, image, asset, description, twitter, instagram }) => (

    <li className="relative grid grid-cols-[repeat(12,_1fr)] items-center font-nitti p-3 border font-nitti text-sm uppercase shadow-lg rounded-lg">
        <div className=" relative col-[7_/_-1] row-[1_/_1] text-right">
            <div className=''>
                <p className="m-2 text-xs text-white ">{author}</p>
                <h3 className="mb-6 text-[bisque] text-2xl relative z-10">{name}</h3>
                <div className="relative z-10 p-5 bg-white shadow-lg border-8 border-solid border-[bisque]">
                    <p className=" text-black text-left font-guyot normal-case">{description}</p>
                </div>
                <ul className="relative flex flex-wrap z-10 mt-6 mb-3 justify-end text-white">
                    <a href={twitter}><li className="border border-white p-2 m-1 shadow-lg hover:bg-white hover:text-black rounded-2xl text-xs">Twitter</li> </a>
                    <a href={instagram}><li className="border border-white p-2 m-1 shadow-lg hover:bg-white hover:text-black rounded-2xl text-xs">Instagram</li></a>
                </ul>
            </div>
        </div>
        <div className="relative col-[1_/_8] row-[1_/_-1]">
            <a className='' href='http://www.rachelama.com'>
                <div className='hover:brightness-50 cursor-pointer'>{asset ? asset : <img src={image} />}</div>
            </a>
        </div>
    </li>

)

export default SingleRead;