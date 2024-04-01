import { Carousel } from "flowbite-react";
const SliderImages = () => {
    return (
        <div className="h-[465px] max-tl:px-1 shadow-lg">
            <Carousel
                slideInterval={5000}
                indicators={false}
                leftControl={
                    <i className="fa-solid fa-chevron-left py-4 px-3 rounded-lg shadow-lg text-white bg-opacity-30 bg-black"></i>
                }
                rightControl={
                    <i className="fa-solid fa-chevron-right py-4 px-3 rounded-lg shadow-lg text-white bg-opacity-30 bg-black"></i>
                }
                pauseOnHover
            >
                {Array.from({ length: 4 }, (_, i) => (
                    <img
                        key={i}
                        loading="lazy"
                        src={`/uploads/banner${i + 1}.jpg`}
                        alt="..."
                        className="h-[500px] object-cover"
                    />
                ))}
            </Carousel>
        </div>
    );
};

export default SliderImages;
