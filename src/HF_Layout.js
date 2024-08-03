import React from 'react'
import Foter from './foter'
import Navbar from './Navbar'
export default function HF_Layout({children, isLoggedIn, onLogout,setquery}){
    return(
        <div>
        <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} setquery={setquery}/>
        <div className='mt-3 flex-grow'>
        {children}
        </div>
        <Foter/>
        </div>
    );
}