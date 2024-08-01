import React from 'react';

export default function Loading() {
    return (
        <div className='flex items-center justify-center min-h-screen'> {/* Ensure the parent has flex properties */}
            <div className='flex flex-col items-center justify-center gap-1'>
                <dotlottie-player 
                    src="https://lottie.host/3592dde7-08ab-4f76-ba14-933788a3d1f3/3EVf6aFsQF.json" 
                    background="transparent" 
                    speed="1" 
                    style={{ width: "400px", height: "350px" }} 
                    loop 
                    autoplay
                ></dotlottie-player>
                <p className='popmed text-2xl text-center'>Bridging the gap to awesome content...</p> {/* Added text-center */}
            </div>
        </div>
    );
}
