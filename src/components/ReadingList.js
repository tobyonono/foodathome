import React from 'react';
import SingleRead from './SingleRead';
import SingleRead2 from './SingleRead2';
import StaticReadingList from './StaticReadingList';
import '../Read.css';

const ReadingList = () => {
    const readCard = StaticReadingList.map((read, i) => {

        return <SingleRead2 key={read.id} id={read.id} name={read.name} image={read.img}
            author={read.author} description={read.description} twitter={read.twitter} instagram={read.instagram}/>
    });

    return (
        <div>
            <ul className='grid grid-cols-2 gap-4 p-4'>
                {readCard}
            </ul>
        </div>

    )
}

export default ReadingList;