import React from 'react';

const FirstComponent = () => {
    // আপনার দেওয়া ডেটা পয়েন্ট
    const itemsPoint = [
        {
            image: "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=",
            text: "Amazing View Room",
        },
        {
            image: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
            text: "Stunning Nature Room",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JxgI2qCHTsxA7QPfdfjYhu9rf6CT_-1mAA&s",
            text: "Peaceful Landscape Room",
        },
        {
            image: "https://image-tc.galaxy.tf/wijpeg-5q7kwqrkpzrfm7au40q5o403i/presidential-suite-bedroom1.jpg?width=2000",
            text: "Sunset Room",
        },
    ];

    // Marquee এফেক্টের জন্য ডেটা ডুপ্লিকেট করা হয়েছে যাতে স্ক্রলিং স্মুথ মনে হয়
    const marqueeItems = [...itemsPoint, ...itemsPoint];

    return (
        <div className="bg-white py-8 md:py-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Explore Our Featured Rooms
            </h2>
            <div className="overflow-hidden shadow-xl border border-gray-200 bg-gray-50">
                {/* **Important Note:** The 'animate-marquee' class is a custom utility class 
                  that needs to be defined in your Tailwind CSS configuration (tailwind.config.js) 
                  to create the continuous scrolling effect.
                */}
                <div className="flex items-center animate-marquee whitespace-nowrap space-x-20 p-4">
                    {marqueeItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="flex items-center space-x-4 bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02] min-w-max"
                        >
                            <img
                                src={item.image}
                                alt={item.text}
                                className="h-16 w-16 rounded-full object-cover border-2 border-indigo-500"
                            />
                            <p className="text-lg font-semibold text-indigo-700">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FirstComponent;