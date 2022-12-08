import React from 'react';
import SingleRead from './SingleRead';
import SingleRead2 from './SingleRead2';
import '../Read.css';

const ReadingList = ({staticList}) => {
    const readCard = staticList.map((read, i) => {

        return <SingleRead2 key={read.id} id={read.id} name={read.name} image={read.img}
            author={read.author} description={read.description} twitter={read.twitter} instagram={read.instagram} asset={read.asset}/>
    });

    return (
        <div>
            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-4'>
                {readCard}
            </ul>
        </div>

    )
}

export default ReadingList;