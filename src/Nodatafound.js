import React from 'react';

export default function NoDataFound() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <dotlottie-player 
                src="https://lottie.host/ad5999ff-15d4-4e97-9fa4-88a18a73387b/KEStMjrxKd.json" 
                background="transparent" 
                speed="1" 
                style={{ width: "300px", height: "300px" }} 
                loop 
                autoplay
            ></dotlottie-player>
            <h2 className='text-2xl mt-4'>No Blogs Yet...</h2>
            <p className='mt-2 text-center'>It looks like you haven't written any blogs yet. Start sharing your thoughts and ideas with the world!</p>
            <button 
                className='mt-5 bg-[#539F8D] text-white py-2 px-4 rounded hover:bg-[#3a7764]'
                onClick={() => window.location.href='/createblog'}
            >
                Write Your First Blog
            </button>
        </div>
    );
}
