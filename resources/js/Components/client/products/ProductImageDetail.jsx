import { Carousel } from "flowbite-react";

const ProductImageDetail = ({ images }) => {
    return (
        <div className="w-full flex flex-col col-span-2 max-tl:col-span-5 gap-4 p-2  rounded-xl p max-mb:p-0">
            <div className="h-[480px] max-mb:h-[300px] shadow-lg border rounded-xl">
                {images?.length == 1 && (
                    <img
                        loading="lazy"
                        key={images[0]?.id}
                        src={images[0]?.image}
                        alt="..."
                        className="h-[500px] object-cover max-mb:h-[300px]"
                    />
                )}
                {images?.length >= 2 && (
                    <Carousel
                        slideInterval={5000}
                        indicators={false}
                        leftControl={
                            <i className="fa-solid fa-chevron-left py-4 px-3 rounded-lg shadow-lg text-white bg-opacity-20 bg-black"></i>
                        }
                        rightControl={
                            <i className="fa-solid fa-chevron-right py-4 px-3 rounded-lg shadow-lg text-white bg-opacity-20 bg-black"></i>
                        }
                        pauseOnHover
                    >
                        {images?.map((i) => (
                            <img
                                loading="lazy"
                                key={i?.id}
                                src={i.image}
                                alt="..."
                                className="h-[500px] object-cover max-mb:h-[300px]"
                            />
                        ))}
                    </Carousel>
                )}
            </div>
        </div>
    );
};

export default ProductImageDetail;
