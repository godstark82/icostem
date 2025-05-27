import React from "react";

export default function AboutHeader({ title = 'University Profile', date = '14 - 15 October', image = '/images/simdte-white-lg.png', overlayColor = '#d0224a', bgImage = '/images/utb-images/gallery/gallery-2.jpg', dividerColor = 'white' }) {
    return (
        <div style={
            {
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backdropFilter: 'blur(10px)',
            }
        }
            className="relative w-full h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden"
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: overlayColor,
                    opacity: 0.8,
                }}
            />
            
            <div className="absolute inset-0 flex items-center">
                <div className="w-full px-4 md:px-12 flex flex-col md:flex-row items-center text-white gap-4 md:gap-0">
                    <img 
                        src={image}
                        alt="Header Image"
                        className="hidden md:block h-[150px] object-contain"
                    />
                    <div className="flex-1 md:ml-[-7.5%] flex flex-col items-center justify-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-center md:text-left">
                            {title}
                        </h1>
                        <div className={`h-1.5 md:h-2 w-20 md:w-24 bg-${dividerColor} mt-3 md:mt-4`}></div>
                    </div>
                    <div className="outline-white outline bg-white px-3 py-1 text-xl md:text-2xl lg:text-3xl font-bold text-primary">
                        {date}
                    </div>
                </div>
            </div>
        </div>
    );
}