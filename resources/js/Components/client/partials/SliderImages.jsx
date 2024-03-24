import { Carousel } from "flowbite-react";
const SliderImages = () => {
    return (
        <div className="h-[500px]">
            <Carousel
                slideInterval={5000}
                indicators={false}
                leftControl={
                    <i className="fa-solid fa-chevron-left py-4 px-3 rounded-lg shadow-lg text-white bg-opacity-70 bg-black"></i>
                }
                rightControl={
                    <i className="fa-solid fa-chevron-right py-4 px-3 rounded-lg shadow-lg text-white bg-opacity-70 bg-black"></i>
                }
                pauseOnHover
            >
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="..."
                    className="h-[500px] object-cover"
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                    className="h-[500px] object-cover"
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                    alt="..."
                    className="h-[500px] object-cover"
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                    alt="..."
                    className="h-[500px] object-cover"
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                    alt="..."
                    className="h-[500px] object-cover"
                />
            </Carousel>
        </div>
    );
};

export default SliderImages;
