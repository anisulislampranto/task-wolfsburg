import React from 'react';
import './List.css';

const List = (props) => {
    const {title, text2, text1, src} = props.list;

    const handleDelete =(e)=>{
        e.target.parentNode.style.display = 'none';
    }

    return (
        <div className='list-card col-md-12 col-12 gap-5'>
            <img src={src} alt="" />
            <div className='mx-2 container-fluid'>
                <h2 className='container-fluid' >{title}</h2>
                <h4 className='my-5'>{text1}</h4>
                <h4>{text2}</h4> 
            </div>
            <button onClick={(e)=>handleDelete(e)} className='btn btn-danger delete-btn'>Delete</button>
        </div>
    );
};

export default List;