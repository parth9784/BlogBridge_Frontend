import React from "react";

export default function NotFound() {
    return (
        <div className="flex flex-wrap justify-center items-center">
            <lottie-player
                src="https://lottie.host/9a7e23a1-0fce-41e7-8f21-d93fd3071cb3/VSMMJtXM93.json"
                background="##FFFFFF"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoplay
                direction="1"
                mode="normal"
            ></lottie-player>
            <div className="flex flex-col">
            <div className="popmed h-[300px] w-[400px] pops flex justify-center items-center">
                <p>
                It looks like we couldn't find any blogs matching your search. But don't be disheartened! BlogBridge is a treasure trove of diverse ideas, stories, and insights waiting to be discovered. Perhaps try a different keyword or explore some of our latest or popular posts. There's always something inspiring around the corner. Happy exploring!
                </p>
            </div>
            </div>
         </div>
    );
}
