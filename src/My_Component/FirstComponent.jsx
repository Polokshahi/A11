import React from 'react';

const FirstComponent = () => {
    
    const guestReviews = [
        {
            id: 1,
            name: "JOE DOE",
            review: "I was in Italy for the first time and stayed by chance in a beautiful cottage Monte Blanco. I must say that was an amazing and unforgettable experience!",
         
            image: "https://placehold.co/80x80/293241/ffffff/jpg?text=JD",
        },
        {
            id: 2,
            name: "KIM LEE",
            review: "I'll never forget our summer stay at villa Emilia! Perfect location, perfect service, amazing nature views. I enjoyed the stay and would recommend it to everyone. Moreover, there are a lot of interesting things to visit and do - festivals, food tours, castles and much more!",
        
            image: "https://placehold.co/80x80/6E3B5C/ffffff/jpg?text=KL",
        },
        {
            id: 3,
            name: "TOM HENDRIX",
            review: "I was visiting Le Marche with my family and friends and stayed at Etna House - this was an amazing and unforgettable stay! A lot of space, a pool, a beachfront, just a peaceful rest.",
            image: "https://placehold.co/80x80/4285F4/ffffff/jpg?text=TH",
        },
    ];

    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
            {/* Main Title Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
                    Guest Reviews
                </h1>
            </div>

            {/* Reviews Grid - Responsive 1 column on mobile, 3 columns on desktop */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
                {guestReviews.map((review) => (
                    <div 
                        key={review.id} 
                        className="flex flex-col items-start"
                    >
                        {/* Reviewer Image and Quote/Text Container */}
                        <div className="flex items-start space-x-4 w-full">
                            {/* Reviewer Image */}
                            <img
                                className="h-20 w-20 rounded-full object-cover flex-shrink-0 shadow-lg"
                                src={review.image}
                                alt={review.name}
                                // ইমেজ লোড না হলে ফলব্যাক টেক্সট দেখাবে
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/D1D5DB/4B5563?text=User" }}
                            />

                            {/* Quote and Review Text */}
                            <div className="relative pt-4">
                                {/* Large Faded Quote Mark (similar to image) */}
                                <span className="absolute top-0 left-0 text-5xl text-gray-300 font-serif leading-none opacity-80 z-0">
                                    &#8220;
                                </span>
                                
                                <p className="text-gray-700 text-base leading-relaxed mt-4 z-10 relative pl-4">
                                    {review.review}
                                </p>
                            </div>
                        </div>
                        
                        {/* Reviewer Name */}
                        <p className="text-sm font-semibold uppercase text-teal-600 mt-4 pl-24 md:pl-28">
                            — {review.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FirstComponent;
