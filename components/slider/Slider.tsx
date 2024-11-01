"use client"
// Import necessary modules
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import Image from "next/image";

// Your Next.js component
function Slider() {
    return (
        <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000} // Set autoplay interval to 5 seconds
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            dynamicHeight={false}
            centerMode={false}
            centerSlidePercentage={100}
            showThumbs={false}
            className="relative overflow-hidden h-[50vh] rounded-2xl md:h-[70vh] w-[90%]" // Set initial height using Tailwind classes
        >

            <div className="relative w-full hover-img max-h-[40vh] md:h-full md:max-h-full overflow-hidden">
                <a href="#" className='flex flex-col relative h-full md:h-full md:max-h-full'>
                    <img className="w-full mx-auto object-cover h-[70vh]"
                        src='/images/house1.jpg' alt="Image description" />
                    <div className=' flex flex-col justify-center items-center absolute top-0 z-10 left-0  p-1 bg-[#1111113f] w-full h-full text-white space-y-6'>
                        <p className="text-3xl">A house is not just a building, its a home! Find your home today.</p>
                        <div className="flex items-center justify-center space-x-3 w-full">
                            <button className="w-40 bg-[green] text-white p-2 rounded-lg">
                                Signup
                            </button>
                            <button className="w-40 bg-white text-black p-2 rounded-lg">
                                View Details
                            </button>
                        </div>
                    </div>
                </a>
            </div>
            <div className="relative w-full hover-img max-h-[40vh] md:h-full md:max-h-full overflow-hidden">
                <a href="#" className='flex flex-col relative h-full md:h-full md:max-h-full'>
                    <img className="w-full mx-auto object-cover h-[70vh]"
                        src='/images/house3.jpg' alt="Image description" />
                    <div className=' flex flex-col justify-center items-center absolute top-0 z-10 left-0  p-1 bg-[#1111113f] w-full h-full text-white space-y-6'>
                        <p className="text-3xl">A house is not just a building, its a home! Find your home today.</p>
                        <div className="flex items-center justify-center space-x-3 w-full">
                            <button className="w-40 bg-[green] text-white p-2 rounded-lg">
                                Signup
                            </button>
                            <button className="w-40 bg-white text-black p-2 rounded-lg">
                                View Details
                            </button>
                        </div>
                    </div>
                </a>
            </div>
            <div className="relative w-full hover-img max-h-[40vh] md:h-full md:max-h-full overflow-hidden">
                <a href="#" className='flex flex-col relative h-full md:h-full md:max-h-full'>
                    <img className="w-full mx-auto object-cover h-[70vh]"
                        src='/images/house2.jpg' alt="Image description" />
                    <div className=' flex flex-col justify-center items-center absolute top-0 z-10 left-0  p-1 bg-[#1111113f] w-full h-full text-white space-y-6'>
                        <p className="text-3xl">Get started on the journey to finding your dream house.</p>
                        <div className="flex items-center justify-center space-x-3 w-full">
                            <button className="w-40 bg-[green] text-white p-2 rounded-lg">
                                Signup
                            </button>
                            <button className="w-40 bg-white text-black p-2 rounded-lg">
                                View Details
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        </Carousel>
    );
}

export default Slider;
