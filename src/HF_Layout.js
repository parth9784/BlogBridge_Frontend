import React from 'react'
import Foter from './foter'
import Navbar from './Navbar'
export default function HF_Layout({children}){
    return(
        <div>
        <Navbar/>
        <div className='mt-3 flex-grow'>
        {children}
        </div>
        <Foter/>
        </div>
    );
}