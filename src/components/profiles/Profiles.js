import React from 'react';
import { championsData } from '../../assets/dummy';
import Card from './Card';

export default function Profiles() {
    const akali = championsData[0]

    return (
        <div className='profiles-container'>
            {/* <Card src={akali.bg} name={akali.name} cardSrc={akali.img}/> */}
            {
                championsData.map((e) => {
                    return (
                        <Card src={e.bg} cardSrc={e.img} name={e.name} />
                    );
                })  
            }
        </div>
    );
}