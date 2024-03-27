import { Carousel } from "flowbite-react";

const ProductImageDetail = ({ images }) => {
    return (
        <div className="w-full flex flex-col col-span-2 max-tl:col-span-5 gap-4  rounded-xl p-4">
            <div className="h-[480px]">
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
                    {images.map((i) => (
                        <img
                            loading="lazy"
                            key={i?.id}
                            src={i.image}
                            alt="..."
                            className="h-[500px] object-cover"
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default ProductImageDetail;
