import React from 'react';
import data from '../data.json'
import List from '../List/List';

const Lists = () => {
    return (
        <div className='row gap-4 my-5 mx-2'>
            {
                data.map( list => <List list={list} id={list.id}/>)
            }
        </div>
    );
};

export default Lists;