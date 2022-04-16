import React from 'react';

export default function Card(props) {
    return (
        <div className='card-container'>
            <div className='card-img-container'>
                <div className='card-img-filter'>
                    <img className='card-img' src={props.src}>
                    </img>
                </div>
                <div className='card-hover-img-container'>
                    <img className='card-hover-img' src={props.cardSrc}></img>
                </div>
            </div>
            <div className='card-name-container'>
                <p className='card-name'>{props.name}</p>
            </div>
        </div>
    );

}